const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../db/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT; 
        this.profesorPath = '/api/profesor';
        this.alumnoPath = '/api/alumno';
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }



    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.profesorPath, require("../routes/profesor.routes"));
        this.app.use(this.alumnoPath ,require("../routes/alumno.routes"));
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('servidor ejecuntandose y escuchandose el puerto', this.port)
        });
    }
}

module.exports = Server;