"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, adress, manager) {
        this.arrayB = books;
        this.adress = adress;
        this.manager = manager;
    }
    Library.prototype.tostringLib = function () {
        var res = "";
        var resultado = "";
        for (var i = 0; i < this.arrayB.length; i++) {
            resultado += "Book" + (i + 1) + "\n" + this.arrayB[i].toString1() + "\n";
        }
        return resultado;
    };
    Library.prototype.getNumber = function () {
        return this.arrayB.length;
    };
    Library.prototype.getByAuthor = function (author) {
        var res = [];
        res = this.arrayB.filter(function (book) { return author == book.getAuthor(); });
        return res;
    };
    return Library;
}());
exports.Library = Library;
