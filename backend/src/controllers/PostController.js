//importar o post do model
const Post = require('../models/Post');

//exportar objeto que contém os métodos do controller
module.exports = {
    async index(req, res) {

    },

    async store(req, res) {
        console.log(req.file);
        return res.json({ok:true}); 
    }
};