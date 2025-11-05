const centralMedidas = new CentralMedidas();

const formulario = document.getElementById("formulario")
const inputCiudad = document.getElementById("ciudad")
const inputMedidas = document.getElementById("medidas")
const rButtonAleatorio = document.getElementById("aleatorio")
const rButtonManual = document.getElementById("manual")
const buttonGuardar = document.getElementById("guardar")
const buttonBorrar = document.getElementById("borrar")
const divTabla = document.getElementById("tabla")
const pError = document.getElementById("pError")
const pMedia = document.getElementById("pMedia")

rButtonAleatorio.addEventListener("change", () => {
    inputMedidas.value = ""
    if (rButtonAleatorio.checked) {
        inputMedidas.readOnly = true
    }

})
rButtonManual.addEventListener("change", () => {
    inputMedidas.value = ""
    if (!rButtonAleatorio.checked) {
        inputMedidas.readOnly = false
    }

})

buttonGuardar.addEventListener("click", (event) => {
    event.preventDefault();
    //quitamos los errores que haya
    pError.textContent = ""
    //recogemos el valor de ciudad en mayuscula
    const ciudad = inputCiudad.value.trim().toUpperCase()

    //comprobamos que se introduce la ciudad
    if (!ciudad) {
        pError.textContent = "Introduce una ciudad"
        return;
    }

    let ok = false
    if (rButtonAleatorio.checked) {
        const ciudad = inputCiudad.value.toUpperCase()
        if (centralMedidas.comprobarSiExiste(ciudad)) {
            pError.textContent = "La ciudad ya existe"
        } else
            ok = centralMedidas.insertaAleatorio(ciudad);
    } else {
        const ciudad = inputCiudad.value.toUpperCase()
        if (centralMedidas.comprobarSiExiste(ciudad)) {
            pError.textContent = "La ciudad ya existe"
        } else {
            let medidas = inputMedidas.value
            medidas = medidas.split(",")

            if (medidas.length == 30) {
                ok = centralMedidas.insertaMedidas(ciudad, medidas)
            } else {

                pError.textContent = "Las medidas no son exactamente 30 y separadas por ,"
                return;
            }
            if (!ok) {
                pError.textContent = "La ciudad ya existe o los datos no son correctos.";
                return;
            }
        }
    }

    centralMedidas.toHTML()


})





