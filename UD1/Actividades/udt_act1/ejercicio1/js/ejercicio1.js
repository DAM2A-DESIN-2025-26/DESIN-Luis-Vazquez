var nombre = "";
var apellidos ="";
var añoNacimiento ="";
var dinero = "";
const AHORROS = 10000;

nombre = prompt("Introduce tu nombre:");
apellidos = prompt("Introduce tus apellidos:");
añoNacimiento = prompt("Introduce tu año de nacimiento:");
dinero = prompt("Introduce la cantidad de dinero:");

console.log("var nombre tipo: "+ typeof(nombre)+"\n"+
"var apellidos tipo: "+ typeof(apellidos)+"\n"+
"var añoNacimiento tipo: "+ typeof(añoNacimiento)+"\n"+
"var dinero tipo: "+ typeof(dinero)+"\n")

console.log(nombre + " "+ apellidos + "\n"+ "Dentro de 2 años tendré "+ 
    (parseInt(dinero)+AHORROS) +" euros.")
