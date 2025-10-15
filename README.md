# Sistema de Gestión Educativa

Este proyecto implementa un sistema de gestión para una comunidad educativa utilizando programación orientada a objetos y herencia en JavaScript.

## Estructura del Proyecto

```
herenciaYpolimofismo/
├── src/
│   └── clases/
│       ├── Persona.js         (Clase base)
│       ├── Empleado.js        (Hereda de Persona)
│       ├── Estudiante.js      (Hereda de Persona)
│       ├── Profesor.js        (Hereda de Empleado)
│       ├── Administrativo.js  (Hereda de Empleado)
│       └── PersonalServicio.js (Hereda de Empleado)
├── index.html
├── main.js
└── README.md
```

## Requisitos Previos

- Navegador web moderno que soporte módulos ES6
- Servidor web local (puede usar Live Server de VS Code)

## ⚠️ IMPORTANTE: Consola del Navegador

**Para usar esta aplicación, es NECESARIO tener abierta la consola del navegador**, ya que toda la interacción se realiza a través de ella.

Para abrir la consola:
- Chrome/Edge: Presiona `F12` o `Ctrl + Shift + J`

## Instrucciones de Uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Diegooor/herenciaYpolimorfismo.git
   ```

2. Abre el proyecto en Visual Studio Code

3. Instala la extensión "Live Server" si no la tienes

4. **IMPORTANTE**: Abre la consola del navegador (F12)

5. Haz clic derecho en `index.html` y selecciona "Open with Live Server"

6. La aplicación se abrirá en tu navegador. Asegúrate de que la consola esté visible.

## Funcionalidades

El sistema permite:
- Buscar personas por DNI
- Modificar información según el tipo de persona:
  - **Estudiantes**: Matricular en nuevo curso, cambiar estado civil
  - **Profesores**: Cambiar departamento, cambiar estado civil
  - **Personal de Servicio**: Cambiar labor, cambiar estado civil

## Ejemplo de Uso

1. Ingresa un DNI (por ejemplo: "12345678A" para un estudiante)
2. Selecciona una opción del menú que aparece
3. Sigue las instrucciones en la consola

## Datos de Prueba

- Estudiante: DNI "12345678A"
- Profesor: DNI "87654321B"
- Administrativo: DNI "11223344C"
- Personal de Servicio: DNI "44332211D"
