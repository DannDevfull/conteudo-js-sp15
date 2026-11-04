// Condições Lógicas

// if
const hora = new Date().getHours();

if (hora < 18){
    // alert('Bom dia');
};

let pais = 'Brasil';
let idade = 20;
let mensagem = 'Você não pode dirigir';

// if(pais == 'Brasil'){
//     if(idade >= 18){
//         mensagem = 'Você pode dirigir';
//     }
// };


if ( pais === 'Brasil' && idade  >= 18){
    mensagem = 'Você pode dirigir';
};
console.log(mensagem);

console.log(" ")

// if else
const hora2 = new Date().getHours();
let saudacao;

if (hora2 >= 18){
    saudacao = 'Boa noite';
}else{
    saudacao = 'Bom dia';
}
console.log(saudacao);

console.log(" ");



// else if

const hora3 = new Date().getHours();
let saudacao2;

if (hora3 <= 12){
    saudacao2 = 'Bom dia!';
}else if ( hora3 <= 18){
    saudacao2 = 'Boa tarde!';;
}else {
    saudacao2 = 'Boa noite!';
};

console.log(saudacao2);

console.log(" ");


// if ternário

const dia = new Date().getDate();
// para pegar o dia do mês

let diaMês = (dia === 4) ? 'Hoje é dia 4 de novembro': 'Hoje não é dia 4 de novembro';
let DiaMês = (dia - 1 === 4) ? 'Hoje é dia 4 de novembro': 'Hoje não é dia 4 de novembro';
console.log(diaMês);
console.log(DiaMês);

console.log(" ");




// Switch

let diaSemana;
const diaSemanaHoje = parseInt(prompt("Informe um número para o dia da semana; \n 0 -- Domingo \n 1 -- Segunda \n 2 -- terça-feira \n 3 -- quarta-feira \n 4 -- quinta-feira \n 5 -- sexta-feira \n 6 -- sábado"));

switch(diaSemanaHoje){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Segunda-feira';
        break;
    case 2:
        diaSemana = 'Terça-feira';
        break;
    case 3:
        diaSemana = 'Quarta-Feira';
        break;
    case 4:
        diaSemana = 'Quinta-feira';
        break;
    case 5:
        diaSemana = 'Sexta-feira';
        break;
    case 6:
        diaSemana = 'Sábado';
        break;
    default:
        diaSemana = 'Informe um valor válido';
}
alert('Hoje é ' + diaSemana);

