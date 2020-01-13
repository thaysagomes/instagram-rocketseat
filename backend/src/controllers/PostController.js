//importar o post do model
const Post = require('../models/Post');

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

        //criação do post
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image,
        });

        return res.json(post); 
    }
};