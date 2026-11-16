// Objetos

// Construtores de Objetos



// Exemplo para comparar com os construtores de objetos
// veja que para criar om outro objeto, devo criar outra estrutura

// const pessoa = {
//     nome: "Danilo",
//     sobrenome: "Silva Jaquer",
//     idade: 19,
//     altura: 1.71,
// }
// const pessoa2 = {
//     nome: "Danilo",
//     sobrenome: "Silva Jaquer",
//     idade: 19,
//     altura: 1.71,
// }


// Construtores de Objetos
function Pessoa (nome, sobrenome, idade, altura) {
    this.nome = nome;
    this.sobrenome = sobrenome,
    this.idade = idade;
    this.altura = altura;
}

// Agora eu não preciso criar varios objetos como foi criado acima
const minhaPessoa = new Pessoa("Danilo", "Silva Jaquer", 19, 1,71);
const meuIrmao = new Pessoa("Davi", "Silva Jaquer", 19, 1.77);

console.log(minhaPessoa);
console.log(meuIrmao);

// Adicionando propriedades nos diferentes objetos
// Eles não serão contado no Construtor, mas no objetos criados a partir dele.
minhaPessoa.carro = "Porsche";
meuIrmao.moto = "Ducati";

console.log(Pessoa);

