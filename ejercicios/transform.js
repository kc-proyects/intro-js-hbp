const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];

/*
Esta funcion devuelve el listado de los programadores que cumplan con la habilidad requerida. 
Me gustaria ampliar getData() para que buscase tambien por las otras propiedades de los objetos,
pero no he encontrado una manera rapida por el momento. 

Lo que me complica es que haya propiedades que son strings, arrays o arrays de objetos. 

ejemplo de llamada: getData('habilidades', 'JavaScript');
*/
const getData = (property, value) => {
    return datos.filter(dato => dato[property].includes(value));
}

/*
Listado de todos los proyectos encontrados.
*/
const getDataProjects = () => {
    let outputProyectos = [];
    datos.map((dato) => dato.proyectos.map((proyecto) => {
        outputProyectos.push(proyecto.nombre);
    }));
    return outputProyectos;
}


//

console.log(getData('habilidades', 'JavaScript'));

//console.log(getData('habilidades', 'Hibernate'));

console.log(getDataProjects());


