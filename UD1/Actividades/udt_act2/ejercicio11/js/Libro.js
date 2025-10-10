export class Libro {
    nombre;
    color;
    autor;
    nPaginas;
    editorial;
    forrado;
    coverURL;

    constructor(nombre, color, autor, nPaginas, editorial, forrado, coverURL) {
        this.nombre = nombre;
        this.color = color;
        this.autor = autor;
        this.nPaginas = nPaginas;
        this.editorial = editorial;
        this.forrado = forrado;
        this.coverURL = coverURL;

    }
    get nombre() {
        return this.nombre;
    }
    set propertyName(value) {
        this.nombre = value;
    }
    get color() {
        return this.color;
    }
    set propertyName(value) {
        this.color = value;
    }
    get autor() {
        return this.autor;
    }
    set autor(value) {
        this.autor = value;
    }
    get nPaginas() {
        return this.nPaginas;
    }
    set nPaginas(value) {
        this.nPaginas = value;
    }
    get editorial() {
        return this.editorial;
    }
    set editorial(value) {
        this.editorial = value;
    }
    get forrado() {
        return this.forrado;
    }
    set forrado(value) {
        this.forrado = value;
    }
    get coverURL() {
        return this.coverURL;
    }
    set coverURL(value) {
        this.coverURL = value;
    }

    comprar() {
        console.log("Libro de aventuras del autor " + this.autor + " comprado.")
    }

}