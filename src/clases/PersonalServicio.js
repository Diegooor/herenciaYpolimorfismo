import Empleado from './Empleado.js';
export default class PersonalServicio extends Empleado {
    #labor;

    constructor(nombre, apellido, dni, estadoCivil, anioIncorporacion, labor) {
        super(nombre, apellido, dni, estadoCivil, anioIncorporacion);
        this.#labor = labor;
    }
    
    get atributosPersona() {
        return `${super.atributosPersona}, Labor: ${this.#labor}`;
    }

    set cambiarLabor(nuevaLabor) {
        this.#labor = nuevaLabor;
    }
}