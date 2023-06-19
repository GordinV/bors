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
        let loginData = await getUser(login, password);
        return res.send(loginData);
    });
    req.pipe(busboy);


};

async function getUser(login, password) {
    // регистр
    sql = `SELECT id,
                  kasutaja,
                  ltrim(rtrim(ametnik))::text as ametnik,
                  (roles ->> 'is_kasutaja')::BOOLEAN AS is_user,
                  (roles ->> 'is_admin')::BOOLEAN    AS is_admin,
                  (roles ->> 'is_raama')::BOOLEAN    AS is_accounter

           FROM ou.userid
           WHERE kasutaja = $1
             AND status < 3
           ORDER BY id DESC
           LIMIT 1`;
    try {
        let data = await db.queryDb(sql, [login]);
        if (data && data.error_code) {
            console.error('Viga', sql);
        }
        return (data);

    } catch (e) {
        console.error('Errror:', e)
        return {error_code: 500, error_message: e, result: -1};
    }

}
