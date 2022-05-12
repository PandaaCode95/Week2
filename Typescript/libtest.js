"use strict";
exports.__esModule = true;
var Library_1 = require("./Library");
var books_1 = require("./books");
var libro = new books_1.Book("El señor de los sarcillos", "Fereico Rey");
var libro2 = new books_1.Book("Papas aliñas", "Julieta Ven");
var libreria = new Library_1.Library([libro, libro2], "Alli donde el sol cae", "Juanito no lee");
// console.log(libreria)
console.log(libreria.tostringLib());
console.log(libreria.getByAuthor("Fereico Rey"));
