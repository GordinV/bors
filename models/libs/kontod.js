module.exports = {
    select: [{
        sql: `SELECT coalesce(l.rekvid, 0)                                         AS rekvid,
                     CASE
                         WHEN coalesce((l.properties::JSONB ->> 'tun5')::INTEGER, 0) = 1 THEN 'SD'
                         WHEN coalesce((l.properties::JSONB ->> 'tun5')::INTEGER, 0) = 2 THEN 'SK'
                         WHEN coalesce((l.properties::JSONB ->> 'tun5')::INTEGER, 0) = 3 THEN 'D'
                         WHEN coalesce((l.properties::JSONB ->> 'tun5')::INTEGER, 0) = 4 THEN 'K'
                         ELSE NULL END::VARCHAR(20)                                AS konto_tyyp,
                     l.id,
                     trim(l.kood)::VARCHAR(20)                                     AS kood,
                     trim(l.nimetus)::VARCHAR(254)                                 AS nimetus,
                     l.library,
                     l.muud,
                     $2::INTEGER                                                   AS userid,
                     'KONTOD'                                                      AS doc_type_id,
                     coalesce((l.properties::JSONB ->> 'tun5')::INTEGER, 0)        AS tyyp,
                     l.status,
                     coalesce((l.properties::JSONB ->> 'kas_virtual')::INTEGER, 0) AS kas_virtual,
                     (l.properties::JSONB ->> 'valid')::DATE                       AS valid
              FROM libs.library l
              WHERE l.id = $1`,
        sqlAsNew: `select null::integer as rekvId, 
            'SD'::varchar(20) as konto_tyyp, 
            $1::integer as id , $2::integer as userid, 'KONTOD' as doc_type_id,
            null::varchar(20) as  kood,
            null::varchar(20) as nimetus,
            'KONTOD'::text as library,
            2 as tyyp,
            0 as status,
            0 as kas_virtual,
            null::text as muud,
            null::date as valid`,
        query: null,
        multiple: false,
        alias: 'row',
        data: []
    },
        {
            sql: `SELECT $1 AS rekv_id, *
                  FROM jsonb_to_recordset(
                               get_konto_kasutus($2::INTEGER, $3::DATE)
                           ) AS x (error_message TEXT, error_code INTEGER)
                  WHERE error_message IS NOT NULL
            `, //$1 rekvid, $2 v_nom.kood
            query: null,
            multiple: true,
            alias: 'validate_lib_usage',
            data: []
        }

    ],
    selectAsLibs: `SELECT *, $1 AS rekv_id
                   FROM com_kontoplaan l
                   ORDER BY kood`, //where ($1::integer is null or l.rekvId = $1 or l.rekvid is null)
    returnData: {
        row: {}
    },
    requiredFields: [
        {
            name: 'kood',
            type: 'C'
        },
        {
            name: 'nimetus',
            type: 'C'
        }
    ],
    saveDoc: `select libs.sp_salvesta_konto($1, $2, $3) as id`, // $1 - data json, $2 - userid, $3 - rekvid
    deleteDoc: `SELECT error_code, result, error_message
                FROM libs.sp_delete_konto($1, $2)`, // $1 - userId, $2 - docId
    grid: {
        gridConfiguration: [
            {id: "id", name: "id", width: "10%", show: false},
            {id: "kood", name: "Kood", width: "25%"},
            {id: "nimetus", name: "Nimetus", width: "35%"},
            {id: "konto_tyyp", name: "Konto tüüp", width: "20%"}
        ],
        sqlString: `SELECT id,
                           trim(kood)::VARCHAR(20)        AS kood,
                           trim(nimetus)::VARCHAR(254)    AS nimetus,
                           $2::INTEGER                    AS userId,
                           CASE
                               WHEN coalesce((l.properties::JSONB ->> 'tun5')::INTEGER, 1) = 1 THEN 'SD'
                               WHEN coalesce((l.properties::JSONB ->> 'tun5')::INTEGER, 1) = 2 THEN 'SK'
                               WHEN coalesce((l.properties::JSONB ->> 'tun5')::INTEGER, 1) = 3 THEN 'D'
                               WHEN coalesce((l.properties::JSONB ->> 'tun5')::INTEGER, 1) = 4 THEN 'K'
                               ELSE NULL END::VARCHAR(20) AS konto_tyyp
                    FROM libs.library l
                    WHERE library = 'KONTOD'
                      AND (l.rekvId = $1 OR l.rekvid IS NULL)
                      AND l.status <> 3`,     //  $1 всегда ид учреждения $2 - всегда ид пользователя
        params: '',
        alias: 'curKontod'
    },
    print: [
        {
            view: 'kontod',
            params: 'id'
        },
        {
            view: 'kontod',
            params: 'sqlWhere'
        },
    ]


};
