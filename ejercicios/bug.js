/* 
Ejercicio 2 Arreglar bug
Nuestro cliente está intentando calcular el promedio de una lista de números
pero nos dice que no funciona. No nos da el error, solo este código que 
es el que tiene en producción.Para este ejercicio tenemos que crear un 
archivo llamado bug.js con la solución. 


Respuesta: el error ocurría por lo que se se definía en la seccion del for donde se 
establece la condicion para que el bucle continue iterando (Ln-15, Col-20). 
El indice accedía a una posicion del array que no existia y por ello se genera un 
undefined y posteriormente cuando ese undefined se quiere sumar al total da un NaN 
por que undefined no es un numero.

Se podria haber arreglado inicializando el indice a 1 o restando 1 a numeros.length
*/

const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);


console.log(promedioNumeros);