/*Crea un formulario HTML que tenga:
• Una caja de texto
• Un botón Añadir. Al pulsar el mismo, se añadirá a la página
HTML un elemento de lista (<li>) cuyo contenido será el valor
de la caja de texto
• Si es la primera vez que se pulsa, deberá crearse el listado
• Un botón Quitar. Al pulsar el mismo,se eliminará del listado
todos aquellos valores cuyo texto coincida con el valor
introducido en la caja de texto*/

var formulario = document.createElement("form")
formulario.id = "miFormulario"
document.body.appendChild(formulario)

var cajaTexto = document.createElement("input")
cajaTexto.id = "miCajaTexto"
formulario.appendChild(cajaTexto)

var botonAñadir = document.createElement("button")
botonAñadir.textContent = "Añadir"
botonAñadir.id = "miBotonAñadir"
formulario.appendChild(botonAñadir)

botonAñadir.addEventListener("click", añadirLista)


var botonQuitar = document.createElement("button")
botonQuitar.textContent = "Quitar"
botonQuitar.id = "miBotonQuitar"
formulario.appendChild(botonQuitar)

botonQuitar.addEventListener("click", quitarElemento)

function añadirLista(event) {
    event.preventDefault();
    var lista = document.getElementById("miLista")

    if (!lista) {
        var lista = document.createElement("ul")
        lista.id = "miLista"
        document.body.appendChild(lista)
    }
    var elementLista = document.createElement("li")
    var texto = document.getElementById("miCajaTexto").value

    elementLista.textContent = texto;

    lista.appendChild(elementLista)
}

function quitarElemento(event) {
    event.preventDefault();

    var texto = document.getElementById("miCajaTexto").value;
    var lista = document.getElementById("miLista")
    
    for (const item of lista.children) {
        if(item.textContent == texto){
            item.remove()
        }

    }
}





