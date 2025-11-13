"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*• Crea al menos 4 alumnos (2 Alumno y 2 AlumnoFP).
• Añádelos a la clase.
• Muestra por consola todos los alumnos, los aprobados, una búsqueda por nombre
y el total.
• Llama también a recomendarEspecialidad() en los alumnos FP.*/
const Alumno_1 = require("./Alumno/Alumno");
const AlumnoFP_1 = require("./Alumno/AlumnoFP");
const Clase_1 = require("./Clase/Clase");
const alumnos = [];
const clase = new Clase_1.Clase(alumnos);
var alumno1 = new AlumnoFP_1.AlumnoFP("Luis", 28, 4, "DAM", "DESIN");
var alumno2 = new AlumnoFP_1.AlumnoFP("Marcos", 20, 8, "DAM", "PSPR");
var alumno3 = new Alumno_1.Alumno("Julio", 22, 4);
var alumno4 = new Alumno_1.Alumno("Fernando", 30, 9);
clase.addAlumno(alumno1);
clase.addAlumno(alumno2);
clase.addAlumno(alumno3);
clase.addAlumno(alumno4);
clase.mostrarTodos();
clase.aprobados();
clase.buscarPorNombre("Luis");
Clase_1.Clase.totalAlumnos();
//# sourceMappingURL=Alumnos_fp.js.map