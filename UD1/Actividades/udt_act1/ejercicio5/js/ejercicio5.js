const jugadas = {
    jugador1: "Papel",
    jugador2: "Tijeras"
}

const jugadasGanador = {
    Piedra: "Tijeras",
    Tijera: "Papel",
    Papel: "Piedra"
}

function piedraPapelTijera(jugadas, jugadasGanador) {

    var jugador1 = jugadas.jugador1;
    var jugador2 = jugadas.jugador2;


    if (jugador1 == jugador2) {
        console.log("Es un empate")

        //miramos que el valor de jugador1 coincida con alguna clave del objeto jugadasGanador
        //si coincide, comparamos el valor de la clave con el valor de jugador2
    } else if (jugadasGanador[jugador1] == jugador2) {
        console.log("El ganador es jugador1");
    } else
        console.log("El ganador es jugador2");
}

piedraPapelTijera(jugadas, jugadasGanador);
