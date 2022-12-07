const express = require('express');
const config = require('./config.js');

const app = express();
//const app = require('express')();

/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
}); */

app.use(express.static('public'));



const server = app.listen(config.port, () => {
    console.log('Server in ascolto sulla porta ' + config.port + '...');
});
