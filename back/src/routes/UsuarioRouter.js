const { Router } = require('express');
const { storeUsuario, loginUsuario, getUser } = require('../controller/UsuarioController');

const router = Router();

router.post('/store/usuario', storeUsuario);
router.post('/login', loginUsuario);
router.get('/getUser/:id', getUser)

module.exports = router;
