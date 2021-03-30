const mongoose = require('mongoose');

const dbConnection = async()=>{
            mongoose.connect(process.env.BD_CNN_REMOTE, {
                useNewUrlParser:true,
                useCreateIndex:true,
                useUnifiedTopology: true
            }, ( err )=>{
                if (err){
                    throw err;
                }
                console.log('Base de  datos online.')
            })
            console.log('Base de  datos online.')
}
module.exports = {
    dbConnection
}