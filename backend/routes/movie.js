const { Router, response } = require('express');
const { check } = require('express-validator');
const { crearMovie, listAllMovie } = require('../controllers/movie');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

//Crear un nuevo movie
router.post('/new',[
    check('title', 'El titulo es obligatorio').notEmpty(),
    check('description', 'La descripcion es obligatorio').notEmpty(),
    validarCampos
], crearMovie);

//Listar all
router.get('/', listAllMovie);

module.exports = router;