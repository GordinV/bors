const db = require('./../../libs/db');
const Busboy = require('busboy');


    exports.post = async (req, res) => {
//    let user = require('../middleware/userData')(req); // данные пользователя
        let sql;
        var busboy = new Busboy({
            headers: req.headers,
        });

        let login = req.params.login;
        let password = req.params.password;
        busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated) {
            //extract intput-field from upload-form
            switch (fieldname) {
                case 'login':
                    login = val;
                    break;
                case 'password':
                    password = val;
                    break;
            }
        });
        busboy.on('finish', async function () {
            // finish, check password

            if (!login) {
                return res.send({error_code: 1, error_message: 'No login or password', data: []})
            }
            let loginData = await getUser(login, password, req);
            return res.send(loginData);
        });
        req.pipe(busboy);


    };

async function getUser(login, password, req) {
    const uuid = require('uuid/v1');

    let userUuid = uuid();

    // регистр

    sql = `SELECT u.id,
                  u.kasutaja,
                  '${userUuid}'::TEXT AS uuid,
                  ltrim(rtrim(u.ametnik))::TEXT        AS ametnik,
                  (u.roles ->> 'is_kasutaja')::BOOLEAN AS is_user,
                  (u.roles ->> 'is_admin')::BOOLEAN    AS is_admin,
                  (u.roles ->> 'is_raama')::BOOLEAN    AS is_accounter,
                  u.rekvid,
                  r.regkood,
                  r.nimetus::TEXT,
                  r.parentid
           FROM ou.userid u
                    LEFT OUTER JOIN ou.rekv r ON r.id = u.rekvid
           WHERE u.kasutaja = $1
             AND u.status < 3
           ORDER BY u.id DESC
           LIMIT 1`;
    try {

        let data = await db.queryDb(sql, [login]);
        if (data && data.error_code) {
            console.error('Viga', sql);
        }
        // для поддержки бухгалтерии, регистрируем сессию

        if (!req.session.users) {
            req.session.users = [];
        }

        let kasutaja = data.data[0];


        const newUser = Object.assign({
            uuid: uuid,
            userId: kasutaja.id,
            userName: kasutaja.ametnik,
            asutusId: kasutaja.rekvid,
            lastLogin: null,
            userAccessList: [],
            login: kasutaja.kasutaja,
            parentid: kasutaja.parentid,
            parent_asutus: null,
            roles: [],
            userAllowedAsutused: [{id: kasutaja.rekvid, nimetus: kasutaja.nimetus, regkood: kasutaja.regkood}]
        }, kasutaja);

        req.session.users.push(newUser);
        req.app.locals.user = newUser;
        return data;

    } catch (e) {
        console.error('Errror:', e)
        return {error_code: 500, error_message: e, result: -1};
    }

}


