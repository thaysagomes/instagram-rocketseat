//configuração de upload de arquivos

const multer = require('multer');

//configura caminho em diferentes SO
const path = require('path');

//importar objetos com configurações do multer para conhecer qual tipo de storage utilizar
module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
    })
};