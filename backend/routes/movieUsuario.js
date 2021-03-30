const { Router, response } = require('express');
const { crearMovieUsuario, listAllMovieUsuario , deleteMovieUsuario} = require('../controllers/movieUsuario');


const router = Router();

//Crear un nuevo movie
router.post('/new', crearMovieUsuario);

//Listar all
router.get('/', listAllMovieUsuario);
router.delete('/',deleteMovieUsuario);


module.exports = router;