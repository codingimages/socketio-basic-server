

class Sockets {

  // this is like parenthesis in a function where you can pass parameters and/or arguments
  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    // on connection
    this.io.on("connection", socket => {
      socket.on("mensaje-to-server", data => {
        console.log(data)
        this.io.emit("mensaje-from-server", data)
      })
    })
  }

}

module.exports = Sockets