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

    // регистр
    sql = `SELECT d.id,
                  p.kood,
                  p.description,
                  to_char(d.deal_date,'DD.MM.YYYY')::TEXT AS deal_date,
                  a.nimetus AS client,
                  d.price,
                  d.status,
                   s.name   AS status_name
           FROM bors.deals d
                    INNER JOIN bors.pictures p ON d.picture_id = p.id
                    INNER JOIN libs.asutus a ON a.id = d.asutus_id
            INNER JOIN (
                SELECT 0 AS id, 'New' AS name 
                UNION ALL
                SELECT 1 AS id, 'Active' AS name 
                UNION ALL
                SELECT 2 AS id, 'Closed' AS name 
                ) s ON s.id = d.status
                WHERE p.name ILIKE '%${filter}%'
                 OR p.description ILIKE '%${filter}%'
                 OR p.kood ILIKE '%${filter}%'
                 OR a.nimetus ILIKE '%${filter}%'
                 OR s.name ILIKE '%${filter}%'
                 ORDER BY deal_date DESC 
                 `;

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

    console.log('delete', params.event, params.id)
    switch (params.event) {
        case 'accept':
            sql = `select bors.accept_deal(${params.user.id}, ${params.id})`;
            break;
        case 'delete':
            status = 3;
            sql = `UPDATE bors.deals  SET status = ${status} WHERE id = ${params.id}`;

            break;
    }


    try {

                let data = await db.queryDb(sql);

                if (data && data.error_code) {
                    console.error('Viga', sql);
                }
                res.send(data);

//        res.send({error_code: null, data: [], result: 1})

    } catch (e) {
        console.error('Errror:', e)
        res.status(500).send({error_code: 500, error_message: e, result: -1});
    }

};

