// Arrays

// Primeiro Arrays

const frutas = ["Banana", "Morango", "Manga", "Abacate"];

console.log(frutas);

console.log("");




// Array com itens adicionados posteriormente

const carros = [];
// console.log(carros);

carros[0] = "Gol";
carros[1] = "Celta";
carros[2] = "Uno";

console.log(carros);




// Criando Array com Construtor

const motos = new Array("Cb-500", "MT-07", "Panigale");
console.log(motos);

console.log("");




// Acessando Elementos de Arrays

const frutas2 = ["Melão", "Uva", "Maça"];

let fruta1 = frutas2[0];
let fruta2 = frutas2[1];
let fruta3 = frutas2[2];

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

console.log("");

// Alterando Elemento do Array

const comidas = ["Pizza", "Sanduíche", "Lasanha"];
console.log(comidas);

comidas[0] = "bife";

console.log(comidas);

console.log("");


// Convertendo Array para string

const frutas3 = ["Carambola", " Manga", " Amora"];

let frutas3ToString = frutas3.toString();
console.log(frutas3ToString);

console.log("");


// Utilizando a propriedade Length;
let comprimentoFrutas3 = frutas3.length;
console.log(comprimentoFrutas3);

console.log("");


// Acessando o Último Item do Array

const carros2 = ["McLaren", "Porsche", "Audi", "Toyota", "Nissan", "Bentley"];
let comprimentoCarros2 = carros2.length;
console.log(comprimentoCarros2);

let ultimosItemCarros2 = comprimentoCarros2 - 1;
console.log(carros2[ultimosItemCarros2]);


console.log("");




// Utilizando laço de repetição para percorrer o Array

const alunos = ["Madu", "Giovanna", "Paulo", "Menezes", "laura"];
let comprimentoAlunos = alunos.length;

console.log(alunos);
console.log(comprimentoAlunos);

for (let acumuladora = 0; acumuladora < comprimentoAlunos; acumuladora++){
    console.log(alunos[acumuladora]);
}

console.log("");

// Percorrendo o Array com Método ForEach

// Utilizando o Arrow function
alunos.forEach( (alunos) => {
    console.log(alunos);
});



// utilizando a Function tradicional
// alunos.forEach( function(alunos){
//     console.log(alunos);
// })

console.log("");


// Adicionando Elementos no Array com o Método Push
alunos.push("Cristiano", "Pedro", "Samuel");
console.log(alunos);

// alunos.forEach( (alunos) => {
//     console.log(alunos);
// })


console.log("");


// Adicionando elementos no Array com a Propriedade Length
alunos[alunos.length] = "Danilo";
console.log(alunos);


console.log("");

