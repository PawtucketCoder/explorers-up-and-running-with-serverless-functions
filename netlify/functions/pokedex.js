const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b9275475305c31',
    password: '345afe9b',
    database: 'heroku_ac29c9b918bb53a',
  });

// app.use(cors());
// app.use(express.json());

var test;

export const handler = async () => {
    db.query('SELECT * FROM users WHERE username=?', ['test'],
    function (err, results, fields) {
        if (err) {
            // problems
            test = err;
        } else {
            test = JSON.stringify(results);
            console.log(test);
        }
    });
    
    //test = results.;

//    const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto'

//    const response = await fetch(POKE_API)
//    const data = await response.json();

    return {
        statusCode: 200,
        // body: JSON.stringify({
        //     data
        // })
        body: test

    }
}