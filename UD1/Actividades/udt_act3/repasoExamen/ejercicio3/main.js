//referenciar html
const formulario = document.getElementById("formulario")
const tiendaInput = document.getElementById("tienda")
const ventasInput = document.getElementById("ventas")
const radioManual = document.getElementById("manual")
const radioAleatorio = document.getElementById("aleatorio")
const guardar = document.getElementById("guardar")
const borrar = document.getElementById("borrar")
const divTabla = document.getElementById("divTabla")
const media = document.getElementById("mediaGlobal")
const error = document.getElementById("error")

//instanciar el registroVentas
const registroVentas = new RegistroVentas;

//recuperamos si existe la variable de localStorage
const datosGuardados = localStorage.getItem("ventas");
if (datosGuardados) {
    registroVentas.fromJSON(datosGuardados); // recupera la matriz
    divTabla.appendChild(registroVentas.toHTML()); // genera la tabla
    media.textContent = "Media total de las ventas: " + registroVentas.mediaTotal();
}

radioManual.addEventListener("change", () => {

    tiendaInput.value = ""
    ventasInput.value = ""
    if (radioAleatorio.checked) {
        ventasInput.readOnly = true
    } else {
        ventasInput.readOnly = false
    }
})

radioAleatorio.addEventListener("change", () => {
    tiendaInput.value = ""
    ventasInput.value = ""
    if (radioAleatorio.checked) {
        ventasInput.readOnly = true
    } else {
        ventasInput.readOnly = false
    }
})

guardar.addEventListener("click", (event) => {
    event.preventDefault()
    //vaciamos los errores
    error.textContent = ""
    error.style.display = "none"

    let tienda = tiendaInput.value
    //comprobamos que el input de tienda tiene valor
    if (tienda == "") {
        error.style.display = "block"
        error.style.color = "red"
        error.textContent = "No se ha introducido un nombre"
        return
    }
    //miramos si esta marcado manual
    if (radioManual.checked) {
        //si esta marcado manual, miramos que tenga valores las ventas
        if (ventasInput.value == "") {
            error.style.display = "block"
            error.style.color = "red"
            error.textContent = "No se han introducido ventas"
            return
        }
        //comprobamos que se pasen 12 valores separados por x
        let ventasArr = ventasInput.value.split(",")
        if (ventasArr.length !== 12) {
            error.style.display = "block"
            error.style.color = "red"
            error.textContent = "Necesitamos 12 valores separados por ,"
            return
        }
        //comprobamos rangos
        ventasArr.forEach(num => {
            if (num < 500 || num > 2000) {
                error.style.display = "block"
                error.style.color = "red"
                error.textContent = "algun valor no esta en el rango de 500 y 2000"
                return
            }
        });

        //si pasa las comprobaciones, insertamos la tienda
        ok = registroVentas.insertarTienda(tienda, ventasArr)
        if (!ok) {
            error.style.display = "block"
            error.style.color = "red"
            error.textContent = "tienda ya existe o las ventas no son correctas"
            return
        }
        //limpiamos la tabla y los errores y la media
        divTabla.innerHTML = "";
        error.textContent = "";
        media.textContent = "";
        //refrescamos la tabla con el nuevo alumno
        divTabla.appendChild(registroVentas.toHTML());
        //añadimos la media de las ventas
        media.textContent = "Media total de las ventas: " + registroVentas.mediaTotal();
        //añadimos al localStorage la matriz ventas
        localStorage.setItem("ventas", registroVentas.toJSON())

        //vaciamos los input una vez insertado
        tiendaInput.value = "";
        ventasInput.value = "";
    }

    if (radioAleatorio.checked) {
        let tienda = tiendaInput.value

        ok = registroVentas.insertarAleatorio(tienda)
        if (!ok) {
            error.style.display = "block"
            error.style.color = "red"
            error.textContent = "tienda ya existe o las ventas no son correctas"
            return
        }
        //limpiamos la tabla y los errores y la media
        divTabla.innerHTML = "";
        error.textContent = "";
        media.textContent = "";
        //refrescamos la tabla con el nuevo alumno
        divTabla.appendChild(registroVentas.toHTML());
        //añadimos la media de las ventas
        media.textContent = "Media total de las ventas: " + registroVentas.mediaTotal();
        //añadimos al localStorage la matriz ventas
        localStorage.setItem("ventas", registroVentas.toJSON())

        //vaciamos los input una vez insertado
        tiendaInput.value = "";
        ventasInput.value = "";

    }

})

borrar.addEventListener("click", (event) => {
    event.preventDefault()

    //vaciamos los errores
    error.textContent = ""
    error.style.display = "none"

    let tienda = tiendaInput.value
    //comprobamos que el input de tienda tiene valor
    if (tienda == "") {
        error.style.display = "block"
        error.style.color = "red"
        error.textContent = "No se ha introducido un nombre de tienda"
        return
    }

    ok = registroVentas.eliminarTienda(tienda.toUpperCase())
    if (!ok) {
        error.style.display = "block"
        error.style.color = "red"
        error.textContent = "La tienda no existe"
        return
    }
    //limpiamos la tabla y los errores y la media
    divTabla.innerHTML = "";
    error.textContent = "";
    media.textContent = "";
    //refrescamos la tabla con el nuevo alumno
    divTabla.appendChild(registroVentas.toHTML());
    //añadimos la media de las ventas
    media.textContent = "Media total de las ventas: " + registroVentas.mediaTotal();
    //añadimos al localStorage la matriz ventas
    localStorage.setItem("ventas", registroVentas.toJSON())

    //vaciamos los input una vez insertado
    tiendaInput.value = "";
    ventasInput.value = "";
})

