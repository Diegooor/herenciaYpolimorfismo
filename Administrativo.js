import Empleado from "./Empleado.js";

export default class Administrativo extends Empleado {

    constructor(nombre, apellido, dni, estadoCivil, anioIncorporacion, dependencia) {
        super(nombre, apellido, dni, estadoCivil, anioIncorporacion);
        this.dependencia = dependencia;
    }

    cambiarDependencia(nuevaDependencia) {
        this.dependencia = nuevaDependencia;
        console.log(`El administrativo ${this.nombre} ha sido reasignado a la dependencia: ${nuevaDependencia}.`);
    }

    atributosPersona() {
        return `${super.atributosPersona()}, Dependencia: ${this.dependencia}`;
    }
}