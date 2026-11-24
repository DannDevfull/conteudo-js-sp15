// Compreedendo DOM


//Alterando Elemento
const elemento1 = document.querySelector("#ex1");
elemento1.innerHTML = "Estude, pratique e seja consistente do jeito certo. Os resultados virão";

console.log("");


// Alterando o atributo de elemento
const elemento2 = document.querySelector("#ex2");

elemento2.src = "img/l-apagada.gif";

console.log("");


// Adicionando Conteúdo Dinâmico com JavaScript

const elemento3 = document.querySelector("#ex3");
elemento3.innerHTML = `Hoje é: ${Date()}`;