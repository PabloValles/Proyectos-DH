let calculadora = require("./calculadora/index");

// Punto 2.
console.log(calculadora("sumar", 50, 50));
console.log(calculadora("restar", 10, 5));

// Punto 3.
console.log(calculadora("multiplicar", 2, 5));

// Punto 4.
console.log(calculadora("multiplicar", 2, 0));

// Punto 5.
console.log(calculadora("dividir", 100, 5));

// Punto 6.
console.log(calculadora("dividir", 2, 0));
