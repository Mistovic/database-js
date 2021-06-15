/**
 * Endpoint for POST request.
 * 
 * Goal: 
 * - Expose endpoint to recive data
 * - Write data to DB
 * - Add support for writing images via node.js fs module (not done)
 * 
 * 
 * 
 * Used:
 * - node express
 * - NeDb database npm
 */


const express = require('express');
const nedb = require('nedb');
const cors = require('cors');
const app = express();

app.use(cors());

// -- Change this to your local address
app.listen(3000, ()=> console.log('Listening at http://127.0.0.1:3000', this));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

const database = [];
//database.loadDatabase();

/**
 * This is an API method which recives data and handles data to database
 */
app.post('/api', (req,res) => {
    console.log('----Start------');
    console.log('I got requst');
    console.log(req.body);
    console.log();
    const data = req.body;a
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.push(data);
    console.log(database);
    console.log('I put data to database');
    console.log('----END------');
    res.json({
        status: 'Success',
        latitude: data.lat,
        longitude: data.lon,
    });
});