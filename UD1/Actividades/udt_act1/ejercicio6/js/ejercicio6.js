function valorABilletes(valor) {

    var billetes = [500, 200, 100, 50, 20, 10, 5];

    var billetesDevolver = [];
    var valorRestado = valor;

    for (let i = 0; i < billetes.length; i++) {
        let contador = 0;
        while (valorRestado >= billetes[i]) {
            valorRestado -= billetes[i];
            contador++;
        }
        billetesDevolver.push(contador);
        if (contador > 0) {
            console.log(contador + " x " + billetes[i])

        }
    }

    return billetesDevolver;
}


var cantidadUsuario = "";
//sería mas correcto con un while(true) y un break cuando escriba fin
while (cantidadUsuario != "FIN") {
    cantidadUsuario = prompt("Introduce una cantidad, para finalizar introduce la palabra FIN")

    if (cantidadUsuario > 0) {
        valorABilletes(cantidadUsuario)
        
    } else if (cantidadUsuario != "FIN") {
        alert("Introduce una cantidad válidad o la palabra 'FIN'")
    }
}


