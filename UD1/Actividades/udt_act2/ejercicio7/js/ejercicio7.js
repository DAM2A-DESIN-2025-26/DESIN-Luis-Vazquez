function crearPersona(nombre, apellidos, edad = 0, ...contactos) {

    if (typeof edad === "object") {
        // Movemos el array a la variable contactos
        contactos = edad;
        edad = 0;          
    }

    if (edad == null) {
        edad = 0
    }

    console.log("Nombre: " + nombre + " Apellidos: " + apellidos + " Edad: " + edad)

    if (contactos && contactos.length > 0) {
        contactos.forEach(c => {
            console.log(c)
        });

    }


}

crearPersona("Alejandro", "Gonzalez", 19, ["alejandroG@educastur.es", "657875643"])
crearPersona("Luis", "Vazquez", ["luisvg@educastur.es"])
