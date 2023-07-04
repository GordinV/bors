'use strict';

const checkAuth = require('../middleware/checkAuth');

module.exports = function (app) {


    // same as main
/*
    app.get('/', require('./login').get);
*/
    app.get('/', require('./main').get);
    app.get('/main', require('./main').get);
    app.post('/', require('./login').post);

//login logic
    app.get('/login', require('./login').get);
//    app.get('/registreerimine', require('./registreerimine').get);
    app.get('/edukalt', require('./registreerimine').edukalt);
//    app.post('/registreerimine', require('./registreerimine').post);

    app.post('/login', require('./login').post);
    // logout logic
    app.get('/logout', require('./logout').get);
    // logout logic
    app.post('/logout', require('./logout').post);

    app.get('/raama/login', require('./login').get); // module raamatupidamine
    app.post('/raama/login/', require('./login').post);

    app.get('/raama', require('./raama').get); // module raamatupidamine
    app.get('/raama/:documentType/:id', checkAuth, require('./raama/document').get); // module raamatupidamine
    app.get('/raama/:documentType', checkAuth, require('./raama').get); // module raamatupidamine
    app.post('/redirect/:link/', require('./redirect').get); //checkAuth,

    app.post('/newApi/startMenu/:module', require('./startMenu').post); //checkAuth,
    app.post('/newApi/document/:documentType/:id', checkAuth, require('./documentRegister').post); //апи для обмена даты по протоколу POST с моделью документа
    app.put('/newApi/document/:documentType/:id', checkAuth, require('./documentRegister').put); //апи для обмена даты по протоколу PUT с моделью документа
    app.post('/newApi/loadLibs/:documentType', checkAuth, require('./loadLibs').post); //checkAuth,
    app.post('/newApi/changeAsutus/:rekvId', checkAuth, require('./changeAsutus').post); //checkAuth,
    app.post('/newApi/delete', checkAuth, require('./documentRegister').delete); //checkAuth
    app.post('/newApi/task/:taskName', checkAuth, require('./documentRegister').executeTask);
    app.post('/newApi/logs', checkAuth, require('./documentRegister').getLogs);
//    app.post('/newApi/upload/:uuid/:documentType', require('./documentRegister').upload);
    app.post('/newApi/upload/', require('./documentRegister').upload);
    app.post('/upload/', require('./main').upload);
//    app.post('/main/library/authors/', require('./main/authors').post);
    app.post('/main/upload/', require('./main').upload);
//    app.post('/main/data/:id', require('./main').post);
    app.post('/main/data/', require('./main').post);
    app.post('/main/taotlus_login/', require('./main/taotlus_login').post);
    app.post('/main/taotlus_accept/', require('./main/taotlus_login').accept);
    app.post('/main/taotlus_save/', require('./main/taotlus_login').put);
    app.post('/main/save_author/', require('./main/authors').put);
    app.post('/main/authors/', require('./main/authors').post);
    app.post('/main/newDeal/', require('./main/newDeal').post);
    app.post('/main/deal_accept/', require('./main/deals').accept);
    app.post('/main/deals/', require('./main/deals').post);

    //newDeal

    app.post('/main/login/', require('./main/login').post);
    app.post('/main/logup/', require('./main/logup').post);

    app.get('/main/:id', require('./main').get); // module main

    app.post('/newApi/validate/:method/:parameter', checkAuth, require('./documentRegister').validate); //проверка в моделе , метод по значению

    app.post('/newApi', checkAuth, require('./newApi').post); //checkAuth, //checkAuth,

    app.get('/print/:documentType/:uuid/:id/:params', require('./print').get); //checkAuth
//    app.get('/print/:documentType/:uuid/:id/:sqlWhere/:sqlSort', require('./print').get); //checkAuth
    app.get('/print/:documentType/:uuid/:id/', require('./print').get); //checkAuth
    app.get('/multiple_print/teatis/:uuid/:id/', require('./multiple_print').teatis); //checkAuth
    app.get('/multiple_print/:documentType/:uuid/:id/', require('./multiple_print').get); //checkAuth

    app.get('/print/:documentType/:uuid/', require('./print').get); //checkAuth

//    app.get('/help/:documentType?/', require('./help').get); //checkAuth

    app.get('/pdf/:documentType/:uuid/:id/:params', require('./pdf').get); //checkAuth
    app.get('/pdf/:documentType/:uuid/:id/', require('./pdf').get); //checkAuth


    app.post('/email/sendPrintForm', checkAuth, require('./email').sendPrintForm); //will send printForm to receiver
    app.post('/email/teatis', checkAuth, require('./email').sendTeatis); //will send teatis
    app.post('/email', checkAuth, require('./email').post); //will send arve

/*
    app.post('/e-arved', checkAuth, require('./e-arved').post); //checkAuth
    app.get('/e-arved/seb/:uuid/:id/',require('./e-arved').seb);
    app.get('/e-arved/swed/:uuid/:id/',require('./e-arved').swed);
    app.get('/e-arved/:uuid/:id/',require('./e-arved').get);
    app.get('/sepa/:uuid/:id/',require('./sepa').get);
*/
    app.post('/calc/koostaArved', checkAuth, require('./raama/koostaArved').post); //checkAuth
    app.post('/calc/loe_makse', checkAuth, require('./raama/loe_makse').post); //checkAuth
    app.post('/calc/:taskName', checkAuth, require('./calc').post); //checkAuth

    app.delete('/newApi/:documentType/:id', checkAuth, require('./documentRegister').delete); //апи для обмена даты по протоколу delete с моделью документа


};