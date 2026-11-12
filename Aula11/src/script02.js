// Objetos

// Objetos simples no JavaScript

const carro = {
    marca: "Porsche",
    modelo: 911,
    cor: "Vermelho",
    ano: 2022,
};

console.log(carro);
console.log(" ");
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.cor);
console.log(carro.ano);


console.log(" ");



const pessoa = {
    nome: "Danilo" ,
    peso: 72,
    altura: 1.75,
    registro: 99999999922,
    idade: 19,
    emprego: true,
    veiculos: [
        {
            tipo: "moto",
            marca: "Ducati",
            modelo: "Panigale",
            ano: 2020,
        },
        {
            tipo: "carro",
            marca: "Audi",
            modelo: "R8",
            ano: 2020,
        },
    ],

    exibirInformacoes: function(){

        let saidaEmprego;

        if(this.emprego == true){
            saidaEmprego = "Sim";
        }else{
            saidaEmprego = "Não";
        }

        return `
            Meu nome é ${this.nome}
            Minha idade é ${this.idade}
            Minha altura é ${this.altura}
            Eu peso: ${this.peso}kg
            Eu trabalho?: ${saidaEmprego}
            Meu número de registro é ${this.registro}
        `;
    }
};
console.log(pessoa.veiculos[1]);