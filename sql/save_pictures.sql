DROP FUNCTION IF EXISTS bors.save_pictures(BYTEA, JSONB);

CREATE OR REPLACE FUNCTION bors.save_pictures(IN fileData BYTEA,
                                              IN data JSONB,
                                              OUT result INTEGER,
                                              OUT docData JSONB,
                                              OUT error_code INTEGER,
                                              OUT error_message TEXT)
    RETURNS RECORD
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS
$BODY$

DECLARE
    row_id          INTEGER;
    doc_id          INTEGER = coalesce((data ->> 'id')::INTEGER, 0);
    doc_name        TEXT    = data ->> 'name';
    doc_description TEXT    = data ->> 'description';
    doc_kood        TEXT    = data ->> 'kood';
    doc_author_id   INTEGER = coalesce((data ->> 'author_id')::INTEGER, 0);
    doc_user_id     INTEGER = data ->> 'user_id';

    jsonb_history   JSONB;


BEGIN
    IF NOT exists(SELECT id
                  FROM libs.asutus a
                  WHERE staatus < 3
                    AND properties ->> 'taotlus_id' IS NOT NULL
                    AND id = doc_author_id
        )
    THEN
        -- передан пользователь а не автор
        SELECT a.id
        INTO doc_author_id
        FROM libs.asutus a
        WHERE properties ->> 'taotlus_id' IS NOT NULL
          AND (properties ->> 'taotlus_id')::INTEGER IN (
            SELECT (properties ->> 'taotlus_id')::INTEGER
            FROM ou.userid
            WHERE id = doc_author_id
        )
        LIMIT 1;
    END IF;

    IF doc_author_id IS NOT NULL AND doc_author_id = 0
    THEN
        doc_author_id = NULL;
    END IF;

    -- вставка или апдейт docs.doc
    IF doc_id IS NULL OR doc_id = 0 OR NOT exists(SELECT id FROM bors.pictures WHERE id = doc_id)
    THEN

        INSERT INTO bors.pictures (file, name, kood, description, extension, author_id)
        VALUES (fileData, doc_name, doc_kood, doc_description, 'JPG', doc_author_id) RETURNING id
            INTO row_id;
    ELSE
        -- check is this code in use

        UPDATE bors.pictures
        SET kood        = doc_kood,
            description = doc_description,
            author_id   = doc_author_id
        WHERE id = doc_id RETURNING id
            INTO row_id;

    END IF;

    result = row_id;
    SELECT to_jsonb(row)
    INTO docData
    FROM (SELECT p.*,
                 a.nimetus AS author
          FROM bors.pictures p
                   LEFT OUTER JOIN libs.asutus a ON p.author_id = a.id
          WHERE p.id = row_id) row;

    RETURN;

EXCEPTION
    WHEN OTHERS
        THEN
            RAISE NOTICE 'error % %', SQLERRM, SQLSTATE;
            result = -1;
            error_message = SQLERRM;
            error_code = 9;

            RETURN;
END;
$BODY$;


GRANT EXECUTE ON FUNCTION bors.save_pictures(BYTEA, JSONB) TO PUBLIC;
GRANT EXECUTE ON FUNCTION bors.save_pictures(filedata BYTEA, DATA JSONB, OUT result INTEGER, OUT docdata JSONB, OUT error_code INTEGER, OUT error_message TEXT) TO dbkasutaja;
