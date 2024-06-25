const express = require('express') //importando la librería
const app = express() //inicializamos la variable de la librería
const UsuarioController = require('../controllers/usuarioController')//importamos el controlador
const controller = new UsuarioController(); //creamos una instancia


//creamos servicios web
app.get('/usuario',controller.getUsuarios) //obtengo los usuarios
app.post('/usuario',controller.createUsuario) //Creo un usuario
app.get('/usuario/:id',controller.getUsuarioById) //Consulto un usuario
app.put('/usuario/:id', controller.updateUsuario) //Actualizo un usuario
app.delete('/usuario/:id',controller.deleteUsuario) //Elimino a un usuario
app.post('/login', controller.login) // Login
 
module.exports = app