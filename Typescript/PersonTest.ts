import { Person } from "./Person";
import {Contacts} from "./Contact";
let persona = new Person("Alvaro", "Montero","Sanduval 35");
let persona2 = new Person("Manuel", "Piris","Tombola 33")
let persona3 = new Person("Jorge", "HT", "Mordor 28")
let persona4 = new Person("Ana", "Perez","Alli a lo lejos")
console.log(persona)
console.log(persona2)
console.log(persona3)
console.log(persona4)
console.log(persona4.calcularIMC())
console.log(persona3.yearofBirth())
console.log(persona.printAll(persona))
persona2.printName();
console.log(persona3.getAdress());
persona3.setAdress("La calle del infierno")
console.log(persona3.getAdress());

let contacto = new Contacts();
contacto.contact.push(persona2);
contacto.printCalendar();