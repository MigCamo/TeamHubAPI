const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use('/TeamHub/Task', require('../Routes/TaskRoute'));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor escuchando en puerto ${this.port}`)
        });
    }
}

module.exports = Server;