var diaCumple = 12
var mesCumple = 4

function infoCumple(diaCumple, mesCumple) {

    var fechaHoy = new Date();
    var fechaCumple = new Date(2025, 4, 12);

    //esto me devuelve la diferencia en milisegundos (creo)
    var diferencia = fechaCumple.getTime() - fechaHoy.getTime()
    var diferenciaDias = Math.round(diferencia / (1000 * 60 * 60 * 24))

    console.log(fechaHoy)
    console.log(fechaCumple)
    console.log(diferenciaDias)
    
    return {}
}

infoCumple(diaCumple, mesCumple)