const { Schema, model } = require('mongoose');

const AlumnosSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'nombre del Alumno obligatorio']
    },

    edad: {
        type: String,
        required: [true, 'la edad es obigatoria']
    },

    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model("Alumno", AlumnosSchema);