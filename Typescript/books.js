"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.nPages = Pages();
        this.isbn = isbn();
        this.author = author;
        this.editorial = editorial();
        function Pages() {
            var nPags = Math.round(Math.random() * 500);
            return nPags;
        }
        function isbn() {
            var res = [];
            var final = "ISBN ";
            for (var i = 0; i < 13; i++) {
                res[i] = Math.round(Math.random() * 10);
                if (i < 3) {
                    final = final + res[i];
                }
                else if (i < 4) {
                    final = final + "-" + res[i];
                }
                else if (i < 5) {
                    final = final + res[i];
                }
                else if (i < 6) {
                    final = final + res[i] + "-";
                }
                else if (i < 11) {
                    final = final + res[i];
                }
                else if (i < 12) {
                    final = final + res[i] + "-";
                }
                else {
                    final = final + res[i];
                }
            }
            return final;
        }
        function editorial() {
            var editoriales = ["Anaya", "Santillana", "Blue Book", "Cambridge", "Planeta", "Grefusa", "Howarts", "Leyndell"];
            var editorial = editoriales[Math.round(Math.random() * editoriales.length)];
            return editorial;
        }
    }
    Book.prototype.setTitle = function (nwtitle) {
        this.title = nwtitle;
    };
    Book.prototype.setAuthor = function (nwauthor) {
        this.author = nwauthor;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.toString1 = function () {
        var res = "";
        for (var atribute in this) {
            if (typeof this[atribute] == "string" || typeof this[atribute] == "string") {
                res = res + atribute + "-" + this[atribute] + "\n";
            }
        }
        return res;
    };
    return Book;
}());
exports.Book = Book;
