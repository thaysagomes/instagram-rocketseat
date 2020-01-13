//importando o express
const express = require('express');
//importando o mongoose
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

//criar a aplicação. o express cria um servidor
const app = express();

//divisão do servidor para ser utilizado tanto por http quanto por websocket (tempo real)
const server = require('http').Server(app);
//tornando a aplicação suportada por um websocket
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;
    next();
});

//possibilita que o backend seja acessível pelo frontend
app.use(cors());

//configura o user e senha no data access do mongo atlas
mongoose.connect('mongodb+srv://tcgms:rocketseat@rocketseat-instagram-ixqdr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//possibilita acessar os arquivos de imagens
app.use('/files', express.static(path.resolve(__dirname, '..','uploads', 'resized')));

//utilizando as rotas do arquivo routes.js
app.use(require('./routes'));

//para o ouvir o servido pelo navegador, precisa designar uma porta
server.listen(3333);