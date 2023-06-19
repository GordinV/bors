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

/*
exports.upload = async (req, res) => {
    let kood = '';
    let description = '';
    let id = 0;
    let has_picture = false;
    var busboy = new Busboy({
        headers: req.headers,
        /!*
                limits: {
                    fileSize: 6*1024*1024 //2MB limit
                }
        *!/
    });
    busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated) {
        //extract intput-field from upload-form
        console.log('fieldname', fieldname, val)
        switch (fieldname) {
            case 'kood':
                kood = val;
                break;
            case 'description':
                description = val;
                break;
            case 'id':
                id = val;
                break;
        }
    });
    busboy.on('file', function (filename, file, name, encoding, mime) {
        var buffer = '';
        has_picture = true;
        file.on('data', function (data) {
            buffer += data;
        });
        file.on('end', async function () {
            let buff = Buffer.from(buffer, 'base64');

            // saving
            let data = {
                id: id, // новая картинка
                kood: kood,
                description: description,
                name: name
            }
            let result = await save_blob(buff, name, data);
            //fs.writeFileSync('./tmp/' + name, buff);
            res.send(result);
        })

    });
    busboy.on('finish', async function () {
        if (!has_picture) {
            // saving
            let data = {
                id: id, // новая картинка
                kood: kood,
                description: description
            }
            let result = await save_blob(null, null, data);
            //fs.writeFileSync('./tmp/' + name, buff);
            res.send(result);

        }
    });
    req.pipe(busboy);

    // проверка наличия файла
    try {
        return res.status(200);
    } catch (e) {
        console.error('viga', e);
        return res.status(500).send(e.error);

    }

};

async function save_blob(fileData, fileName, obj) {
    let params = {
        id: obj.id,
        name: fileName,
        description: obj.description,
        kood: obj.kood
    };

    console.log('save params', params)
    let sql = `SELECT *
               FROM bors.save_pictures($1:: BYTEA,
                                       $2::JSONB)`;

    let data = await db.queryDb(sql, [fileData, params]);

    if (data && data.error_code) {
        console.error('Viga', sql, JSON.stringify(params.data), data.error_message, data);
    }
    console.log('saved data', data);
    return data;

}

exports.get = async (req, res) => {
    // рендер грида на сервере при первой загрузке странице
    // берем тип документа из параметра в адресе
    let docId = Number(req.params.id);
    let DocumentView;
    let data = {},
        user = {user: 'vlad'},
        context = {};


    if (docId || docId === 0) {
        let lcSql = `SELECT ltrim(encode(file, 'base64'), 'dataimage/jpegbase64') AS file,
                            id,
                            name,
                            description,
                            kood
                     FROM bors.pictures
                     WHERE id = $1`

        data = await db.queryDb(lcSql, [docId]);

        if (data && data.error_code) {
            console.error('Viga', lcSql, data);
        }

        DocumentView = require('./../../frontend/docs/main/document/index.jsx');

    } else {
        DocumentView = require('./../../frontend/docs/main/index.jsx');

    }

    // делаем запрос , получаем первоначальные данные
    // вызвать метод

    const Component = React.createElement(
        StaticRouter,
        {context: context, location: req.url}, React.createElement(
            DocumentView,
            {id: 'doc', initData: data, userData: user, docId: docId}));

    try {
        // передатим в хранилище данные
        let storeInitialData = JSON.stringify(data);
        let userData = JSON.stringify(user);

        let html = ReactServer.renderToString(Component);
        if (context.url) {
            res.writeHead(301, {
                location: context.url
            });
            res.end()
        } else {
            res.render('main', {
                "title": 'Picture',
                "store": storeInitialData
                , react: html
            });
        }
    } catch (e) {
        console.error('error:', e);
        res.statusCode = 500;
    }
};
*/

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
    console.log('additionalFilter', additionalFilter, req.body)
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
        console.log(sql)
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


/*
exports.put = async (req, res) => {
    let user = require('../middleware/userData')(req); // данные пользователя
    let documentType = req.params.documentType.toUpperCase(); // получим из параметра тип документа
    const docId = Number(req.params.id); //ид документа
    let data = req.body;

    /!*
        if (!user) {
            raise.error('No user', user);
            const err = new HttpError(err);
            if (err instanceof HttpError) {
                return res.send({"message": 'No user'});
            }
        }
    *!/

    if (!user) {
        user = {
            userId: 1,
            asutusId: 1
        }
    }

    const params = {
        userId: user.userId,
        asutusId: user.asutusId,
        data: {data}
    };

    const Doc = require('./../classes/DocumentTemplate');
    const Document = new Doc(documentType, docId, user.userId, user.asutusId);

    let savedData = await Document.save(params);

    const prepairedData = Object.assign({}, savedData.row[0],
        {bpm: savedData.bpm ? savedData.bpm : []},
        {gridData: savedData.details ? savedData.details : []},
        {relations: savedData.relations ? savedData.relations : []},
        {gridConfig: savedData.gridConfig ? savedData.gridConfig : []});

    res.send({result: {error_code: 0, error_message: null, docId: prepairedData.id}, data: [prepairedData]}); //пока нет новых данных

    /!*
        try {

            let data =  await db.queryDb(sqlString,params);
            // вернуть данные
            res.send(data);
        } catch (error) {
            console.error('error:', error); // @todo Обработка ошибок
            res.send({result:'Error'});

        }
    *!/
};*/
