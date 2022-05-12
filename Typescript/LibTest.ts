import { Library } from "./Library";
import { Book } from "./books";

let libro = new Book("El señor de los sarcillos","Fereico Rey")
let libro2= new Book("Papas aliñas", "Julieta Ven")
let libreria = new Library([libro,libro2], "Alli donde el sol cae","Juanito no lee");


// console.log(libreria)
console.log(libreria.tostringLib())
console.log(libreria.getByAuthor("Fereico Rey"))