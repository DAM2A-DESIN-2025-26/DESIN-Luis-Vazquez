import { IAlumno } from "./IAlumno";
export declare class Alumno implements IAlumno {
    static contador: number;
    readonly id: number;
    nombre: String;
    edad: number;
    nota: number;
    constructor(nombre: String, edad: number, nota: number);
    mostrarInfo(): String;
    estaAprobado(): Boolean;
}
//# sourceMappingURL=Alumno.d.ts.map