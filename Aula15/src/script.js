// Compreendendo o DOM

// Selecionando Elemento com o getElementById()

const elemento1 = document.getElementById("ex1");
console.log(elemento1);

console.log("");

 
// Selecionando Elementos com o getElementsByClassName()
const elemento2 = document.getElementsByClassName("ex2");
// console.log(elemento2);
// ou
console.log(elemento2[0]);

console.log("")


// Selecionando Elemento com o getElementsByTagName()
const elemento3 = document.getElementsByTagName("p");
// console.log(elemento3);
console.log(elemento3[1]);

console.log("");


// Selecionando Elemento com o querySelector()
const elemento4 = document.querySelector("#ex4");
console.log(elemento4)

console.log("");


// Selecionando Elementos com o querySelectorAll()
const elemento5 = document.querySelectorAll(".qs-ex");
console.log(elemento5);
