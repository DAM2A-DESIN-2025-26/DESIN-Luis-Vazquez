const efectividad = {
    fuego: {
        hierba: 2,
        agua: 0.5,
        electricidad: 1,
    },
    hierba: {
        fuego: 0.5,
        agua: 2,
        electricidad: 1

    },
    agua: {
        fuego: 2,
        hierba: 0.5,
        electricidad:  1,
    },
    electricidad: {
        fuego: 1,
        hierba: 1,
        agua: 2,
    }
}

 function calculaImpacto(miTipo, tipoOponente, poderAtaque, defensaOponente) {
        
    var daño = 50 * (poderAtaque / defensaOponente) * efectividad[miTipo][tipoOponente];

    console.log("Daño realizado: " + daño)

}

calculaImpacto("fuego", "hierba", 50, 50);