"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoFP = void 0;
const Alumno_1 = require("./Alumno");
class AlumnoFP extends Alumno_1.Alumno {
    ciclo = "";
    moduloFavorito = "";
    constructor(nombre, edad, nota, ciclo, moduloFavorito) {
        super(nombre, edad, nota);
        this.ciclo = ciclo;
        this.moduloFavorito = moduloFavorito;
    }
    recomendarEspecialidad() {
        if (this.ciclo == "DAM" || this.ciclo == "DAW" || this.ciclo == "ASIR") {
            console.log("Especializate en lo que mas comodo te sientas");
        }
        else {
            console.log("Deja de estudiar");
        }
    }
}
exports.AlumnoFP = AlumnoFP;
//# sourceMappingURL=AlumnoFP.js.map