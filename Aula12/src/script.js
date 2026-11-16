// Objetos


const pessoa = {
    nome: "Danilo",
    ultimoNome: "Jaquer",
    idade: 19,
    soma: function () {
        return 1 + 1;
    }
};



// Acessando Propriedades


console.log(pessoa.soma());

let notacaoEmPonto = pessoa.nome;
console.log(notacaoEmPonto);

let acessoColchetes = pessoa["ultimoNome"];
console.log(acessoColchetes);
// Os colchetes também servem para acessar variáveis com valores, e por meio destes, acessar propriedades do objeto.
// Também é valido usar os colchetes quando o nome da propriedade não é válido, como: ultimo-nome


console.log(" ");


// Atualizando, Criando e Deletando Propriedades do Objeto

// Podemos colocar outros valores em nossas propriedades do objeto
// podemos deletar o objeto, que deleta o valor e a propriedade. Isso ocasiona em um retorno indefinido
pessoa.nome = "João";
console.log(pessoa.nome);


pessoa.anoNacismento = 2007;
console.log(pessoa.anoNacismento);

pessoa.nacionalidade = "Brasileira";
console.log(pessoa.nacionalidade);

console.log(pessoa); // Vefificando as atualizações dentro do objeto


delete pessoa.ultimoNome;
console.log(pessoa.ultimoNome) //Retornará Indefinido

console.log(" ");


// Verificando existência de Propriedades em Objetos
let resultado = ("Altura" in pessoa);
console.log(resultado);

console.log(" ");

// Objetos Aninhados

const pessoa2 = {
    nome: "Danilo",
    idade: 19,
    meuCarro: {
        marca: "Porshe",
        modelo: "718 GT4",
        ano: 2022,
    },
}

console.log(pessoa2);
console.log(pessoa2.meuCarro);

// console.log(typeof pessoa2.meuCarro);

console.log(" ");




// Métodos em Objetos

const carro = {
    marca: "Nissan",
    modelo: "GT-R",
    ano: 2024,
    acelerar: function () {
        return `O ${this.marca} ${this.modelo} acelerou.`;
    }
};

console.log(carro.acelerar());

console.log(" ");

// Adicionando Métodos em um Objeto

carro.estacionar = function () {
    return ` O ${this.marca} ${this.modelo} estacionou.`;
}

console.log(carro.estacionar());

// i3 ou i5 de processador ,mais de 8Gb Ram ( melhor ´16), 512Gb de SSD, SO é preferência
