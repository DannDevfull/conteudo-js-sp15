// Tipos de dados

// String
let ex1String = "Isso é uma string";
let primeiroNome = "Danilo";
let ultimoNome = "Silva";
let nomeCompleto = primeiroNome + " " + ultimoNome;

console.log(ex1String);
console.log("Primeiro nome: " + primeiroNome);
console.log("Último nome: "+ ultimoNome);
console.log("Nome Completo: " + nomeCompleto);

console.log(" ");

console.log*("--------------------------------------")
// Number

let ex1Number = 24.90;
let ex2Number = 25;

console.log(ex1Number);
console.log(ex2Number);

console.log(" ");

// Booleans
let num1 = 10;
let ex1Boolean = (num1 < 100);
let ex2Boolean = (num1 == 100);
let ex3Boolean = (num1 > 100);
let ex4Boolean = (num1 != 100);

console.log("10 < 100: "+ex1Boolean);
console.log("10 == 100: "+ex2Boolean);
console.log("10 > 100: "+ex3Boolean);
console.log("10 != 100: "+ex4Boolean);
// Valores do tipo Booleano sem ser convertido em Strings
console.log(ex1Boolean);
console.log(ex2Boolean);
console.log(ex3Boolean);
console.log(ex4Boolean);

console.log(" ")

// Undefined
let ex1Undefined;
console.log(ex1Undefined);

console.log(" ")
// valor vazio
let carro = "";
console.log(typeof carro)