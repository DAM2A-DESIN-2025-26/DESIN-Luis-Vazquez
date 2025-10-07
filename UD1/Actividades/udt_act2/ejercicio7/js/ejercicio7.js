function crearPersona(nombre, apellidos, edad, contactos) {

    if (edad == null) {
        edad = 0
    }

    console.log("Nombre: " + nombre + " Apellidos :" + apellidos + " Edad: " + edad)
    
    if (contactos.length > 0) {
        contactos.forEach(c => {
            console.log(c)
        });

    }


}

crearPersona("Alejandro", "Gonzalez", 19, ["alejandroG@educastur.es", "657875643"])
crearPersona("Luis", "Vazquez", null, ["luisvg@educastur.es"])
