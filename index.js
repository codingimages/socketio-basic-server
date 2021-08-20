const Server = require("./models/server")
require('dotenv').config()

const server = new Server()

server.execute()

// // servidor de express
// const express = require("express")
// const app = express()

// // servidor de sockets
// const server = require('http').createServer(app);

// // configuracion de socket server
// const io = require('socket.io')(server);

// // directorio publico
// app.use(express.static(__dirname + "/public"))

// // conexion inicial
// io.on('connection', socket => {

//   // evento que se dispara en conexion
//   socket.emit("mensaje-inicial", { msg: "Bienvenido al servidor", fecha: new Date() })

//   // escuchar el e vento se usa on()
//   socket.on("mensaje-to-server", msg => {
//     // para emitir el mensaje a todas las conecciones se usa io
//     io.emit("mensaje-from-server", msg)
//   })

// });

// const PORT = 8080

// server.listen(PORT, () => console.log("Servidor corriendo en el puerto " + PORT));