const {request, response} = require('express');
const MovieUsuario = require('../models/MovieUsuario');




const crearMovieUsuario = async (req = request, res = response)=>{

    const {usuario, movie} = req.body;
    const movieUsuario = new MovieUsuario(req.body);
    
    //Save en DB
    await movieUsuario.save();

    //Generar respuesta exitosa
    return res.json({
        ok: true,
        usuario: movieUsuario.usuario,
        movie: movieUsuario.movie
    });
}
 


const deleteMovieUsuario = async (req = request, res = response)=>{

    const {_id} = req.body;
   
    const movieUsuario = await MovieUsuario.findOne({_id});

    if (!movieUsuario){
        return res.status(400).json({
            ok:false,
            msg:'El MovieUsuario no existe'

        });
    }
    
    //Save en DB
    await MovieUsuario.deleteOne(movieUsuario);

    //Generar respuesta exitosa
    return res.json({
        ok: true,
        _id,
    });
}


const listAllMovieUsuario =  async (req,res)=>{
    const movieUsuario = await MovieUsuario.find();
    return res.json({
        ok: true,
        movieUsuario
    });
 }
 
module.exports = {
    crearMovieUsuario,
    listAllMovieUsuario,
    deleteMovieUsuario
}