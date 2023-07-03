-- FUNCTION: ou.sp_salvesta_rekv(json, integer, integer)

-- DROP FUNCTION IF EXISTS ou.sp_salvesta_rekv(json, integer, integer);

CREATE OR REPLACE FUNCTION ou.sp_salvesta_rekv(data JSON,
                                               user_id INTEGER,
                                               user_rekvid INTEGER)
    RETURNS INTEGER
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS
$BODY$


DECLARE
    rekv_id      INTEGER;
    userName     TEXT;
    doc_id       INTEGER = data ->> 'id';
    doc_data     JSON    = data ->> 'data';
    doc_parentid INTEGER = doc_data ->> 'parentid';
    doc_regkood  TEXT    = doc_data ->> 'regkood';
    doc_nimetus  TEXT    = doc_data ->> 'nimetus';
    doc_kbmkood  TEXT    = doc_data ->> 'kbmkood';
    doc_aadress  TEXT    = doc_data ->> 'aadress';
    doc_haldus   TEXT    = doc_data ->> 'haldus';
    doc_tel      TEXT    = doc_data ->> 'tel';
    doc_faks     TEXT    = doc_data ->> 'faks';
    doc_email    TEXT    = doc_data ->> 'email';
    doc_juht     TEXT    = doc_data ->> 'juht';
    doc_raama    TEXT    = doc_data ->> 'raama';
    doc_muud     TEXT    = doc_data ->> 'muud';
    doc_ftp      TEXT    = doc_data ->> 'ftp';
    doc_login    TEXT    = doc_data ->> 'login';
    doc_parool   TEXT    = doc_data ->> 'parool';
    doc_tahtpaev INTEGER = doc_data ->> 'tahtpaev';
    doc_earved   TEXT    = doc_data ->> 'earved';
    doc_liik     TEXT    = doc_data ->> 'liik';

    doc_details  JSON    = doc_data ->> 'gridData';
    detail_id    INTEGER;
    json_object  JSONB;
    json_arved   JSONB;
    json_record  RECORD;
    ids          INTEGER[];

    new_history  JSON;
    aa_history   JSON;
    user_json    JSON;
    v_user       RECORD;
    new_user_id  INTEGER;
    is_import    BOOLEAN = data ->> 'import';
    user_roles   JSON;

BEGIN
    RAISE NOTICE 'start';

    SELECT kasutaja
    INTO userName
    FROM ou.userid u
    WHERE u.rekvid = user_rekvid
      AND u.id = user_id;

    IF is_import IS NULL AND userName IS NULL
    THEN
        RAISE EXCEPTION 'User not found %', user;
    END IF;

    -- rekl ftp andmed
    json_object = (SELECT to_jsonb(row)
                   FROM (SELECT doc_ftp    AS ftp,
                                doc_login  AS login,
                                doc_parool AS parool) row);

    json_object = (SELECT to_jsonb(row)
                   FROM (SELECT json_object :: JSONB AS reklftp) row);

    -- arved properties

    json_arved = (SELECT to_jsonb(row)
                  FROM (SELECT doc_tahtpaev AS tahtpaev) row);

    json_object = json_object || (SELECT to_jsonb(row)
                                  FROM (SELECT json_arved :: JSONB AS arved,
                                               doc_earved          AS earved,
                                               doc_liik            AS liik
                                       ) row);


    IF (doc_id IS NULL)
    THEN
        doc_id = doc_data ->> 'id';
    END IF;

    SELECT row_to_json(row)
    INTO new_history
    FROM (SELECT now()    AS updated,
                 userName AS user,
                 r.*
          FROM ou.rekv r
          WHERE r.id = doc_id) row;

-- save aa old state

    SELECT array_to_json(array_agg(row_to_json(row_data)))
    INTO aa_history
    FROM (SELECT aa.*
          FROM ou.aa aa
          WHERE aa.parentid = doc_id) row_data;

    aa_history = ('{"aa":' || aa_history :: TEXT || '}') :: JSON;
    new_history = new_history :: JSONB || aa_history :: JSONB;

    UPDATE ou.rekv
    SET regkood    = doc_regkood,
        kbmkood    = doc_kbmkood,
        nimetus    = doc_nimetus,
        aadress    = doc_aadress,
        haldus     = doc_haldus,
        tel        = doc_tel,
        faks       = doc_faks,
        email      = doc_email,
        juht       = doc_juht,
        raama      = doc_raama,
        muud       = doc_muud,
        ajalugu    = new_history,
        properties = coalesce(properties :: JSONB, '{}' :: JSONB) || json_object :: JSONB
    WHERE id = doc_id RETURNING id
        INTO rekv_id;

    FOR json_object IN
        SELECT *
        FROM json_array_elements(doc_details)
        LOOP
            SELECT *
            INTO json_record
            FROM jsonb_to_record(
                         json_object) AS x (id TEXT, parentid INTEGER, arve TEXT, nimetus TEXT, default_ BOOLEAN,
                                            kassa INTEGER,
                                            pank INTEGER,
                                            konto TEXT, tp TEXT, muud TEXT, kassapank INTEGER);

            IF NOT exists(SELECT id
                          FROM ou.aa
                          WHERE parentid = user_rekvid
                            AND kassa = json_record.kassapank
                            AND default_ = 1
                )
            THEN
                json_record.default_ = 1;
            END IF;

            IF json_record.id IS NULL OR json_record.id = '0' OR substring(json_record.id FROM 1 FOR 3) = 'NEW'
            THEN


                INSERT INTO ou.aa (parentid, arve, nimetus, default_, kassa, pank, konto, tp, muud)
                VALUES (user_rekvid, json_record.arve, json_record.nimetus,
                        (CASE WHEN json_record.default_ IS NULL OR NOT json_record.default_ THEN 0 ELSE 1 END),
                        json_record.kassapank, coalesce(json_record.pank, 1), json_record.konto, json_record.tp,
                        json_record.muud) RETURNING id
                           INTO detail_id;

            ELSE
                UPDATE ou.aa
                SET arve     = json_record.arve,
                    nimetus  = json_record.nimetus,
                    default_ = (CASE WHEN json_record.default_ IS NULL OR NOT (json_record.default_) THEN 0 ELSE 1 END),
                    kassa    = json_record.kassapank,
                    pank     = json_record.pank,
                    konto    = json_record.konto,
                    tp       = json_record.tp,
                    muud     = json_record.muud
                WHERE id = json_record.id :: INTEGER RETURNING id
                    INTO detail_id;
            END IF;

            -- add new id into array of ids
            ids = array_append(ids, detail_id);
        END LOOP;

    -- delete record which not in json

    DELETE
    FROM ou.aa
    WHERE parentid = doc_id
      AND id NOT IN (SELECT unnest(ids));

    RETURN rekv_id;
