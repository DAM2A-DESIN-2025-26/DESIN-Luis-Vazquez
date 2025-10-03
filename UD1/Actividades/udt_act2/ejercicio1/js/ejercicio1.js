/*Crea un programa que pida al usuario su nombre y apellidos y muestre:
• El tamaño del nombre más los apellidos (sin contar espacios).
• La cadena en minúsculas y en mayúsculas.
• Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga
Nombre:
Apellido 1:
Apellido 2:
o Una propuesta de nombre de usuario, compuesto por el nombre, la inicial del primer
apellido y la inicial del segundo: ej. Para Javier Gonzalez Pisano sería javiergp.
Implementa esta funcionalidad mediante una función anónima.

o Una propuesta de nombre de usuario compuesto por las dos primeras letras del
nombre y de los dos apellidos: ej. jagopi. Implementa esta funcionalidad mediante
una función flecha. */

var nombreApellidos = prompt("Introduce tu nombre y apellidos: ")

function mostrarDatos(nombreApellidos) {

    let nombreApellidosSinEspacios = nombreApellidos.replace(" ", "");
    let tamaño = nombreApellidosSinEspacios.length;
    let mayus = nombreApellidos.toUpperCase();
    let minus = nombreApellidos.toLowerCase();

    let porPartes = nombreApellidos.split(' ');
    let arr = ["nombre: ", "apellido1: ", "apellido2: "]
    console.log("Tamaño de " + nombreApellidosSinEspacios + ": " + tamaño);
    console.log("En mayusculas: " + mayus);
    console.log("En minusculas: " + minus);

    for (let i = 0; i < porPartes.length; i++) {
        console.log(arr[i] + porPartes[i])

    }

}
const nombreUser = function (nombreApellidos) {

    var arr = nombreApellidos.split(' ');
    let nombreUsuario = "";
    for (let i = 0; i < arr.length; i++) {

        if (i == 0) {
            nombreUsuario += arr[i]
        } else {
            nombreUsuario += arr[i].substr(0, 1)
        }
    }

    console.log(nombreUsuario)
    return nombreUsuario;

}

var nombreUserDos = (nombreApellidos) => {
    var arr = nombreApellidos.split(' ');
    var nombreUser = "";
    for (let i = 0; i < arr.length; i++) {
        nombreUser += arr[i].substr(0, 2)

    }
    
    console.log(nombreUser)
    return nombreUser;

}

mostrarDatos(nombreApellidos);
const nombreUsuario = nombreUser(nombreApellidos);

var usuario2 = nombreUserDos(nombreApellidos);

