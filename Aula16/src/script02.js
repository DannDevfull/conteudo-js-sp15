// Eventos

// Eventos Keydown com o addEventListenner()

const paragrafo1 = document.querySelector("#ex1-p");
const input1 = document.querySelector("#ex1-inpt");

let digitos = "";

input1.addEventListener("keydown", (event) => {

    if(event.key.length === 1){
        digitos += event.key;
    }else if (event.key === "Backspace"){
        digitos = digitos.slice(0, -1);
    }

    paragrafo1.innerHTML = `O usuário clicou em: ${digitos}`;
});
