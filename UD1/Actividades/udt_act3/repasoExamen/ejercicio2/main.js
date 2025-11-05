//referenciar el html
const formulario = document.getElementById("formulario")
const nombreInput = document.getElementById("nombre")
const notasInput = document.getElementById("notas")
const guardar = document.getElementById("guardar")
const borrar = document.getElementById("borrar")
const divTabla = document.getElementById("divTabla")
const mediaClase = document.getElementById("mediaClase")
const error = document.getElementById("error")

//instanciar la clase
const gestorNotas = new GestorNotas();


guardar.addEventListener("click", (event) => {
    event.preventDefault();

    //hacemos las comprobaciones
    const nombre = nombreInput.value
    if (!nombre) {
        error.textContent = "Introduce un nombre"
        return
    }
    const notas = notasInput.value
    if (!notas) {
        error.textContent = "Introduce 3 notas separadas por ,"
        return
    }
    const notasArr = notas.split(",")
    if (notasArr.length !== 3) {
        error.textContent = "Introduce exactamente 3 notas separadas por ,"
        return
    }
    for (let i = 0; i < notasArr.length; i++) {
        if (notasArr[i] < 0 || notasArr[i] > 10) {
            error.textContent = "Las notas están fuera del rango"
            return;
        }
    }
    //si pasa las comprobaciones entonces insertamos el alumno
    ok = gestorNotas.insertarAlumno(nombre, notasArr)
    if (!ok) {
        error.textContent = "El nombre ya existe o las notas no son correctas.";
        return;
    }

    //limpiamos la tabla y los errores y la media
    divTabla.innerHTML = "";
    error.textContent = "";
    mediaClase.textContent = "";
    //refrescamos la tabla con el nuevo alumno
    divTabla.appendChild(gestorNotas.toHTML());
    //añadimos la media de la clase
    mediaClase.textContent = "Media de la clase: " + gestorNotas.mediaClase();
    //vaciamos los input una vez insertado
    nombreInput.value = "";
    notasInput.value = "";
})

borrar.addEventListener("click", (event) => {
    event.preventDefault()

    const nombre = nombreInput.value
    if (!nombre) {
        error.textContent = "El nombre está vacio";
        return;
    }
    if (!gestorNotas.eliminarAlumno(nombre)) {
        error.textContent = "El nombre no existe";
        return;
    } else {
        //limpiamos la tabla y los errores y la media
        divTabla.innerHTML = "";
        error.textContent = "";
        mediaClase.textContent = "";
        //refrescamos la tabla con el nuevo alumno
        divTabla.appendChild(gestorNotas.toHTML());
        //añadimos la media de la clase
        mediaClase.textContent = "Media de la clase: " + gestorNotas.mediaClase();

        //vaciamos los input una vez borrado
        nombreInput.value = "";
        notasInput.value = "";
    }

})






