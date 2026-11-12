// Funções

// Arrow Functions

// function multiplicar (a, b){
//     return a * b;
// }


// const multiplicar = function (a, b){
//     return a * b;
// };


const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 5));

console.log(" ");




// Arrow Function com apenas um parâmetro
const numeroAoQuadradro = (a) => a * a;

console.log(numeroAoQuadradro(10));



console.log(" ");



// Arrow function em Método de objeto

// Os objetos são compostos por propriedades e métodos
// As propriedades são compostas por chave, característica e valor
// método são as funções que executam uma ação. Seus nomes são normalmente verbos, pois realiza uma ação
// o "this" faz referencia oa propriao objeto

const pessoa = {
    nome: "Danilo",
    idade: 19,
    cumprimentar: function() {
        return "Olá,eu sou o " + this.nome + " E tenho " + this.idade + " Anos de idade.";
    }, 
};

// console.log(pessoa)
console.log(pessoa.cumprimentar());
