const {request, response} = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');




const crearUsuario = async (req = request, res = response)=>{

    const {email, name, password} = req.body;

    try {

    // Verficar email

    const usuario = await Usuario.findOne({email});

     if ( usuario ){
         return res.status( 400 ).json({
             ok: false,
             msg:'El usuario ya existe con ese email...'
         });
     }

         // Crear usuario con el modelo
            const dbUser = new Usuario(req.body);



    //Hash password
    //10 vuetas por default
      const salt = bcrypt.genSaltSync();
      dbUser.password = bcrypt.hashSync(password, salt);

    //Generar el JWT
    const token = await generarJWT(dbUser.id, name);

    //Save en DB
    await dbUser.save();

    //Generar respuesta exitosa
    return res.json({
        ok: true,
        uid: dbUser.id,
        email,
        name,
        token
    });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg:'Por favor, hable con el Admin'
        });
    }

    

   
}

const loginUsuario =  async (req, res = response)=>{

   
    const {email,  password} = req.body;

    try {

         const dbUser = await Usuario.findOne({email});
         if (!dbUser){
             return res.status(400).json({
                 ok:false,
                 msg:'El correo no existe'

             });
         }

           //Confirmar si el usuario hace match
    const validPassword = bcrypt.compareSync(password, dbUser.password);
    if (!validPassword){
       return res.status(400).json({
           ok:false,
           msg:'El password no es valido'

       });
    }

    //Generar el JWT
      const token = await generarJWT(dbUser.id, dbUser.name);

      //Respuesta del servicio
      return res.json({
          ok: true,
          uid: dbUser.id,
          email,
          name: dbUser.name,
          token
      });
          
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
             msg:'Hable con el Administraador'
        });
    }
}


const revalidarToken = async (req = request, res)=>{

      

    const {uid } = req;
  //Leer de bd
   const dbUser = await Usuario.findById(uid);
 
     //Generar el JWT
     const token = await generarJWT(uid, dbUser.name);


    
    return res.json({
        ok: true,
        uid,
        name: dbUser.name,
        email:dbUser.email,
        token
    });
}


const listAllUser =  async (req,res)=>{
    const usuarios = await Usuario.find();
    return res.json({
        ok: true,
        usuarios
    });
 }
module.exports = {
               crearUsuario,
               revalidarToken,
               loginUsuario,
               listAllUser
}