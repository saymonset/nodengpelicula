const { Schema, model } = require("mongoose");

const MovieUsuarioSchema = Schema({
    usuario: { type: Schema.ObjectId, ref: "Usuario" } ,
    movie: { type: Schema.ObjectId, ref: "Movie" } 
});


module.exports = model('MovieUsuario', MovieUsuarioSchema);
 