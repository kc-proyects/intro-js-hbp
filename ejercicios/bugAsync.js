// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'John Doe' });
            } else {
                reject('Usuario no encontrado');
            }
        }, 2000);
    });
}

obtenerUsuario(1).then(usuario => {
    console.log(usuario); // { id: 1, nombre: 'John Doe' }
}).catch(error => {
    console.error(error);
});


/*
Lo que estaba ocurriendo es que la función obtenerUsuario() siempre devolvía undefined
por que el timeout se quedaba a la espera y mientras estaba en espera se ejecutaba el return 
de la variable usuario. 

La solución que aporto es el uso de un promise, ya que de esta forma puedo controlar que el 
console.log unicamente se ejecute cuándo obtenerUsuario devuelva algo.
*/