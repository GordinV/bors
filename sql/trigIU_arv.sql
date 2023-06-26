DROP TRIGGER IF EXISTS trigiu_arv_jaak_after
    ON docs.arv CASCADE;

DROP FUNCTION IF EXISTS docs.trigiu_arv_jaak_update_after();

CREATE FUNCTION docs.trigiu_arv_jaak_update_after()
    RETURNS TRIGGER
    LANGUAGE plpgsql
AS
$$
DECLARE
    v_deal RECORD;
BEGIN
--    l_jaak = docs.sp_update_arv_jaak(new.parentid);

    RAISE NOTICE 'l_jaak %', new.jaak;
    IF new.jaak <= 0
    THEN
        SELECT *
        INTO v_deal
        FROM bors.deals
        WHERE invoice_id IS NOT NULL
          AND invoice_id = new.parentid
        LIMIT 1;

/*        IF v_deal IS NULL
        THEN
            RAISE EXCEPTION 'deal not found, v_deal %', v_deal;
        END IF;
*/
        -- 1. update deal status
        UPDATE bors.deals SET status = 2 WHERE id = v_deal.id;

        -- 2  status of picture
        UPDATE bors.pictures SET status = 1 WHERE id = v_deal.picture_id;

    END IF;

    RETURN NULL;

END;
$$;

CREATE TRIGGER trigiu_arv_jaak_after
    AFTER INSERT OR UPDATE
    ON docs.arv
    FOR EACH ROW
EXECUTE PROCEDURE docs.trigiu_arv_jaak_update_after();
