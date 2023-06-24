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
    let user = req.body.user ? req.body.user : null;
    let is_admin = user && user.is_admin ? true : false;
    let l_price = req.body.price ? req.body.price : null;
    let l_picture_id = req.body.picture_id ? req.body.picture_id : null;

    console.log('req.body', req.body)
    // сохраняем
    sql = `INSERT INTO bors.deals (picture_id, asutus_id, user_id, price, deal_date, status)
           SELECT ${l_picture_id} AS picture_id, a.id AS asutus_id, u.id AS user_id, ${l_price} AS price, current_date, 0
           FROM libs.asutus a
                    INNER JOIN ou.userid u ON u.properties->>'taotlus_id' = a.properties->>'taotlus_id'
           WHERE u.id = ${user.id}
           ORDER BY   u.id DESC LIMIT 1;
           UPDATE bors.pictures SET status = 2 WHERE id = ${l_picture_id};`;
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

