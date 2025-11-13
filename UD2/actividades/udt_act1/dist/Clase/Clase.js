"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clase = void 0;
const Alumno_1 = require("../Alumno/Alumno");
class Clase {
    alumnos = [];
    constructor(alumnos) {
        this.alumnos = alumnos;
    }
    addAlumno(alumno) {
        this.alumnos.push(alumno);
    }
    mostrarTodos() {
        this.alumnos.forEach(alumno => {
            console.log(alumno.mostrarInfo());
        });
    }
    aprobados() {
        this.alumnos.forEach(alumno => {
            var aprobado = alumno.estaAprobado();
            if (aprobado) {
                console.log("Aprobado:" + alumno.mostrarInfo());
            }
        });
    }
    buscarPorNombre(nombre) {
        this.alumnos.forEach(alumno => {
            if (alumno.nombre == nombre) {
                console.log(alumno.mostrarInfo());
            }
        });
    }
    static totalAlumnos() {
        console.log(Alumno_1.Alumno.contador);
    }
}
exports.Clase = Clase;
//# sourceMappingURL=Clase.js.map