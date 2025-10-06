/*Ejercicios Javascript: 
 Define un array países que contenga un listado de países 
 Implementa funciones que permitan: • Mostrar todos los elementos del array separados por un salto de línea usando for..of(consola) 
 Mostrar los elementos del array en sentido inverso separados por un salto de línea usando foreach 
• Mostrar los elementos del array alfabéticamente separados por un salto de línea usando una sola sentencia 
 Añadir un elemento al comienzo del array 
 Añadir un elemento al final del array 
 Borrar un elemento al comienzo del array (indicar cuál es) 
 Borrar un elemento al final del array (indicar cuál es) */

var paises = ["España", "Francia", "EEUU", "México", "Argentina"]


function recorrerArrayForOf(arrayPaises) {

    for (const pais of arrayPaises) {
        console.log(pais + "\n")
    }
}

function recorrerArrayForEachInverso(arrayPaises) {

    let contador = 0;
    let arrayRecorrer = [];

    //invertimos el array
    for (let i = arrayPaises.length - 1; i >= 0; i--) {

        arrayRecorrer.push(arrayPaises[i])

    }

    arrayRecorrer.forEach(pais => {
        console.log(pais + "\n")
    });
}

function mostrarElementosArrayOrdenados(paises) {
    console.log("MOSTRAR")
    console.log(paises.sort().join("\n"))
}

function añadirElementoInicioArray(arrayPaises, pais) {

    arrayPaises.unshift(pais)
    console.log("Se ha añadido al principio del array el elemento: " + pais)
}

function añadirElementoFinalArray(arrayPaises, pais) {

    arrayPaises.push(pais)
    console.log("Se ha añadido al final del array el elemento: " + pais)
}

function eliminarElementosPrincipioArray(arrayPaises) {
    console.log("borramos el primer elemento: " + arrayPaises[0])
    arrayDevolver = arrayPaises.splice(0, 1)
}
function eliminarElementosFinalArray(arrayPaises) {
    console.log("borramos el ultimo elemento: " + arrayPaises[arrayPaises.length - 1])
    arrayDevolver = arrayPaises.splice(arrayPaises.length - 1, 1)
}







añadirElementoFinalArray(paises, "Portugal")
añadirElementoInicioArray(paises, "Hawai")
recorrerArrayForOf(paises)
recorrerArrayForEachInverso(paises)
mostrarElementosArrayOrdenados(paises)
eliminarElementosPrincipioArray(paises)
eliminarElementosFinalArray(paises)

