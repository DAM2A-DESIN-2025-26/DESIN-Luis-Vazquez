var jugador1 = "";
var jugador2 = "";
var posibilidades = ["piedra", "papel", "tijeras"];

while (!posibilidades.includes(jugador1)) {
    jugador1 = prompt("Que jugada hará el jugador1?");
    if (!posibilidades.includes(jugador1))
        alert("Solo puedes introducir las opciones piedra, papel o tijeras");
    console.log(jugador1);
}
while (!posibilidades.includes(jugador2)) {
    jugador2 = prompt("Que jugada hará el jugador2?");
    if (!posibilidades.includes(jugador2))
        alert("Solo puedes introducir las opciones piedra, papel o tijeras");
    console.log(jugador2);
}

if (jugador1 == jugador2) {
    console.log("Es un empate");
} else if (
    (jugador1 == "piedra" && jugador2 == "tijeras") ||
    (jugador1 == "tijeras" && jugador2 == "papel") ||
    (jugador1 == "papel" && jugador2 == "piedra")) {
    console.log("El ganador es jugador1");
} else
    console.log("El ganador es jugador2");
