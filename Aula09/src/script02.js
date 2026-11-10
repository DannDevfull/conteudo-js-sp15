// Funções

// Os parametros são formas de representar valores informados fora da function e trabalha com ele dentro da function
// Os argumentos ( o proprio valor em seu estado inicial) dão passados para os parametros dentro da function que representam os argumentos e trabalham com eles ( as referências ) dentro da function
// Os parametros representam os argumentos com outro coisa alé do proprio numero do argumento para reutuliza-los. Não posso me limitar a um determinado numero. Não faz sentido definir os parametros com os próprios números se eu vou usar outros depois.


// Funções de multiplicação

function multiplicar (a, b){
    return a * b;
};

console.log(multiplicar(5,5));
console.log(multiplicar(5,7));
console.log(multiplicar(8,6));
console.log(multiplicar(7,9));

console.log(" ");



// Funções de Divisão

function Divisao(a, b){
    return a / b;
};
console.log(parseFloat(Divisao(10,2)));
console.log(parseFloat(Divisao(5,2)));
console.log(parseFloat(Divisao(14,5)));
console.log(parseFloat(Divisao(10,2)));



console.log(" ");



// Função de Subtração

function subtracao (a, b){
    return a - b;
};

console.log(subtracao(5,2));
console.log(subtracao(10,4));
console.log(subtracao(16,7));
console.log(subtracao(2,1));

console.log(" ");



// Funções de Adição

function adicao (a, b){
    return a + b;
};

console.log(adicao(5, 5));
console.log(adicao(7, 24));
console.log(adicao(8, 74));
console.log(adicao(4, 21));


console.log(" ");

// Função com um Parâmetro

function paraCelsius(grausFahrenheit){
    let calculoConversao =(5 / 9) * (grausFahrenheit - 32);
    return `${grausFahrenheit}°C convertidos para Celsius é igual a ${calculoConversao}°C`;
};
console.log(paraCelsius(90));