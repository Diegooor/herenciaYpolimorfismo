export default class Persona {
  #nombre;
  #apellido;
  #dni;
  #estadoCivil;

  constructor(nombre, apellido, dni, estadoCivil) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#dni = dni;
    this.#estadoCivil = estadoCivil;
  }

  get atributosPersona() {
    return `Nombre: ${this.#nombre}, Apellido: ${this.#apellido}, DNI: ${
      this.#dni
    }, Estado Civil: ${this.#estadoCivil}`;
  }

  set cambiarEstadoCivil(nuevoEstadoCivil) {
    this.#estadoCivil = nuevoEstadoCivil;
  }
}
