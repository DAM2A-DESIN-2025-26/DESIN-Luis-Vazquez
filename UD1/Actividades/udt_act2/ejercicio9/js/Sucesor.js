import { Persona } from "../../ejercicio8/js/ejercicio8.js";

export class Sucesor extends Persona {
    tieneMoto;

    constructor(nombre, apellido, tieneMoto) {
        super(nombre, apellido);
        this.tieneMoto = tieneMoto;
    }

    get tieneMoto() {
        return this.tieneMoto;
    }
    set tieneMoto(value) {
        this.tieneMoto = value;
    }

    desplazarse(puntoA, puntoB) {
        if (this.tieneMoto) {
            console.log("Se desplaza desde " + puntoA + " hasta " + puntoB + " en moto")
        } else {
            console.log("Se desplaza desde " + puntoA + " hasta " + puntoB + " andando")

        }
    }

}