EXCEPTION
    WHEN OTHERS
        THEN
            RAISE EXCEPTION 'error % %', SQLERRM, SQLSTATE;
            RETURN 0;

END;
$BODY$;

ALTER FUNCTION ou.sp_salvesta_rekv(JSON, INTEGER, INTEGER)
    OWNER TO postgres;

GRANT EXECUTE ON FUNCTION ou.sp_salvesta_rekv(JSON, INTEGER, INTEGER) TO PUBLIC;

GRANT EXECUTE ON FUNCTION ou.sp_salvesta_rekv(JSON, INTEGER, INTEGER) TO db;

GRANT EXECUTE ON FUNCTION ou.sp_salvesta_rekv(JSON, INTEGER, INTEGER) TO postgres;

/*
select * from ou.sp_salvesta_rekv('{"data":{"docTypeId":"REKV","module":"raama","userId":22,"uuid":"002c6660-1972-11ee-8a58-f3a78467b95a","docId":1,"context":null,"doc_type_id":"REKV","userid":22,"id":1,"parentid":0,"nimetus":"Korteriühistu","taisnimetus":"Korteriühistu","aadress":"Narva aadress","email":"","faks":"","haldus":"","juht":"Juht","raama":"Raama","kbmkood":"","muud":null,"regkood":"123456789","tel":"","tahtpaev":null,"ftp":null,"login":null,"parool":null,"earved":null,"earved_omniva":null,"earve_asutuse_nimi":null,"earve_regkood":null,"seb_earve":"","swed_earve":"","liik":null,"swed":null,"seb":null,"oma_tp":null,"row":[{"doc_type_id":"REKV","userid":22,"id":1,"parentid":0,"nimetus":"Korteriühistu","taisnimetus":"Korteriühistu","aadress":"Narva","email":"","faks":"","haldus":"","juht":"Juht","raama":"Raama","kbmkood":"","muud":null,"regkood":"123456789","tel":"","tahtpaev":null,"ftp":null,"login":null,"parool":null,"earved":null,"earved_omniva":null,"earve_asutuse_nimi":null,"earve_regkood":null,"seb_earve":"","swed_earve":"","liik":null,"swed":null,"seb":null,"oma_tp":null}],"details":[{"id":3,"arve":"EEEarve             ","nimetus":"test arve                                                                                                                                                                                                                                                     ","default_":0,"kassa":1,"pank":1,"konto":"","tp":"","kassapank":1,"userid":"22"},{"id":1,"arve":"EEXXXXXX            ","nimetus":"test arve                                                                                                                                                                                                                                                     ","default_":1,"kassa":1,"pank":767,"konto":"100100","tp":null,"kassapank":1,"userid":"22"},{"id":2,"arve":"KASSA               ","nimetus":"Kassa                                                                                                                                                                                                                                                         ","default_":1,"kassa":0,"pank":0,"konto":null,"tp":null,"kassapank":0,"userid":"22"}],"gridConfig":[{"id":"id","name":"id","width":"0px","show":false,"type":"text","readOnly":true},{"id":"arve","name":"Arve","width":"100px","show":true,"type":"text","readOnly":false},{"id":"nimetus","name":"Nimetus","width":"300px","show":true,"readOnly":true},{"id":"konto","name":"Konto","width":"100px","show":true,"type":"text","readOnly":false},{"id":"tp","name":"TP","width":"100px","show":true,"type":"text","readOnly":false}],"config":[{"id":1,"number":"","rekvid":1,"toolbar1":0,"toolbar2":0,"toolbar3":0,"tahtpaev":0,"keel":2,"port":"465","smtp":"smtp.gmail.com","user":"vladislav.gordin@gmail.com","pass":"motxuaixerasoore","email":"vladislav.gordin@gmail.com","earved":null,"liik":null}],"gridData":[{"id":3,"arve":"EEEarve             ","nimetus":"test arve                                                                                                                                                                                                                                                     ","default_":0,"kassa":1,"pank":1,"konto":"","tp":"","kassapank":1,"userid":"22"},{"id":1,"arve":"EEXXXXXX            ","nimetus":"test arve                                                                                                                                                                                                                                                     ","default_":1,"kassa":1,"pank":767,"konto":"100100","tp":null,"kassapank":1,"userid":"22"},{"id":2,"arve":"KASSA               ","nimetus":"Kassa                                                                                                                                                                                                                                                         ","default_":1,"kassa":0,"pank":0,"konto":null,"tp":null,"kassapank":0,"userid":"22"}]}}'::json, 22::integer, 1) as id
*/