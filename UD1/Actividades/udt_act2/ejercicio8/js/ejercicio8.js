export class Persona {
    #nombre;
    #apellido;

    constructor(nombre, apellido) {
        this.#nombre = nombre
        this.#apellido = apellido
        if (nombre == null)
            this.#nombre = "Sin nombre"
        if (apellido == null)
            this.#apellido = "Sin apellido"
    }


    get Nombre() {
        return this.#nombre;
    }
    set Nombre(value) {
        this.#nombre = value;
    }

    get Apellido() {
        return this.#apellido;
    }

    set Apellido(valor) {
        this.#apellido = valor;
    }

    comer(platos) {
        var devolver = this.Nombre + " " + this.Apellido + " Está comiendo "

        if (platos == null || platos.length == 0) {
            devolver += " un bocata de chorizo"
        } else {
            platos.forEach(plato => {
                devolver += " " + plato + "/"
            });
        }

        console.log(devolver);
    }

}
/*
Comento para que no me cree personas en el ejercicio9, deberia crear un main.js donde instancie estas personas pero...
const p1 = new Persona("Luis", "Vazquez")
const p2 = new Persona("Fran")
const p3 = new Persona();
p1.comer(["manzana", "yogur"]);
p2.comer(["filete", "fabada", "tarta de queso"])
p3.comer()*/
