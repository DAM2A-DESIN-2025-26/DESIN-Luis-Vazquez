import { Alumno } from "../Alumno/Alumno";
export declare class Clase {
    alumnos: Array<Alumno>;
    constructor(alumnos: Array<Alumno>);
    addAlumno(alumno: Alumno): void;
    mostrarTodos(): void;
    aprobados(): void;
    buscarPorNombre(nombre: String): void;
    static totalAlumnos(): void;
}
//# sourceMappingURL=Clase.d.ts.map