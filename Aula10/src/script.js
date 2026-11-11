// Funções

// Definindo valor padrão para parâmetros de função

function soma (a, b = 6) {
    return a + b;
}

console.log(soma(4, 10));
//  O argumentos colocados na chamada da função tem prioridade sobre o valor padrão colocado nos parâmetros.

console.log(" ");

// Utilizando retorno de função em expressão

function multiplicar (a, b){
    return a * b;
}

let resultadoExpressão = multiplicar(4, 5) * 4;
console.log(resultadoExpressão);

console.log(" ");

// Fuinção retornando uma String

function nomeCompleto(nome, sobrenome){
    return nome + " " + sobrenome;
}

console.log(nomeCompleto("Danilo", "Silva Jaquer"));


console.log(" ");

// Retorno para encerrar execução de função

function subtracao (a, b){
    return "esse retorno encerrou a função";

    return a - b;

}

console.log(subtracao(5, 5));

console.log(" ");

// Retorno em condição lógica

function verificarIdade(idade){
    if (idade < 18){
        return 'Você é menor de idade.';
    }

    return 'Você é maior de idade.';
}

console.log(verificarIdade(16));

console.log(" ");







// Retornando valor no HTML
const elementoH4 = document.querySelector('.ex1');

function exibirMensagem (){
    return 'Você é legal!';
}

elementoH4.innerHTML = exibirMensagem();


console.log(" ");








// Expressão de função

let multiplicar2 = function (a, b){
    return a * b;
};

console.log(multiplicar2(4, 5));

console.log(" ");








// Expressão de função sendo retornada em uma função

// Preste atenção nesse "jogo" de funções

// Essa função servirá para executar outra função
function executarSaudacao (funcao){
    return funcao("Isso é um argumento da função abaixo");
}


let saudacao = function (argumento){
    return argumento;
};


console.log(executarSaudacao(saudacao));