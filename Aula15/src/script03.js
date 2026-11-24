// Compreendendo DOM

// Alterando Estilos dos elementos com o JavaScript

// Alterando a cor do elemento
const elemento1 = document.querySelector("#ex1");
elemento1.style.color = "darkred";


// Alterando a visibilidade do elemento
const elemento2 = document.querySelector("#ex2");

function mostrarElemento(){
    elemento2.style.display = "block";
}

function esconderElemento(){
    elemento2.style.display = "none";
}