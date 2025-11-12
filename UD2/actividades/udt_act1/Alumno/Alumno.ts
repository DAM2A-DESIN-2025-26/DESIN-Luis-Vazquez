import { IAlumno } from "./IAlumno";

export class Alumno implements IAlumno{
    static contador:number = 0;
    readonly id: number = Alumno.contador;
    nombre: String = "Luis";
    edad: number = 28;
    nota: number = 5;

    constructor(nombre:String,edad:number,nota:number) {
        this.nombre = nombre
        this.edad = edad
        this.nota = nota
        Alumno.contador++
    }




}

