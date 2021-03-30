const { Router, response } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken , listAllUser} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Crear un nuevo usuario
router.post('/new',[
    check('name', 'El name es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password','El password es oblgatorio').isLength({min:6}),
    validarCampos

], crearUsuario);


//Login de usuario
router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password','El password es oblgatorio').isLength({min:6}),
    validarCampos
],loginUsuario);


//Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken );

router.get('/', listAllUser );




module.exports = router;