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
    let filterContinent = req.body.additionalFilters && req.body.additionalFilters.continent ? req.body.additionalFilters.continent : '';
    let region = req.body.additionalFilters && req.body.additionalFilters.region ? req.body.additionalFilters.region : '';
    let city = req.body.additionalFilters && req.body.additionalFilters.city ? req.body.additionalFilters.city : '';
    let additionalFilter = {continent: filterContinent, city: city, region: region};
    let user = req.body.user ? req.body.user : null;
    let is_admin = user && user.is_admin ? true : false;

    // регистр
    sql = `
            SELECT * FROM (
            WITH statuses AS (
                    SELECT 0 AS id, 'new' AS name
                    UNION ALL
                    SELECT 1 AS id, 'active'
                    UNION ALL
                    SELECT 2 AS id, 'closed'
                    UNION ALL
                    SELECT 3 AS id, 'deleted'
            )
                SELECT t.*, 
                       t.nimi AS name,
                       t.kasutaja AS login,
                    t.properties->>'continent' AS continent,
                    t.properties->>'region' AS region,
                    t.properties->>'city' AS city,
                    s.name AS status_name
                   FROM ou.taotlus_login t
                    INNER JOIN statuses s ON s.id = t.status
                    WHERE  (
                    t.kasutaja ILIKE '%${filter}%'
                     OR t.nimi ILIKE '%${filter}%'
                     OR t.aadress ILIKE '%${filter}%'
                     OR t.email ILIKE '%${filter}%'
                     OR s.name ILIKE '%${filter}%'
                     )
                   ORDER BY id DESC
                   ) qry
                   WHERE (CASE WHEN empty('${filterContinent}') THEN NULL  ELSE '${filterContinent}' END IS NULL  OR qry.continent ILIKE '%${filterContinent}%')`;

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

exports.accept = async (req, res) => {
//    let user = require('../middleware/userData')(req); // данные пользователя
    let sql;
    let sqls;
    let params = req.body;
    let status = 0;

    if (!params.id || typeof params.id == 'undefined') {
        // ошибка
        console.error('Errror:', 'No parameters')
        return res.status(500).send({error_code: 500, error_message: 'No parameters', result: -1});
    }
    switch (params.event) {
        case 'accept':
            status = 1;
            sqls = [
                `UPDATE ou.taotlus_login  SET status = ${status} WHERE id = ${params.id};`,
                `INSERT INTO ou.userid (rekvid, kasutaja, ametnik, roles, properties, status)  
                    SELECT 1 AS rekvid, kasutaja, t.nimi, jsonb_build_object('is_kasutaja',TRUE), 
                        jsonb_build_object('taotlus_id',${params.id}), 1 
                        FROM ou.taotlus_login  t 
                        WHERE id = ${params.id};`,
                `INSERT INTO libs.asutus (rekvid, regkood, nimetus, omvorm, aadress,  email,properties, staatus)
                    SELECT 1 AS rekvid, kasutaja, t.nimi,'ISIK', t.aadress, t.email,
                           jsonb_build_object('taotlus_id',${params.id}), 1 
                        FROM ou.taotlus_login  t 
                        WHERE id = ${params.id};`
            ];

            break;
        case 'delete':
            status = 3;
            sql = `UPDATE ou.taotlus_login  SET status = ${status} WHERE id = ${params.id}`;

            break;
    }


    try {
        let data = sqls ? await db.executeQueries(sqls) : await db.queryDb(sql);

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
    let sqls;
    let params = req.body;
    let status = 0;

    if (!params.id || typeof params.id == 'undefined') {
        // ошибка
        console.error('Errror:', 'No parameters')
        return res.status(500).send({error_code: 500, error_message: 'No parameters', result: -1});
    }

    sqls = [
        `UPDATE ou.taotlus_login  
                    SET nimi ='${params.nimi}',
                        email='${params.email}',
                        aadress='${params.aadress}',
                        properties = coalesce(properties,'{}'::JSONB) || 
                                     jsonb_build_object('continent','${params.continent}', 
                            'region', '${params.region}', 'city', '${params.city}')
                    WHERE id = ${params.id};`,
        `UPDATE libs.asutus SET 
                nimetus = '${params.nimi}',
                email = '${params.email}',
                aadress = '${params.aadress}'
        WHERE properties->>'taotlus_id' IS NOT NULL 
            AND (properties->>'taotlus_id')::INTEGER = ${params.id};`
    ];


    try {
        let data = await db.executeQueries(sqls);

        if (data && data.error_code) {
            console.error('Viga', sql);
        }
        res.send(data);

    } catch (e) {
        console.error('Errror:', e)
        res.status(500).send({error_code: 500, error_message: e, result: -1});
    }

};
