import { IAlumno } from "./IAlumno";

export class Alumno implements IAlumno{
    static contador:number = 0;
    readonly id: number = Alumno.contador;
    nombre: String = "Luis";
    edad: number = 28;
    nota: number = 5;

    constructor(nombre:String,edad:number,nota:number) {
        Alumno.contador++
        this.nombre = nombre
        this.edad = edad
        this.nota = nota   
    }

    mostrarInfo(): String {
        return "El alumno de nombre "+ this.nombre + " con edad "+this.edad+
            " tiene el ID "+this.id+ " y su nota es "+this.nota
    }

    estaAprobado(): Boolean {
       var aprobado = false
        if (this.nota>=5) {
            aprobado=true
        }

        return aprobado
    }




}

