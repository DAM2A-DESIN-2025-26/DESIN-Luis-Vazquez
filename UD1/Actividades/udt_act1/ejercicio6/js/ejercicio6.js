function valorABilletes(valor) {

    let billetes = [500, 200, 100, 50, 20, 10, 5];
    imprimir = "";
    valorRestante = valor;

  
        for (let i = 0; i < billetes.length; i++) {
            if (valor % billetes[i] > 0) {
                imprimir += "1 x " + billetes[i] + " ";

                valor -= billetes[i];
            }
        }
    

    console.log(imprimir)
}

valorABilletes(705)