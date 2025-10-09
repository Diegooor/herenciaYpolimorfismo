import Empleado from './Empleado.js';
export default class PersonalServicio extends Empleado {

    constructor(nombre, apellido, dni, estadoCivil, anioIncorporacion, labor) {
        super(nombre, apellido, dni, estadoCivil, anioIncorporacion);
        this.labor = labor;
    }
    
   get atributosPersona() {
        return `${super.atributosPersona()}, Labor: ${this.labor}`;
    }

    cambiarLabor(nuevaLabor) {
        this.labor = nuevaLabor;
        console.log(`El personal de servicio ${this.nombre} ha sido reasignado a la labor: ${nuevaLabor}.`);
    }
}