const mysql = require('mysql');

const db = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b9275475305c31',
    password: '345afe9b',
    database: 'heroku_ac29c9b918bb53a',
    port: 3306,
    acquireTimeout: 1000000,
    connectTimeout: 300000
});

export const handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const username = body.username;
        const data = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM users WHERE username=?', [username],
                function (err, results, fields) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            );
        });

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }
};
