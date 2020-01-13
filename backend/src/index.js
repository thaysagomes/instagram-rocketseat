//importando o express
const express = require('express');

//importando o mongoose
const mongoose = require('mongoose');

//criar a aplicação. o express cria um servidor
const app = express();

//configura o user e senha no data access do mongo atlas
mongoose.connect('mongodb+srv://tcgms:rocketseat@rocketseat-instagram-ixqdr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

//utilizando as rotas do arquivo routes.js
app.use(require('./routes'));

//para o ouvir o servido pelo navegador, precisa designar uma porta
app.listen(3333);