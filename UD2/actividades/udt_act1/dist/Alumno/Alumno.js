"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
class Alumno {
    static contador = 0;
    id = Alumno.contador;
    nombre = "Luis";
    edad = 28;
    nota = 5;
    constructor(nombre, edad, nota) {
        Alumno.contador++;
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }
    mostrarInfo() {
        return "El alumno de nombre " + this.nombre + " con edad " + this.edad +
            " tiene el ID " + this.id + " y su nota es " + this.nota;
    }
    estaAprobado() {
        var aprobado = false;
        if (this.nota >= 5) {
            aprobado = true;
        }
        return aprobado;
    }
}
exports.Alumno = Alumno;
//# sourceMappingURL=Alumno.js.map