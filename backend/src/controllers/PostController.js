//importar o post do model
const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

//exportar objeto que contém os métodos do controller
module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt'); //*-*createdAt faz com que apareçam os mais recentes

        return res.json(posts);
    },

    async store(req, res) {
        //desestruturação (ES6)
        const {author, place, description, hashtags} = req.body;
        const {filename: image} = req.file;

        //mudando a extensão do arquivo pra jpg
        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        //manipula a imagem e direciona a uma pasta determinada
        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )

        //exclui a imagem não redimensionada
        fs.unlinkSync(req.file.path);

        //criação do post
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });

        req.io.emit('post', post);

        return res.json(post); 
    }
};