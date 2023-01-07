//const express = require('express');
import { port } from './config.js';
import socketio from 'socket.io';

//const app = express();
const app = require('express')();

/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
}); */

app.use(express.static('public'));


const server = app.listen(port, () => {
    console.log('Server in ascolto sulla porta ' + port + '...');
});

const io = socketio(server);

io.on('connection', (socket) => {
    console.log('client connesso');
    socket.emit('welcome', 'Benvenuto nella chat.');
    socket.on('register', (nome, password) => {
        socket.nome = nome;
        socket.password = password;
        console.log("Nome:", socket.nome);
        console.log("Password:", socket.password);
        socket.emit('confirm', 'Registrazione avvenuta con successo. Benvenuto ' + socket.nome);
    });
});