var divCrear = document.createElement("div")
divCrear.id= "miDiv"

var enlaceCrear = document.createElement("a")
enlaceCrear.id = "miEnlace"
enlaceCrear.href = "www.google.com"
enlaceCrear.textContent = "Pincha aqui neno"

var parrafoCrear = document.createElement("p")
parrafoCrear.id= "miParrafo"
parrafoCrear.textContent = "Me van a cambiar"

divCrear.appendChild(enlaceCrear)
divCrear.appendChild(parrafoCrear)

document.body.appendChild(divCrear)

//Mostrar mensaje con alert que indique que iniciamos los cambios – nos permitirá ver el html inicial.
alert("Iniciamos los cambios")

//Añadir un párrafo al final del body con el texto: “Contenido párrafo”
var nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent="Contenido del nuevo parrafo"
document.body.appendChild(nuevoParrafo);

//Borrar el enlace.
var enlace = document.getElementById("miEnlace");
enlace.remove();

//Cambiar el párrafo por otro cuyo contenido sea vuestro nombre
var parrafo = document.getElementById("miParrafo");
parrafo.textContent="Nuevo texto"

//Añadir un párrafo con la fecha actual antes del div.
var fechaParrafo = document.createElement("p");
var fecha = new Date().toDateString();
fechaParrafo.textContent = "Fecha actual:" + fecha;
var div = document.getElementById("miDiv");
document.body.insertBefore(fechaParrafo, div);

