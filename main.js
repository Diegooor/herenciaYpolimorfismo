// importo las clases que voy a instanciar
import Estudiante from './src/clases/Estudiante.js';
import Profesor from './src/clases/Profesor.js';
import Administrativo from './src/clases/Administrativo.js';
import PersonalServicio from './src/clases/PersonalServicio.js';

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

// Buscamos el miembro de la comunidad educativa
const miembroEncontrado = comunidadEducativa.find(p => {
    console.log('Buscando persona con DNI:', idBuscado);
    const info = String(p.atributosPersona);
    return info.includes(idBuscado);
});

if (miembroEncontrado) {
    console.log(`\nInformación de la persona:`);
    console.log(miembroEncontrado.atributosPersona);
}
// Si no se encuentra la persona, mostramos un mensaje de error
else {
    console.log("No se encontró a ninguna persona con ese número de identificación.");
}

// ofrecemos un menu de opciones dependiendo del tipo de persona encontrada
if (miembroEncontrado instanceof Estudiante) {
    const estudiante = miembroEncontrado; 
    console.log("\nOpciones para Estudiante:");
    console.log("1. Matricular en nuevo curso");
    console.log("2. Cambiar Estado Civil");
    const opcion = prompt("Seleccione una opción (1-2): ");

    if (opcion === "1") {
        const nuevoCurso = prompt("Ingrese el nuevo curso: ");
        estudiante.matricularNuevoCurso = nuevoCurso;
        console.log(`\nCurso ${nuevoCurso} agregado exitosamente.`);
    } else if (opcion === "2") {
        const nuevoEstadoCivil = prompt("Ingrese el nuevo estado civil: ");
        estudiante.cambiarEstadoCivil = nuevoEstadoCivil;
    }
    console.log("\nInformación actualizada del Estudiante:");
    console.log(estudiante.atributosPersona);
}
else if (miembroEncontrado instanceof Profesor) {
    const profesor = miembroEncontrado; 
    console.log("\nOpciones para Profesor:");
    console.log("1. Cambiar Departamento");
    console.log("2. Cambiar Estado Civil");
    const opcion = prompt("Seleccione una opción (1-2): ");
    if (opcion === "1") {
        const nuevaFacultad = prompt("Ingrese el nuevo departamento: ");
        profesor.cambiarFacultad = nuevaFacultad;
        console.log(`\nFacultad actualizada exitosamente.`);
    } else if (opcion === "2") {
        const nuevoEstadoCivil = prompt("Ingrese el nuevo estado civil: ");
        profesor.cambiarEstadoCivil = nuevoEstadoCivil;
    }
    console.log("\nInformación actualizada del Profesor:");
    console.log(profesor.atributosPersona);
}
else if (miembroEncontrado instanceof PersonalServicio) {
    const personalServicio = miembroEncontrado; 
    console.log("\nOpciones para Personal de Servicio:");
    console.log("1. Cambiar Labor");
    console.log("2. Cambiar Estado Civil");
    const opcion = prompt("Seleccione una opción (1-2): ");
    if (opcion === "1") {
        const nuevaLabor = prompt("Ingrese la nueva labor: ");
        personalServicio.cambiarLabor = nuevaLabor;
        console.log(`\nLabor actualizada exitosamente.`);
    }
    else if (opcion === "2") {
        const nuevoEstadoCivil = prompt("Ingrese el nuevo estado civil: ");
        personalServicio.cambiarEstadoCivil = nuevoEstadoCivil;
    }
    console.log("\nInformación actualizada del Personal de Servicio:");
    console.log(personalServicio.atributosPersona);
}
