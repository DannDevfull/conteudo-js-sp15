// Métodos de Arrays

const frutas = ["Morango", "Abacate","Maracujá", "Caju","Uva"];
console.log(frutas);

console.log("");


// Método at()
let frutasAt = frutas.at(2);
console.log(frutasAt);



console.log("");

// Método Join()
let frutasJoin = frutas.join(" - ");
console.log(frutasJoin);



console.log("");

// Método Pop()
let frutasPop = frutas.pop();
console.log(frutas);
console.log(frutasPop);


console.log("");


// Método Push()

let frutasPush = frutas.push("Banana");
console.log(frutas);



console.log("");


// Método Shift()
// Ele remove o primeiro elemento do meu Array, deslocando assim o restante dos elementos
let frutasShift = frutas.shift();
console.log(frutas);
console.log(frutasShift)

console.log("");



// Método unShift()
// Esse método faz ao contrário do método acima. Ele coloca elemento em meu Array, mudando a posição dos demais.
let frutasUnShift = frutas.unshift("limão");
console.log(frutas);

console.log("");


// Alternado Elementos de Array
frutas[1] = "Kiwi";
console.log(frutas);


console.log("");


// Método isArray
console.log(Array.isArray(frutas))

console.log("");



// Método Concat()
// Concatenando os Arrays.
// Ele não altera os originais, mas cria uma cópia e concatena elas
const frutas2 = ["Melancia", "Jabuticaba", "Pêssego"];
const frutasConcat = frutas.concat(frutas2);
console.log(frutasConcat);


console.log("");


// Método copyWithin()
console.log(frutas)
const frutasCopyWithin = frutas.copyWithin(2,0);

// console.log(frutasCopyWithin);

console.log("")

// Exemplo de Martriz em Arrays
// Arrays em Array
// Array Bidimensional

// const matriz = [[0, 1, 2], [3, 4, 5]];
const matriz = [
    [0, 1, 2], 
    [3, 4, 5],
];

console.log(matriz);
console.log(matriz[1][0]);

console.log("");


// Método Flat()
// Transforma minha matriz bidimensional em uma unidimensional
const matrizFlat =  matriz.flat();
console.log(matrizFlat);

console.log("");


// Método flatMap()

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

const numerosFlatMap = numeros.flatMap( (numero) => {
   return[numero, numero * 10];
});

console.log(numerosFlatMap);


console.log("")


// método splice()

const cores = ["Azul","Branco","Laranja"];
console.log(cores);

// Lemos assim: a partir da posição 1, sem excluir nada (0), adicionamos dois novos elementos
cores.splice(1, 0, "Bege", "Vermelho");
console.log(cores);

console.log("");



// Método toSpliced()
const meses = ["Janeiro", "Fevereiro", "Março", "Abril"];
console.log(meses);

const mesesAlterado = meses.toSpliced(0, 2);
console.log(mesesAlterado);
console.log(meses);


console.log("");




// Método slice()

const frutas3 = ["Laranja", "Banana", "Maça", "Goiaba"];
console.log(frutas3);

// leia assim: Até a posição 2 serão removidos os itens.
// Tudo o que tem antes da posição selecionado será excluído.
const frutasSlice = frutas3.slice(2);
console.log(frutasSlice);


const numeros2 = [1, 2, 3, 4];

const numeros2Slice = numeros2.slice(1, 3);
console.log(numeros2Slice); 



