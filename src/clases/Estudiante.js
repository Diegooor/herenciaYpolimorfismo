
import Persona from './Persona.js';
export default class Estudiante extends Persona {
    #cursos;  // Array para almacenar múltiples cursos

    constructor(nombre, apellido, dni, estadoCivil, curso) {
        super(nombre, apellido, dni, estadoCivil);
        this.#cursos = [curso];  // Inicializamos el array con el primer curso
    }

    set matricularNuevoCurso(nuevoCurso) {
        if (!this.#cursos.includes(nuevoCurso)) {  // Evitamos duplicados
            this.#cursos.push(nuevoCurso);
            return true;
        }
        return false;
    }

    get cursos() {
        return [...this.#cursos];  // Devolvemos una copia del array
    }

    get atributosPersona() {
        return `${super.atributosPersona}, Cursos: ${this.#cursos.join(', ')}`;
    }
}