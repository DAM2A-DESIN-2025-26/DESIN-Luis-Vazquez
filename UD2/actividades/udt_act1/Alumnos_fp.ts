/*• Crea al menos 4 alumnos (2 Alumno y 2 AlumnoFP).
• Añádelos a la clase.
• Muestra por consola todos los alumnos, los aprobados, una búsqueda por nombre 
y el total.
• Llama también a recomendarEspecialidad() en los alumnos FP.*/
import { Alumno } from "./Alumno/Alumno";
import { AlumnoFP } from "./Alumno/AlumnoFP";
import { Clase } from "./Clase/Clase";

 
const alumnos: Alumno[] = []
const clase = new Clase(alumnos);

var alumno1 = new AlumnoFP("Luis",28,4,"DAM","DESIN")
var alumno2 = new AlumnoFP("Marcos",20,8,"DAM","PSPR")
var alumno3 = new Alumno("Julio",22,4)
var alumno4 = new Alumno("Fernando",30,9)

clase.addAlumno(alumno1)
clase.addAlumno(alumno2)
clase.addAlumno(alumno3)
clase.addAlumno(alumno4)

clase.mostrarTodos()
clase.aprobados()
clase.buscarPorNombre("Luis")
Clase.totalAlumnos()
