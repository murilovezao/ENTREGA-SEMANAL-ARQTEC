const { Router } = require('express');
const { storeUsuario, loginUsuario, getUser } = require('../controller/UsuarioController');

const router = Router();

router.post('/store/usuario', storeUsuario);
/**
* @swagger
* /store/usuario:
*   get:
*     summary: Armazenamento dos usuarios
*     responses:
*       200:
*         description: Lista dos usuários e suas informações cadastrados no site
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/

router.post('/login', loginUsuario);
/**
* @swagger
* /login:
*   get:
*     summary: Usuários já cadastrados para Login
*     responses:
*       200:
*         description: Armazenamento para todos usuários cadastrados, autorizando Login
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/


router.get('/getUser/:id', getUser);
/**
* @swagger
* /getUser/:id:
*   get:
*     summary: Seleciona o usuário
*     responses:
*       200:
*         description: Seletor de usuário, movendo-o para a aba de perfil
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/





module.exports = router;
