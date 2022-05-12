"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, m) {
        this.vector = crearVector(n, m);
        function crearVector(n, m) {
            var nVector = [];
            for (var i = 0; i < n; i++) {
                nVector[i] = Math.round(Math.random() * m);
            }
            return nVector;
        }
    }
    Vector.prototype.print = function () {
        console.log(this.vector);
    };
    Vector.prototype.add = function (v1) {
        for (var i = 0; i < this.vector.length; i++) {
            this.vector[i] = this.vector[i] + v1.vector[i];
        }
        return this;
    };
    Vector.prototype.subs = function (v1) {
        for (var i = 0; i < this.vector.length; i++) {
            this.vector[i] = this.vector[i] - v1.vector[i];
        }
        return this;
    };
    Vector.prototype.prod = function (v1) {
        for (var i = 0; i < this.vector.length; i++) {
            this.vector[i] = this.vector[i] * v1.vector[i];
        }
        return this;
    };
    Vector.prototype.mul = function (n) {
        for (var i = 0; i < this.vector.length; i++) {
            this.vector[i] = this.vector[i] * n;
        }
        return this;
    };
    return Vector;
}());
exports.Vector = Vector;
var vect = new Vector(3, 4);
var vect2 = new Vector(3, 4);
vect.subs(vect2);
vect.print();
