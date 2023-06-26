module.exports = {
    grid: {
        gridConfiguration: [
            {id: "id", name: "id", width: "10%", show: false},
            {id: "dokument", name: "Document", width: "25%"},
            {id: "kpv", name: "Date", width: "15%", type: "date", interval: true},
            {id: "objekt", name: "Picture", width: "20%"},
            {id: "asutus", name: "Buyer", width: "20%"},
            {id: "summa", name: "Summa", width: "10%"},

        ],
        sqlString: `SELECT *
                    FROM (
                             SELECT d.id,
                                    l.kood::TEXT                           AS doc_type_id,
                                    l.nimetus                              AS dokument,
                                    to_char(arv.kpv, 'DD.MM.YYYY') :: TEXT AS kpv,
                                    arv.summa,
                                    a.nimetus                              AS asutus,
                                    deal.id                                AS deal_id,
                                    p.description                          AS objekt,
                                    $1::INTEGER                            AS rekvid,
                                    $2::INTEGER                            AS userId,
                                    d.lastupdate
                             FROM docs.doc d
                                      INNER JOIN docs.arv arv ON d.id = arv.parentid
                                      INNER JOIN libs.asutus a ON a.id = arv.asutusid
                                      INNER JOIN libs.library l ON l.id = d.doc_type_id
                                      INNER JOIN bors.deals deal ON deal.invoice_id = d.id
                                      INNER JOIN bors.pictures p
                                                 ON p.id = deal.picture_id
                             WHERE D.status <> 3
                         ) qry
                    ORDER BY lastupdate DESC`,     //  $1 всегда ид учреждения $2 - всегда ид пользователя
        params: '',
        alias: 'cur_teatised'
    },
    print: [
        {
            view: 'tunnus',
            params: 'id',
            converter: function (data) {
//преобразует дату к формату yyyy-mm-dd
                data.map(row => {
                    if (row.valid) {
                        row.valid = row.valid.toISOString().slice(0, 10);
                    }
                    return row;
                });
                return data;
            }
        },
        {
            view: 'tunnus',
            params: 'sqlWhere',
            converter: function (data) {
//преобразует дату к формату yyyy-mm-dd
                data.map(row => {
                    if (row.valid) {
                        row.valid = row.valid.toISOString().slice(0, 10);
                    }
                    return row;
                });
                return data;
            }
        },
    ]

};

