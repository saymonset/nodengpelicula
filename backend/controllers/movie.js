const {request, response} = require('express');
const Movie = require('../models/Movie');




const crearMovie = async (req = request, res = response)=>{
   // "title":"text1",
    //"description":"test3@test.com"
    const {title, description} = req.body;
    try {
    // Verficar title
    const movie = await Movie.findOne({title});
     if ( movie ){
         return res.status( 400 ).json({
             ok: false,
             msg:'La pelicula ya existe con ese titulo...'
         });
     }
         // Crear usuario con el modelo
            const dbMovie = new Movie(req.body);
                //Save en DB
                await dbMovie.save();
    //Generar respuesta exitosa
    return res.json({
        ok: true,
        uid: dbMovie.id,
        title,
        description
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg:'Por favor, hable con el Admin'
        });
    }
}
 


const listAllMovie =  async (req,res)=>{
    const movies = await Movie.find();
    return res.json({
        ok: true,
        movies
    });
 }
 
module.exports = {
    crearMovie ,
    listAllMovie
}