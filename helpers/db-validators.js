const Role = require('../models/role');
const Usuario = require('../models/alumno');
const Animal = require('../models/profesor');

const esRoleValido = async (role = '') => {
    const existeRol = await Role.findOne({ role });
    if (!existeRol) {
        throw new Error(`El rol ${role} no existe en la base de datos`);
    }
}

const existeAlumnoById = async (id = '') => {
    const existeUsuario = await Usuario.findOne({id});
    if(existeUsuario){
        throw new Error(`El alumno con el ${ id } no existe`)
    }
}

const existeProfesorById = async (id = '') => {
    const existeAnimal = await Animal.findOne({id});
    if(existeAnimal){
        throw new Error(`El profesor con el ${ id } no existe`)
    }
}


module.exports ={
    esRoleValido,
    existeAlumnoById,
    existeProfesorById
}