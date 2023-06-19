DROP FUNCTION IF EXISTS bors.accept_deal(INTEGER, INTEGER);

CREATE OR REPLACE FUNCTION bors.accept_deal(IN user_id INTEGER,
                                            IN doc_id INTEGER,
                                            OUT error_code INTEGER,
                                            OUT result INTEGER,
                                            OUT doc_type_id TEXT,
                                            OUT error_message TEXT)
    RETURNS RECORD AS
$BODY$

DECLARE
    v_deal           RECORD;
    json_object      JSONB;
    l_json_invoice   JSONB;
    json_invoice_rea JSONB   = '[]';

    l_invoice_id     INTEGER = 0;
    l_number         TEXT;
    l_aa             TEXT    = (SELECT arve
                                FROM ou.aa
                                WHERE parentid = 1
                                  AND kassa = 1
                                ORDER BY default_ DESC
                                LIMIT 1); -- берем дефолтный расчетный счет

    l_nom_id         INTEGER = 1; -- услуга - продажа картин
    l_rekv_id        INTEGER = 1;

BEGIN
    /*
     1. формируем счет
     2. меняем статус с нового на активный
     */


    -- создаем счет на оплату

    -- 4. услуги из списка табеля

    -- читаем табель и создаем детали счета
    SELECT l_nom_id      AS nomid,
           1             AS kogus,
           (d.price)     AS hind,
           (d.price)     AS summa,
           d.id          AS deal_id,
           p.description AS markused,
           current_date  AS kpv,
           d.asutus_id   AS asutusid,
           20            AS vat
    INTO v_deal
    FROM bors.deals d
             INNER JOIN bors.pictures p ON d.picture_id = p.id
             INNER JOIN libs.asutus a ON a.id = d.asutus_id

    WHERE d.id = doc_id;

    -- формируем строку счтеа
    json_invoice_rea =
                '[]'::JSONB || jsonb_build_object('nomid', v_deal.nomid, 'kogus', v_deal.kogus, 'hind', v_deal.hind,
                                                  'kbmta', v_deal.summa, 'kbm', v_deal.summa * (v_deal.vat / 100),
                                                  'summa', (v_deal.summa *
                                                            (v_deal.vat / 100)) +
                                                           v_deal.summa, 'muud', v_deal.markused);

    -- создаем параметры
    l_json_invoice = (SELECT to_json(row)
                      FROM (SELECT coalesce(l_invoice_id, 0) AS id,
                                   l_number                  AS number,
                                   0                         AS liik,
                                   current_date              AS kpv,
                                   current_date + 15         AS tahtaeg,
                                   v_deal.asutusid           AS asutusid,
                                   l_aa                      AS aa,
                                   '' as lisa,
                                   json_invoice_rea          AS "gridData") row);

    -- подготавливаем параметры для создания счета
    SELECT row_to_json(row)
    INTO json_object
    FROM (SELECT 0 AS id, l_json_invoice AS data) row;

    SELECT docs.sp_salvesta_arv(json_object :: JSON, user_id, l_rekv_id) INTO l_invoice_id;

    IF l_invoice_id IS NULL OR empty(l_invoice_id)
    THEN
        -- что-то пошло не так
        RAISE EXCEPTION 'Error in saiving invoice';
    END IF;

    -- устанавливаем статус
    -- статус 2 , бронировка
    UPDATE bors.deals SET status = 2, invoice_id = l_invoice_id WHERE id = doc_id;
    result = 1;

    RETURN;

END ;

$BODY$
    LANGUAGE plpgsql
    VOLATILE
    COST 100;

--GRANT EXECUTE ON FUNCTION bors.accept_deal(INTEGER, INTEGER) TO dbkasutaja;
GRANT EXECUTE ON FUNCTION bors.accept_deal(INTEGER, INTEGER) TO PUBLIC;

--GRANT EXECUTE ON FUNCTION lapsed.koosta_arve_taabeli_alusel(INTEGER, INTEGER, DATE) TO arvestaja;


/*
select  bors.accept_deal(22, 1)
 */

