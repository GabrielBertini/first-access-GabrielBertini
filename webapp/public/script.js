var socket = io();

socket.on('welcome', (msg) => {
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.innerText = msg;
});

function register() {
    let nick = document.getElementById('nome').value;
    let pass = document.getElementById('password').value;
    socket.emit('register', nick, pass);
}

socket.on('register', (nome, password) => {
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.innerText += " " + nome + " " + password;
});


socket.on('confirm', (msg) => {
    let registration = document.getElementById('register');
    registration.innerText = msg;
});