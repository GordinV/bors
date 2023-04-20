module.exports = {
    grid: {
        gridConfiguration: [
            {id: "period", name: "Period", width: "10%", show: false, type: "date", interval: true},
            {id: "konto", name: "Konto", width: "15%"},
            {id: "nimetus", name: "Nimetus", width: "25%", show: true},
            {id: "alg_saldo", name: "Alg.saldo", width: "10%", type: "number", interval: true},
            {id: "deebet", name: "Deebet", width: "10%", type: "number", interval: true},
            {id: "kreedit", name: "Kreedit", width: "10%", type: "number", interval: true},
            {id: "lopp_saldo", name: "Lõpp saldo", width: "10%", type: "number", interval: true},
        ],
        sqlString: `SELECT count(*) OVER ()                                                                       AS rows_total,
                           count(*) OVER (PARTITION BY konto)                                                     AS id,
                           $3::DATE                                                                               AS period,
                           qryReport.konto                                                                        AS konto,
                           l.nimetus,
                           coalesce(alg_saldo, 0)::NUMERIC(14, 4)                                                 AS alg_saldo,
                           coalesce(deebet, 0)::NUMERIC(14, 4)                                                    AS deebet,
                           coalesce(kreedit, 0)::NUMERIC(14, 4)                                                   AS kreedit,
                           (coalesce(alg_saldo, 0) + coalesce(deebet, 0) - coalesce(kreedit, 0)) ::NUMERIC(14, 4) AS lopp_saldo,
                           $2                                                                                     AS user_id
                    FROM docs.kaibeandmik($3::DATE, $4:: DATE, $1::INTEGER, 0) qryReport
                             LEFT OUTER JOIN libs.library l ON l.kood = qryReport.konto AND l.library = 'KONTOD'

        `,     // $1 - rekvid, $3 - alg_kpv, $4 - lopp_kpv
        params: ['rekvid', 'userid', 'period_start', 'period_end'],
        totals: ` sum(alg_saldo) over() as alg_saldo_total,
                sum(deebet) over() as deebet_total,
                sum(kreedit) over() as kreedit_total,
                sum(lopp_saldo) over() as lopp_saldo_total`,
        alias: 'kaibeandmik_report'
    },
    print: [
        {
            view: 'kaibeandmik_report_register',
            params: 'sqlWhere',
            converter: function (data) {
                let alg_saldo_kokku = 0;
                let deebet_kokku = 0;
                let kreedit_kokku = 0;
                let lopp_saldo_kokku = 0;

                let row_id = 0;
                let groupedData = {};
                data.forEach(row => {
                    alg_saldo_kokku = Number(alg_saldo_kokku) + Number(row.alg_saldo);
                    deebet_kokku = Number(deebet_kokku) + Number(row.deebet);
                    kreedit_kokku = Number(kreedit_kokku) + Number(row.kreedit);
                    lopp_saldo_kokku = Number(lopp_saldo_kokku) + Number(row.lopp_saldo);
                });

                return data.map(row => {
                    row_id++;
                    row.alg_saldo_kokku = alg_saldo_kokku;
                    row.deebet_kokku = deebet_kokku;
                    row.kreedit_kokku = kreedit_kokku;
                    row.lopp_saldo_kokku = lopp_saldo_kokku;
                    row.row_id = row_id;
                    return row;
                })
            }
        },
    ],

};
