const db = require('./../../libs/db');
const Busboy = require('busboy');


exports.post = async (req, res) => {
//    let user = require('../middleware/userData')(req); // данные пользователя
    let sql;

    let data = {
        login: req.body.login,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,

    }

    let result = await saveNewUser(data)
    if (result && result.error_code) {
        // error
        console.error('Error', result);
        return res.sendStatus(500);
    } else {
        return res.send(result);
    }

};

async function saveNewUser(data) {
    // регистр
    sql = `INSERT INTO ou.taotlus_login(kpv, parentid,kasutaja, parool, nimi, aadress, email, status)
           VALUES (current_date, 0, '${data.login}', NULL, '${data.name}','${data.address}', '${data.email}',0 )`;
    try {
        let result = await db.queryDb(sql);
        if (result && result.error_code) {
            console.error('Viga', sql, result);
        }
        return (result);

    } catch (e) {
        console.error('Error:', e)
        return {error_code: 500, error_message: e, result: -1};
    }

}
