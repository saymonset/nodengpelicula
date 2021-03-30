
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./db/config');

// Crear el servidor/aplicacion de express
const app = express();

//Base de datos
   
dbConnection();

//Diretorio Publico middleware
 app.use(express.static('public'))
//Cors middleare
app.use(cors());

//Lectura y parseo del body midleware
app.use(express.json());



//Rutas Middleware de express
app.use('/app/auth', require('./routes/auth'));
app.use('/app/movie', require('./routes/movie'));
app.use('/app/movieUsuario', require('./routes/movieUsuario'));
//console.log(process.env);
app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'public/index.html'))
})


app.listen(process.env.PORT, ()=>{
    console.log(`Levantando server en port ${process.env.PORT}`);
});