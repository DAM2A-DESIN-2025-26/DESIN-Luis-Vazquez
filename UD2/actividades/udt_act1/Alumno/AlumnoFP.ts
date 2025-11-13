import { Alumno } from "./Alumno";

export class AlumnoFP extends Alumno {
    
    ciclo:String = "";
    moduloFavorito:String = "";

    constructor(nombre:String,edad:number,nota:number,ciclo:String,moduloFavorito:String) {
        super(nombre, edad,nota)
        this.ciclo = ciclo
        this.moduloFavorito = moduloFavorito

    }
    
    recomendarEspecialidad() {
        if (this.ciclo=="DAM"||this.ciclo=="DAW"||this.ciclo=="ASIR") {
            console.log("Especializate en lo que mas comodo te sientas")
        }else{
            console.log("Deja de estudiar")
        }
    }
}