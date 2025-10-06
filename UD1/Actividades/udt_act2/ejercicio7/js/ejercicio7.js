function crearPersona(nombre, apellidos, edad, contactos) {

    if (edad == null) {
        edad = 0
    }
    if (contactos.length > 0) {
        console.log("Nombre: " + nombre + " Apellidos :" + apellidos + " Edad: " + edad)
        
        contactos.forEach(c => {
            console.log(c)
        });

    }


}



crearPersona("Alejandro", "Gonzalez", 19, ["alejandroG@educastur.es", "657875643"])
