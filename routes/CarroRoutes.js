const express = require('express')
const app = express()
const CarroController = require('../controllers/CarroController')
const controller = new CarroController()

app.get('/carro', controller.getCarros) //Trae todos los carros
app.post('/carro', controller.createCarro) //Crea un nuevo carro
app.get('/carro/:id', controller.getCarroById) //Consulta un solo carro 
app.put('/carro/:id', controller.updateCarro) //actualiza el carro
app.delete('/carro/:id', controller.deleteCarro) //elimina el carro

module.exports = app