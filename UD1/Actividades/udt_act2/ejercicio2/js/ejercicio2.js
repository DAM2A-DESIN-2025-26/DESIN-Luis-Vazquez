function infoCumple(diaCumple, mesCumple) {

    var fechaHoy = new Date();
    var fechaCumple = new Date(2025, mesCumple -1, diaCumple);

    if (fechaCumple < fechaHoy) {
        fechaCumple.setFullYear(fechaCumple.getFullYear() + 1)
    }

    //esto me devuelve la diferencia en milisegundos
    var diferencia = fechaCumple.getTime() - fechaHoy.getTime()
    var diferenciaDias = Math.round(diferencia / (1000 * 60 * 60 * 24))

    var diaSemana = fechaCumple.toLocaleDateString("es-ES",{weekday:"long"})

    console.log(fechaHoy)
    console.log(fechaCumple)
    console.log("Diferencia de dias: " + diferenciaDias)
    console.log("Dia de la semana: "+diaSemana)

    return {dias: diferenciaDias, diaSemana: diaSemana}
}

infoCumple(12, 4)