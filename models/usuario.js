const mongoose = require("mongoose")  // importamos la librería mongoose

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String, //tipo de dato
        required: true //de campo obligatorio
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(correo){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
            },
            message: props => props.value + " no es un correo electrónico válido!"
          }
    },
    password: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('usuario', UserSchema)