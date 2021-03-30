const { Schema, model } = require("mongoose");

const MovieSchema = Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
        required: true
    } 
});


module.exports = model('Movie', MovieSchema);