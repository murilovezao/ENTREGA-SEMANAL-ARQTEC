const { Router } = require('express');

const router = Router();

// importa a função storeImagem do controlador de imagens
const { storeImagem } = require('../controller/imagemController');

// rota pra armazenar imagens
/**
* @swagger
* /store/imagem:
*   get:
*     summary: Armazena as imagens
*     responses:
*       200:
*         description: Recebe imagens e armazena no banco de dados
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/
router.post('/store/imagem', storeImagem);

// exporta pra usar em outros arquivos
module.exports = router;
