import Persona from './Persona.js';

// Empleado hereda de Persona con la palabra clave 'extends'
export default class Empleado extends Persona {
    constructor(nombre, apellido, dni, estadoCivil, anioIncorporacion) {
        // 'super()' llama al constructor de la clase padre (Persona)
        super(nombre, apellido, dni, estadoCivil);
        this.anioIncorporacion = anioIncorporacion;
    }

    // Sobreescribimos el getter para mostrar más información
    get atributosPersona() {
        return `${super.atributosPersona}, Año de Incorporación: ${this.anioIncorporacion}`;
    }
}
