'use strict';

const React = require('react');
const ReactServer = require('react-dom/server');
const getModule = require('./../../libs/getModule');
const menuModel = require('./../../models/ou/start-menu');

const {StaticRouter} = require('react-router');
const path = require('path');
const App = require('./../../frontend/modules/main.jsx');
const DocContext = require('./../../frontend/doc-context');
const config = require('./../../config/main');

const db = require('./../../libs/db');
const RECORDS_LIMIT = require('./../../config/constants').RECORDS_LIMIT;
const prepaireFilterData = require('./../../libs/prepaireFilterData');
const prepareSqlWhereFromFilter = require('./../../libs/prepareSqlWhereFromFilter');
const multer = require('multer');
//const Busboy = require('connect-busboy');
const Busboy = require('busboy');
const connectBusboy = require('connect-busboy');
const fs = require('fs');

exports.post = async (req, res) => {
//    let user = require('../middleware/userData')(req); // данные пользователя
    let sql;
    let filter = req.body.filter ? req.body.filter : '';
    let user = req.body.user ? req.body.user : null;
    let is_admin = user && user.is_admin ? true : false;
    let continent = req.body.additionalFilters && req.body.additionalFilters.continent ? req.body.additionalFilters.continent : '';
    let region = req.body.additionalFilters && req.body.additionalFilters.region ? req.body.additionalFilters.region : '';
    let city = req.body.additionalFilters && req.body.additionalFilters.city ? req.body.additionalFilters.city : '';

    // регистр
    sql = `SELECT a.id,
                  a.regkood                    AS code,
                  a.nimetus                    AS name,
                  a.aadress,
                  a.tel,
                  a.email,
                  t.kasutaja                   AS login,
                  a.properties ->> 'continent' AS continent,
                  a.properties ->> 'region'    AS region,
                  a.properties ->> 'city'      AS city

           FROM libs.asutus a
                    LEFT OUTER JOIN ou.taotlus_login t ON (a.properties ->> 'taotlus_id')::INTEGER = a.id
           WHERE (a.staatus < 3
             AND a.properties ->> 'taotlus_id' IS NOT NULL)
              AND  (a.nimetus ILIKE '%${filter}%'
                 OR a.regkood ILIKE '%${filter}%'
                 OR a.tel ILIKE '%${filter}%'
                 OR a.email ILIKE '%${filter}%')
                AND (('${continent}' = '' OR coalesce(a.properties->>'continent','continent') ILIKE '%${continent}%')
                AND ('${region}' = '' OR coalesce(a.properties->>'region','region') ILIKE '%${region}%')
                AND ('${city}' = '' OR coalesce(a.properties->>'city','city') ILIKE '%${city}%')
                  )
           ORDER BY a.nimetus`;

    console.log('sql', sql)
    try {
        let data = await db.queryDb(sql);
        if (data && data.error_code) {
            console.error('Viga', sql);
        }
        res.send(data);

    } catch (e) {
        console.error('Errror:', e)
        res.status(500).send({error_code: 500, error_message: e, result: -1});
    }

};

exports.put = async (req, res) => {
//    let user = require('../middleware/userData')(req); // данные пользователя
    let sql;
    let params = req.body;
    let user = req.body.user ? req.body.user : null;
    let is_admin = user && user.is_admin ? true : false;

    // sql
    sql = `UPDATE libs.asutus SET regkood ='${params.code}',
                       nimetus = '${params.name}',
                       tel = '${params.tel}',
                       email= '${params.email}',
                       properties = coalesce(properties,'{}')::JSONB || jsonb_build_object('region', '${params.region}', 'continent', '${params.continent}', 'city', '${params.city}')
                    WHERE id = ${params.id}`;

    try {
        let data = await db.queryDb(sql);
        if (data && data.error_code) {
            console.error('Viga', sql);
        }
        res.send(data);

    } catch (e) {
        console.error('Errror:', e)
        res.status(500).send({error_code: 500, error_message: e, result: -1});
    }

};
