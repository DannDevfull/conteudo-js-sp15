// Exercício 1: Soma de valores informados pelo usuário

// Saída
// alert("Soma de valores Informados");

// // Entrada de dados
// let valor1 = parseFloat(prompt("Informe o primeiro valor:"));
// let valor2 = parseFloat(prompt("Informe o segundo valor:"));

// // Processamento
// let resultadoSoma = valor1 + valor2;
// alert(`O resulta do soma dos valores informados é ${resultadoSoma}`);













let services = [
    {
        name: "Services-1",
        status: "active",     
    },
    {
        name: "Services-2",
        status:"inative",
    } 
];
// console.log(services)
for (let count = 0; count < services.length; count++){
    if(services[count] == services[0]){
        console.log(services[0]);
    }else{
        console.log('Alguns objetos de sua lista estão inativos')
    };
};