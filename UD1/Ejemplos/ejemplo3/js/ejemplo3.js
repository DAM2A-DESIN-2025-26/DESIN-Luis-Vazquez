/**
 * DESIN- UD1 Ejemplo 1 -Uso del depurador JS. Encontrar los errores del script
 * @author Javi G. Pisano
 * 
 * Realiza un script que se encargue de leer 10 nombres por pantalla y los inserte en un array. 
 * Posteriormente, los nombres se mostrarán una unica ventana emergente
 */

/* Encontrar los errores que tiene el siguiente script, usando las herramientas de depuración de Google Chrome */

var nombres = [];

var NUMERO_NOMBRES = 10;
var CADENA_NOMBRES = "";

for (var i = 0; i < NUMERO_NOMBRES; i++) {
	nombres[i] = prompt("Introduce un nombre", "Agapito");
}

for (var i = 0; i < NUMERO_NOMBRES; i++) {
	CADENA_NOMBRES += nombres[i] + "\n";
}
alert(CADENA_NOMBRES);


