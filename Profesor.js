import Empleado from './Empleado.js';

export default class Profesor extends Empleado {
    constructor(nombre, apellido, dni, estadoCivil, anioIncorporacion, facultad) {
        super(nombre, apellido, dni, estadoCivil, anioIncorporacion);
        this.facultad = facultad;
    }

    cambiarFacultad(nuevaFacultad) {
        this.facultad = nuevaFacultad;
        console.log(`El profesor ${this.nombre} ha sido reasignado a la facultad: ${nuevaFacultad}.`);
    }
    
    atributosPersona() {
        return `${super.atributosPersona()}, Facultad: ${this.facultad}`;
    }
}