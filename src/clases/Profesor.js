import Empleado from './Empleado.js';

export default class Profesor extends Empleado {
    #facultad;

    constructor(nombre, apellido, dni, estadoCivil, anioIncorporacion, facultad) {
        super(nombre, apellido, dni, estadoCivil, anioIncorporacion);
        this.#facultad = facultad;
    }

    set cambiarFacultad(nuevaFacultad) {
        this.#facultad = nuevaFacultad;
    }
    
    get atributosPersona() {
        return `${super.atributosPersona}, Facultad: ${this.#facultad}`;
    }
}