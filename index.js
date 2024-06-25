// configuracion de express
const express = require('express')  //Importar la libreria
const app = express() //Inicializar la variable de la libreria
const port = 3000 //Definir puerto a usar

const mongoose = require('mongoose'); //importar la librería mongoose

require('dotenv').config()
const DB_CONNECTION = process.env.DB_CONNECTION || ''

mongoose.connect(DB_CONNECTION) //crea la cadena

//agregamos la configuracion del cors
const cors = require('cors')
app.use(cors());

//importamos las rutas del otro archivo 
app.use(express.urlencoded({extended: true})) //acceder a la informacion de las urls
app.use(express.json()) //analizar la informacion en formato JSON
const UserRoutes = require('./routes/UserRoutes')
app.use('/', UserRoutes)

const CarroRoutes = require('./routes/CarroRoutes')
app.use('/', CarroRoutes)


//Creando el servicio web
//Funcionalidad  de la API
//Existen muchos metodos : [get, post, put, patch, delete]
//res -> Response -> Respuesta 
//req -> Request -> informacion de entrada


//servicio web
app.get('/prueba', (req, res) => {
    //mostrar en pantalla hello world
    res.send("Hello world")
})

//servicio web
app.get('/saludar', (req, res) => {
    res.send("hola")
})

//servicio web
app.get('/despedirse', (req, res) => {
    res.send("adios")
})

//servicio web 
app.get ('/como_estas', (req, res) => {
    res.send("¿Como estás?")
})

//servicio web 
app.get ('/hablar_ingles', (req, res) => {
    res.send("Hello, how are you?")
})


//servicio web con parametros
app.get('/saludar/:nombre', (req, res) => {
    //recibe un parametro de la URL
    var nombre = req.params.nombre
    res.send("hola " + nombre)
})

//servicio web con parametros
app.get('/despedirse/:nombre', (req, res) => {
    //recibe un parametro de la URL
    var nombre = req.params.nombre
    res.send("adios " + nombre)
})

//servicio web con varios parametros
app.get('/saludar/:nombre/:edad', (req, res) => {
    var nombre = req.params.nombre
    var edad = req.params.edad
    
    res.send("Hola! Me llamo " + nombre + " y tengo " + edad + " años")
})

app.get('/despedirse/:nombre/:edad', (req, res) => {
    var nombre = req.params.nombre
    var edad = req.params.edad

    res.send("Adiós! " + nombre + " que te vaya muy bien en tus " + edad + 
    " años y en toda tu vida")
})

app.get('/mascota/:tipo', (req, res) => {
    var tipo = req.params.tipo
    var animal = ""
    if(tipo=="perro"){
        animal = "guau"
    } 
    else if (tipo=="gato"){
        animal="miau"
    }
    else if (tipo=="pajaro"){
        animal="pio pio"
    }
    else if (tipo=="serpiente"){
        animal="szszszsz"
    }
    else{
        animal ="no conozco al animal"
    }
    res.send(animal)
})


// //Solicitud por GET
// app.get('/usuario', (req, res) => {
//     res.send("Estoy creand un usuario con GET")
// })

// //solicitud por POST
// app.post('/usuario', (req, res) =>{
//     res.send("estoy creando un usuario")
// })

// //solicitud por PUT
// app.put('/usuario', (req, res) =>{
//     res.send("estoy actualizando un usuario con PUT")
// }) 

// //solicitud por PATCH
// app.patch('/usuario', (req, res) => {
//     res.send("Estoy actualizando un usuario con PATCH")
// })

// //solicitud por DELETE
// app.delete('/usuario', (req, res) => {
//     res.send("Estoy borrando un usuario con DELETE")
// })

//ejecutar el servidor
app.listen(port, () => {
    console.log("Listen on" + port)
})