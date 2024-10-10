const { Router } = require('express');

const router = Router();

// importa a função storeImagem do controlador de imagens
const { storeImagem } = require('../controller/imagemController');

// rota pra armazenar imagens
/**
* @swagger
* /store/imagem:
*   get:
*     summary: Retorna todas as tarefas
*     responses:
*       200:
*         description: Uma lista de tarefas
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
