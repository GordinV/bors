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

exports.upload = async (req, res) => {
    let kood = '';
    let description = '';
    let id = 0;
    let author_id = 0;
    let has_picture = false;

    console.log('upload', req.body)
    var busboy = new Busboy({
        headers: req.headers,
        /*
                limits: {
                    fileSize: 6*1024*1024 //2MB limit
                }
        */
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
            case 'author_id':
                author_id = val;
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
                name: name,
                author_id: author_id
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
                description: description,
                author_id: author_id
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
        id: obj.id == 'null' ? null : obj.id,
        name: fileName,
        description: obj.description,
        kood: obj.kood,
        author_id: obj.author_id
    };
    console.log('params', params)

    let sql = `SELECT *
               FROM bors.save_pictures($1:: BYTEA,
                                       $2::JSONB)`;

    let data = await db.queryDb(sql, [fileData, params]);

    if (data && data.error_code) {
        console.error('Viga', sql, JSON.stringify(params.data), data.error_message, data);
    }
    return data;

}

exports.get = async (req, res) => {
    // рендер грида на сервере при первой загрузке странице
    // берем тип документа из параметра в адресе

    let docId = 0;
    if (req.params.id) {
        docId = Number(req.params.id);
    }
    let DocumentView;
    let data = {},
        user = {user: 'vlad'},
        context = {};

    console.log('main get')
    DocumentView = require('./../../frontend/docs/main/index.jsx');

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

exports.post = async (req, res) => {
//    let user = require('../middleware/userData')(req); // данные пользователя
    let sql;
    let params = req.params;
    let filter = req.body.filter ? req.body.filter : '';

    if (!req.params.id || req.params.id == 'undefined' || typeof req.params.id == 'undefined') {
        // регистр

        sql = `SELECT ltrim(encode(p.file, 'base64'), 'dataimage/jpegbase64') AS file,
                      p.id,
                      p.name,
                      p.description,
                      p.kood,
                      p.author_id,
                      a.nimetus AS author,
                      coalesce(d.price, 10) AS price,
                      p.status,
                      st.name as status_name
                FROM bors.pictures p
                         LEFT OUTER JOIN libs.asutus a ON p.author_id = a.id
                         LEFT OUTER JOIN (SELECT picture_id, max(price) AS price
                                          FROM bors.deals
                                          GROUP BY picture_id) d ON d.picture_id = p.id
                        INNER JOIN (SELECT 0 AS id, 'New' AS name 
                            UNION ALL 
                            SELECT 1 AS id, 'Active' AS name
                            UNION ALL 
                            SELECT 2 AS id, 'Closed' AS name
                            UNION ALL 
                            SELECT 3 AS id, 'Deleted' AS name
                            ) st ON st.id = p.status
                WHERE p.name ILIKE '%${filter}%'
                 OR p.description ILIKE '%${filter}%'
                 OR p.kood ILIKE '%${filter}%'
                 OR a.nimetus ILIKE '%${filter}%'
               ORDER BY coalesce(d.price, 10) DESC
               LIMIT 10`;
    } else {
        let docId = Number(req.params.id);

        // document
        if (docId) {
            sql = `SELECT ltrim(encode(file, 'base64'), 'dataimage/jpegbase64') AS file,
                          id,
                          name,
                          description,
                          kood,
                          author_id
                   FROM bors.pictures
            WHERE id = ${docId}`;

        } else {
            sql = `SELECT null AS file,
                      0 as id,
                      '' as name,
                      '' as description,
                      null::integer as author_id,
                      '' as kood`;

        }
    }
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
    let user = require('../middleware/userData')(req); // данные пользователя
    let documentType = req.params.documentType.toUpperCase(); // получим из параметра тип документа
    const docId = Number(req.params.id); //ид документа
    let data = req.body;

    /*
        if (!user) {
            raise.error('No user', user);
            const err = new HttpError(err);
            if (err instanceof HttpError) {
                return res.send({"message": 'No user'});
            }
        }
    */

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

    /*
        try {

            let data =  await db.queryDb(sqlString,params);
            // вернуть данные
            res.send(data);
        } catch (error) {
            console.error('error:', error); // @todo Обработка ошибок
            res.send({result:'Error'});

        }
    */
};