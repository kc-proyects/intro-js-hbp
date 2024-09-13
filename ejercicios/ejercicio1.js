/* 
objeto llamado usuario con los siguientes campos:
    - Nombre (el tuyo o inventado)
    - Apellidos (el tuyo o inventado)
    - Una lista con los temas del bootcamp Node.js, Git y react con sus 
    nombres y fechas de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
    - Si estás en búsqueda activa con un valor de verdadero o false 
*/

const usuario = {
    nombre: 'Héctor',
    apellidos: 'Benedicte Pérez',
    temas: [
        nodeJS = { nombre: 'Node.js', fechaInicio: '2024-10-21'},
        git = { nombre: 'Git', fechaInicio: '2024-09-01'},
        react = { nombre: 'React', fechaInicio: '2024-12-16'},
    ],
    enBusquedaActiva: false,
}

// Mostrar por pantalla la fecha de inicio del módulo de react del
// objeto que hemos creado anteriormente.
console.log(usuario.temas[2].fechaInicio);