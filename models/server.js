const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);

    this.paths = {

    };

    //Middleware's
    this.middlewares();
    // App routes
    this.routes();

    // Sockets Events
    this.sockets();
  }

  async DBConnect() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    //Public directory
    this.app.use(express.static('public'));

  }

  routes() {
    // this.app.use(this.paths.auth, require('../routes/auth.routes'));
  }

  sockets() {
    this.io.on("connection", socketController);
  }

  listen() {
    this.server.listen(this.port, () =>
      console.log('Server running at port: ', this.port)
    );
  }

}
module.exports = Server;
