//importando o express
const express = require('express');

//importando o controller para fazer parte da rota
const PostController = require('./controllers/PostController');

//importando multer para reconhecimento da resposta vinda de Multipart Form
const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);



const routes = new express.Router();

//parâmetros contém a rota, o upload da imagem (single, pois é apenas um arquivo e o campo que está essa imagem) e o método do controller responsável por desempenhar a função
routes.post('/posts', upload.single('image'), PostController.store);

//criação da rota get para listagem das postagens
routes.get('/posts', PostController.index);

module.exports = routes;