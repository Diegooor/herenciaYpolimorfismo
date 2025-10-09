
import Persona from './Persona.js';
export default class Estudiante extends Persona {
    constructor(nombre, apellido, dni, estadoCivil, curso) {
        super(nombre, apellido, dni, estadoCivil);
        this.curso = curso;
    }

    set matricularNuevoCurso(nuevoCurso) {
        this.curso = nuevoCurso;
        console.log(`${this.nombre} ha sido matriculado en el nuevo curso: ${nuevoCurso}.`);
    }

    get atributosPersona() {
        return `${super.atributosPersona}, Curso: ${this.curso}`;
    }
}