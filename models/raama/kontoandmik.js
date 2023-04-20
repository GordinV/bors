module.exports = {
    grid: {
        gridConfiguration: [
            {id: "id", name: "id", width: "25px", show: false},
            {id: "period", name: "Period", width: "10%", show: false, type: "date", interval: true},
            {id: "korr_konto", name: "Korr.Konto", width: "15%"},
            {id: "nimetus", name: "Nimetus", width: "25%", show: true},
            {id: "deebet", name: "Deebet", width: "10%", type: "number", interval: true},
            {id: "kreedit", name: "Kreedit", width: "10%", type: "number", interval: true},
            {id: "dok", name: "Dokument", width: "10%", show: true},
            {id: "asutus", name: "Asutus", width: "25%", show: true},
            {id: "selg", name: "Selgitus", width: "25%", show: true},
            {id: "tunnus", name: "Tunnus", width: "5%", show: true},
            {id: "number", name: "Number", width: "5%", show: true},

        ],
        sqlString: `SELECT count(*) OVER ()                      AS rows_total,
                           count(*) OVER (PARTITION BY konto)    AS id,
                           $3::DATE                              AS period,
                           qry.alg_saldo::NUMERIC(14, 2),
                           qry.db_kokku::NUMERIC(14, 2),
                           qry.kr_kokku::NUMERIC(14, 2),
                           qry.rekv_id::INTEGER,
                           qry.rekv_nimi::VARCHAR(254),
                           qry.kpv::DATE,
                           qry.deebet::NUMERIC(14, 2),
                           qry.kreedit::NUMERIC(14, 2),
                           qry.konto::VARCHAR(20),
                           qry.korr_konto::VARCHAR(20),
                           qry.dok:: VARCHAR(120),
                           qry.asutus:: VARCHAR(254),
                           qry.number:: INTEGER,
                           qry.kood1:: VARCHAR(20),
                           qry.kood2:: VARCHAR(20),
                           qry.kood3:: VARCHAR(20),
                           qry.kood4:: VARCHAR(20),
                           qry.kood5:: VARCHAR(20),
                           qry.proj:: VARCHAR(20),
                           qry.tunnus:: VARCHAR(20),
                           qry.selg:: TEXT,
                           k.nimetus,
                           (qry.alg_saldo + db_kokku - kr_kokku) AS lopp_saldo
                    FROM com_kontoplaan k,
                         docs.kontoandmik(k.kood::TEXT, $2::DATE, $3::DATE, $4::INTEGER, $5::TEXT, $6::JSONB) qry
                    WHERE k.kood LIKE $1::TEXT || '%'

        `,     //  $1 конто $2 - kpv1, $3 - kpv2, $4 - rekvid (svod), $4 - tunnus,  $6 - доп. параметры
        params: '',
        alias: 'kontoandmik_report'
    }
};
