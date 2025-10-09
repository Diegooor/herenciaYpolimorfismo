// importo las clases que voy a instanciar
import Estudiante from './Estudiante.js';
import Profesor from './Profesor.js';
import Administrativo from './Administrativo.js';
import PersonalServicio from './PersonalServicio.js';

// Creo instancias de cada clase
const comunidadEducativa = [
    new Estudiante('Ana', 'García', '12345678A', 'Soltera', 'programación'),
    new Profesor('Luis', 'Martínez', '87654321B', 'Casado', 2010, 'Ingeniería'),
    new Administrativo('Marta', 'López', '11223344C', 'Divorciada', 2015, 'Recursos Humanos'),
    new PersonalServicio('Carlos', 'Sánchez', '44332211D', 'Viudo', 2012, 'Mantenimiento')
];



console.log("=== Bienvenido al Sistema de Gestión Educativa ===");

// Pedimos el número de identificación para empezar
const idBuscado = prompt("Por favor, ingrese el número de identificación de la persona: ");

// Buscamos la persona en la comunidad educativa
const persona = comunidadEducativa.find(p => {
    console.log('Buscando persona con DNI:', idBuscado);
    return p.atributosPersona.includes(idBuscado);
});

if (persona) {
    console.log(`\nInformación de la persona:`);
    console.log(persona.atributosPersona);
}
// Si no se encuentra la persona, mostramos un mensaje de error
else {
    console.log("No se encontró a ninguna persona con ese número de identificación.");
}


