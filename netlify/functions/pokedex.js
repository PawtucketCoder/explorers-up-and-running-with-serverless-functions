const express = require('express');
const cors = require('cors');
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

var data;

export const handler = async () => {
    db.query('SELECT * FROM users WHERE username=?', ['test'],
    function (err, results, fields) {
        if (err) {
            data = JSON.stringify(err);
            console.log(data);
        } else {
            data = JSON.stringify(results);
            console.log(data);
        }
    });

//    db.end();
    
    // return {
    //     statusCode: 200,
    //     body: test
    // }
    return {
        statusCode: 200,
        body: data
    }
}