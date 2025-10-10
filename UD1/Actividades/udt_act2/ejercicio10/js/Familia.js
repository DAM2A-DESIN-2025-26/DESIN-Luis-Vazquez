export class Familia {
    domicilio;
    renta;
    miembros;

    constructor(domicilio, renta, miembros) {
        this.domicilio = domicilio;
        this.renta = renta;
        this.miembros = miembros;
    }

    get domicilio() {
        return this.domicilio;
    }
    set domicilio(value) {
        this.domicilio = value;
    }
    get renta() {
        return this.renta;
    }
    set renta(value) {
        this.renta = value;
    }
    get miembros() {
        return this.miembros;
    }
    set miembros(value) {
        this.miembros = value;
    }

    llamadaAComer(){
        this.miembros.forEach(miembro => {
            miembro.comer();
        });
    }

    vacaciones(puntoA, puntoB){
        this.miembros.forEach(miembro => {
            miembro.desplazarse(puntoA,puntoB);
        });
    }

}