export interface Libro{
    nombre: string;
    color: string;
    autor: string;
    nPaginas: number;
    editorial: string;
    forrado: boolean,
    coverURL: string,
    comprar():string
}
