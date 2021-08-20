// servidor de express
const express = require("express")
// servidor de sockets
const http = require('http')
// configuracion de socket server
const socketio = require('socket.io');
// para moverse entre directorios
const path = require("path")
// cors
const cors = require("cors")
// importar las conexiones socket
const Sockets = require("./sockets")

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // http server
    this.server = http.createServer(this.app);

    // configuracion de socket server
    this.io = socketio(this.server, {/* configuraciones */ });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")))
    // cors will only allow interactions within same url
    this.app.use(cors())
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // inicializar middlewares
    this.middlewares()

    // inicializar sockets
    this.configurarSockets()

    // inicializar servidor
    this.server.listen(this.port, () => {
      console.log(`Aplicación corriendo en puerto ${this.port}`)
    })
  }
}

module.exports = Server