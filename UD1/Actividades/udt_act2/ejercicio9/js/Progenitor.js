import { Persona } from "../../ejercicio8/js/ejercicio8.js";
export class Progenitor extends Persona {
    tieneCoche;

    constructor(nombre, apellido, tieneCoche) {
        super(nombre, apellido);
        this.tieneCoche = tieneCoche;
    }

    get tieneCoche() {
        return this.tieneCoche;
    }
    set tieneCoche(value) {
        this.tieneCoche = value;
    }

    desplazarse(puntoA, puntoB) {
        if (this.tieneCoche) {
            console.log("Se desplaza desde " + puntoA + " hasta " + puntoB + " en coche")
        } else {
            console.log("Se desplaza desde " + puntoA + " hasta " + puntoB + " andando")

        }
    }

    comer() {
        console.log("Estoy comiendo huevos")
    }
}