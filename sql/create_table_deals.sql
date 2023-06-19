CREATE SEQUENCE bors.deals_id_seq
    AS INTEGER
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

DROP TABLE IF EXISTS bors.deals;

CREATE TABLE bors.deals (
    id         INTEGER NOT NULL DEFAULT nextval('bors.deals_id_seq'::REGCLASS),
    picture_id INTEGER NOT NULL REFERENCES bors.pictures (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    asutus_id  INTEGER NOT NULL,
    user_id    INTEGER NOT NULL,
    price      NUMERIC(12, 2)   DEFAULT 0,
    deal_date  DATE             DEFAULT current_date,
    history    JSONB,
    status     INTEGER          DEFAULT 0,
    lastupdate TIMESTAMP        DEFAULT now(),
    properties JSONB,
    PRIMARY KEY (id)
);



GRANT ALL ON SEQUENCE bors.deals_id_seq TO dbkasutaja;
GRANT ALL ON SEQUENCE bors.deals_id_seq TO public;

GRANT ALL ON TABLE bors.deals TO dbkasutaja;
GRANT ALL ON TABLE bors.deals TO public;

ALTER table bors.deals add COLUMN  if not exists invoice_id INTEGER;
