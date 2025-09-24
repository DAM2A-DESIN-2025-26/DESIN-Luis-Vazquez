
let num = parseInt(prompt("Introduce un numero:"));

function tablaMultiplicar(num) {

    let resultado = "\n";

    for (let i = 1; i < 11; i++) {
       resultado += num + " * " + i + " = " + num*i + "\n"     
    }
    return resultado;
}

console.log(tablaMultiplicar(num))
