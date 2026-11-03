// Estruturas Condicionais

// if
let idade = parseInt(prompt('Informe a sua idade:'));
// O usuário vai informa um valor, este será convertido e irá para a variável "idade"
// Ela vai ser validade na condição lógica e colocar um valor dentro da variável "mensagem" a depender da validação
let mensagem;

if( idade >= 18){
    mensagem = "Você é maior de idade";
    alert(mensagem);
}else{
    mensagem = "Você é menor de idade";
    alert(mensagem);
};

