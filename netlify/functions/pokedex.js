const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b9275475305c31',
    password: '345afe9b',
    database: 'heroku_ac29c9b918bb53a',
    port: 3306,
    connectionLimit: 100,
    queueLimit: 100,
    acquireTimeout: 1000000,
    connectTimeout: 30000,
    debug: false
  });

var test;

export const handler = async () => {
    db.query('SELECT * FROM users WHERE username=?', ['test'],
    function (err, results, fields) {
        if (err) {
            // problems
            test = JSON.stringify(err);
            console.log(test);
        } else {
            test = JSON.stringify(results);
            console.log(test);
        }
    });
    
    return {
        statusCode: 200,
        body: test
    }
}