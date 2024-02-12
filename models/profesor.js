const { Schema, model } = require('mongoose');

const PrpfesoresSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'nombre del Profesor obligatorio']
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

module.exports = model("Alumno", PrpfesoresSchema);