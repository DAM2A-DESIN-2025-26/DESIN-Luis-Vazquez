import { Libro } from './Libro.js';

const libro1 = new Libro("Harry Potter", "Verde", "JK. Rowling", "340", "Editorial Inventada1", false, "12345");
const libro2 = new Libro("El arte de la guerra", "Blanco", "Sun Tzu", "500", "Editorial Inventada2", true, "123456");
const libro3 = new Libro("Sherlock Holmes", "Negro", "Arthur Conan Doyle", "140", "Editorial Inventada3", false, "1234567");

var biblioteca = [libro2, libro3]

//con la desestructuracion de objetos podemos acceder directamente a una propiedad de un objeto
//o en este caso con la funcion flecha hacer algo con ella (esto es solo la funcion, se le llama en el console.log)
const checkPages = ({ nPaginas }) => nPaginas > 150;

console.log(checkPages(libro1))
console.log(checkPages(libro3))

//funcion flecha que le pasamos el libro y el array biblioteca, luego hacemos un for of para recorrer los elementos de biblioteca
//y devolvemos true si coincide el nombre del libro con algun elemento de la biblioteca
const checkLibro = (libro, biblioteca) => {
    for (const l of biblioteca) {
        if (l.nombre == libro.nombre) {
            return true
        }
        return false
    }
}

console.log(checkLibro(libro1, biblioteca))
console.log(checkLibro(libro2, biblioteca)) 
