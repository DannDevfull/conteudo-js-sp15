// Eventos

// Eventos de Click com addEventLitener()
const meuParagrafo = document.querySelector("#ex1-p");
const meuBtn = document.querySelector("#ex1-btn");

meuBtn.addEventListener("click", () => {
    meuParagrafo.classList.toggle("estilo");
    // ClassList serve para listar as classes do elemento Em meuParagrafo
    // Posso adicionar, remover ou as duas coisas com o toggle.
    // perceba que, com o toggle, estou adicionando o estilo ao meu HTML.

});




// Eventos Mouseover e Mouseout com o addEventListener()

const meuParagrafo2 = document.querySelector("#ex2-p");
meuParagrafo2.addEventListener("mouseover", () => {
    meuParagrafo2.innerHTML = "O mouse está sobre o parágrafo";
});


meuParagrafo2.addEventListener("mouseout", () =>{
    meuParagrafo2.innerHTML = "O mouse está forá do parágrafo";
});





// Mostrando posição do mouse com o evento

const paragrafoX = document.querySelector("#ex3-p1");
const paragrafoY = document.querySelector("#ex3-p2");

document.addEventListener("mousemove", (event) =>{
    paragrafoX.innerHTML = `X: ${event.clientX}`;
});

document.addEventListener("mousemove", (event) =>{
    paragrafoY.innerHTML = `Y: ${event.clientY}`;
});




