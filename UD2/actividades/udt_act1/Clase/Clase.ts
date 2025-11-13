import { Alumno } from "../Alumno/Alumno";

export class Clase {
    alumnos:Array<Alumno> = []

    constructor(alumnos:Array<Alumno>) {
        this.alumnos = alumnos
    }

    addAlumno(alumno:Alumno){
        this.alumnos.push(alumno)
    } 
    
    mostrarTodos(){
        this.alumnos.forEach(alumno => {
            console.log(alumno.mostrarInfo())
        });
    } 

    aprobados(){
        this.alumnos.forEach(alumno => {
            var aprobado:Boolean = alumno.estaAprobado()
            if (aprobado) {
                console.log("Aprobado:" +alumno.mostrarInfo())
            }
        });
    } 

    buscarPorNombre(nombre:String){
        this.alumnos.forEach(alumno => {
            if (alumno.nombre == nombre) {
                console.log(alumno.mostrarInfo())
            }
        });
    }

    static totalAlumnos(){
        
       console.log(Alumno.contador)
    }
}