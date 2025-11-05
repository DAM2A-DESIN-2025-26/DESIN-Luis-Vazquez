//referenciamos el html
const formulario = document.getElementById("formulario")
const divInformacion = document.getElementById("informacion")
const inputMarcaSeat = document.getElementById("seat")
const inputMarcaRenault = document.getElementById("renault")
const inputMarcaCitroen = document.getElementById("citroen")
const inputModelo = document.getElementById("modelo")
const inputMatricula = document.getElementById("matricula")
const selectColor = document.getElementById("color")
const buttonGuardar = document.getElementById("guardar")
const buttonBorrar = document.getElementById("eliminar")
const divListado = document.getElementById("listado")

//ocultamos el div informacion
divInformacion.style.display = "none"
//instanciar clases
const garaje = new Garaje(6)


//crear eventos
buttonGuardar.addEventListener("click", (event) => {
    console.log("prueba")
    event.preventDefault()

    //comprobaciones
    //campos vacios
    const modelo = inputModelo.value.trim()
    var marca = ""
    if (inputMarcaCitroen.checked) {
        marca = inputMarcaCitroen.value
    }
    if (inputMarcaRenault.checked) {
        marca = inputMarcaRenault.value
    }
    if (inputMarcaSeat.checked) {
        marca = inputMarcaSeat.value
    }
    const matricula = inputMatricula.value.trim().toUpperCase()
    const color = selectColor.value.trim()

    if (!modelo) {
        divInformacion.style.display = "block"
        divInformacion.textContent = "El campo Matricula es obligatorio"
        return
    }
    if (!matricula) {
        divInformacion.style.display = "block"
        divInformacion.textContent = "El campo Matricula es obligatorio"
        return
    }
    if (!color || color == "none") {
        divInformacion.style.display = "block"
        divInformacion.textContent = "El campo Color es obligatorio"
        return
    }
    let numCoches = garaje.getNumeroCoches()
    if (numCoches >= 6) {
        divInformacion.style.display = "block"
        divInformacion.textContent = "No se pueden insertar mas coches, se ha alcanzado la capacidad maxima"
        return
    }


    //comprobar si existe la matricula
    if (!garaje.existeCoche(matricula)) {
        garaje.addcoche(modelo, marca, matricula, color)
        console.log(garaje._coches)
        return
    } else {
        divInformacion.style.display = "block"
        divInformacion.textContent = "Matricula existe"
        return
    }


})

buttonBorrar.addEventListener("click", (event) => {
    event.preventDefault()

    const matricula = inputMatricula.value.trim().toUpperCase()
    if (!matricula) {
        divInformacion.style.display = "block"
        divInformacion.textContent = "El campo Matricula es obligatorio"
        return
    }

    if (garaje.existeCoche(matricula)) {
        divInformacion.style.display = "block"
        divInformacion.textContent = "Matricula no existe"
        return
    } else {
        garaje.eliminaCoche(matricula)
        console.log(garaje._coches)

    }
})

divListado.addEventListener("change", (event) => {
    event.preventDefault()
    let arr = []
    for (let i = 0; i < garaje.length; i++) {
      
        arr[i] = garaje._coches[i].toString()
    }

    divListado.textContent = arr
});





