// Operador de Comparação

// Operador comparativo de Igualdade
let a = 5;

let comparadorIgualdade = (a == 6);
console.log(comparadorIgualdade);

console.log(" ");

// Operador Comparativo de Igualdade e Tipo
let comaparadorIgualdadedeTipo1 = (a === 5);
let comaparadorIgualdadedeTipo2 = (a === "5");

console.log(comaparadorIgualdadedeTipo1);
console.log(comaparadorIgualdadedeTipo2);

console.log(" ");

// Operador Comparativo de não Igualdade (diferença)

let comparadorDiferenca1 = (a != 8);
let comparadorDiferenca2 = (a != 5);
let comparadorDiferenca3 = (a !== "5");

console.log(comparadorDiferenca1);
console.log(comparadorDiferenca2);
console.log(comparadorDiferenca3);

console.log(" ");

// Operador comparativo de não Igualdade de Diferença e Tipo
let comparadorDiferencaTipo1 = (a !== 8);
let comparadorDiferencaTipo2 = (a !== 5);
let comparadorDiferencaTipo3 = (a !== "5");

console.log(comparadorDiferencaTipo1);
console.log(comparadorDiferencaTipo2);
console.log(comparadorDiferencaTipo3);

console.log(" ")

// Operador Comparativo Maior Que
let maiorQue1 = (a > 5);
let maiorQue2 = (a > 3);
let maiorQue3 = (a > 8);

console.log(maiorQue1);
console.log(maiorQue2);
console.log(maiorQue3);

console.log(" ")

// Operador Comparativo Menor que
let menorQue1 = (a < 5);
let menorQue2 = (a < 3);
let menorQue3 = (a < 8);

console.log(" ");

// Operador Comparatico Maior ou Igual Que
let maiorIgualQue1 = (a >= 5);
let maiorIgualQue2 = (a >= 3);
let maiorIgualQue3 = (a >= 8);

console.log(maiorIgualQue1);
console.log(maiorIgualQue2);
console.log(maiorIgualQue3);

console.log(" ");

// Operador Comparativo Menor ou Igual Que
let menorIgualQue1 = (a <= 5);
let menorIgualQue2 = (a <= 3);
let menorIgualQue3 = (a <= 8);

console.log(menorIgualQue1);
console.log(menorIgualQue2);
console.log(menorIgualQue3);

console.log(" ");

// Utilizando Operador de Comparação em Condição lógica;
let idade = 15;
let mensagem; //undefined

if ( idade < 18){
    mensagem = "Você é muito novo para comprar alcool!";
    console.log(mensagem);
};