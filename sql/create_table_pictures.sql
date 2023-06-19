CREATE SEQUENCE bors.pictures_id_seq
    AS INTEGER
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

DROP TABLE IF EXISTS bors.pictures;

CREATE TABLE bors.pictures (
    id          INTEGER NOT NULL DEFAULT nextval('bors.pictures_id_seq'::REGCLASS),
    file        BYTEA,
    name        TEXT    NOT NULL,
    extension   TEXT    NOT NULL,
    description TEXT,
    history     JSONB,
    status      INTEGER          DEFAULT 1,
    lastupdate  TIMESTAMP        DEFAULT now(),
    properties  JSONB,
    PRIMARY KEY (id)
);

ALTER TABLE bors.pictures
    ADD COLUMN IF NOT EXISTS kood TEXT;

ALTER TABLE IF EXISTS bors.pictures
    OWNER TO postgres;

ALTER TABLE bors.pictures
    ADD COLUMN IF NOT EXISTS author_id INTEGER REFERENCES libs.asutus(id) ON DELETE RESTRICT ON UPDATE CASCADE;

GRANT ALL ON SEQUENCE bors.pictures_id_seq TO dbkasutaja;
GRANT ALL ON TABLE bors.pictures TO dbkasutaja;


