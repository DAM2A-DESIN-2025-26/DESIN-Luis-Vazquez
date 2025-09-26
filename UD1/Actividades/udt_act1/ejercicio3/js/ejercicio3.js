numerin = prompt("Introduce un numerin:")

sumaDigitos(numerin)

function sumaDigitos(numero) {
    acumulador = 0;
    for (let i = 0; i < numero.length; i++) {
       
        acumulador += parseInt(numero[i]);
        
    }
    console.log("La suma de los numeros de "+ numero+ " es: "+ acumulador)
}