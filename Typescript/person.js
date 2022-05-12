"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(nombre, apellido, adress) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = 150 + Math.round(Math.random() * 50);
        this.edad = 16 + Math.round(Math.random() * 50);
        this.peso = 40 + Math.round(Math.random() * 80);
        this.pelo = pelo();
        this.trabajo = trabajo();
        // this.hobbies = hobbies();
        this.adress = adress;
        //Methods
        function pelo() {
            var pelos = ["azul", "rojo", "castaño", "rubio"];
            var pelo = pelos[Math.round(Math.random() * pelos.length)];
            return pelo;
        }
        function trabajo() {
            var trabajos = ["policia", "abogado", "medico", "programador"];
            var trabajo = trabajos[Math.round(Math.random() * trabajos.length)];
            return trabajo;
        }
        // function hobbies() {
        //     let hobbies = new Set();
        //     let options = ["Cantar", "Cocinar", "Bailar", "Gamer", "Peliculas", "Musica", "Guitarra"]
        //     hobbies.size = Math.round(Math.random() * 3)+1;
        //     for (let i = 0; i < hobbies.size; i++) {
        //         let index = Math.round(Math.random() * 7);
        //         hobbies.add(options[index])
        //     }
        //     return hobbies;
        // }
    }
    Person.prototype.printName = function () {
        console.log(this.nombre);
    };
    Person.prototype.setAdress = function (adress) {
        this.adress = adress;
    };
    Person.prototype.getAdress = function () {
        return this.adress;
    };
    Person.prototype.calcularIMC = function () {
        var result = Math.round(this.peso / (this.altura * this.altura) * 10000);
        return result;
    };
    Person.prototype.yearofBirth = function () {
        var result = 2022 - (this.edad);
        return result;
    };
    Person.prototype.printAll = function (persona) {
        var res = "";
        for (var atribute in persona) {
            res = res + atribute + "-" + persona[atribute] + "\n ";
        }
        return res;
    };
    return Person;
}());
exports.Person = Person;
// let edad = edad => 16 +(Math.round(Math.random()*80))
// let peso = peso => 40 + (Math.round(Math.random()*80))
// console.log(persona)
// console.log(persona2)
// console.log(persona3)
// console.log(persona4)
// console.log(persona4.calcularIMC())
// console.log(persona3.yearofBirth())
// console.log(persona.printAll(persona))
