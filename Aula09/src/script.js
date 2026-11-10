// Laços de repetição (loops)

// Laço for
for(let acumuladora = 0; acumuladora <= 10; acumuladora++){
    console.log(acumuladora);
};


console.log(" ");

// Laços de repetição com Array
const cars = ["BMW", "Gol", "Porshe", "Opala", "Bugatti"];
let tamanhoArray = (cars.length);

// console.log(cars[tamanhoArray-1]);

for (acumuladora = 0; acumuladora < tamanhoArray; acumuladora++){
    console.log(cars[acumuladora]);
    // Vai exibir as posições do array
};

console.log(" ");









console.log(" ");

// Laço while

let contadora = 0;

while(contadora <= 10){
    console.log(contadora);
    contadora++;
};


console.log(" ");

// Laço Do While

let acumuladora2 = 0;
do{
    console.log(acumuladora2);
    acumuladora2++;
} while(acumuladora2 <= 10);


// Calculadora com o Do While

let condicao;
do{
    alert('Calculadora');
    let numero1 = parseFloat(prompt('Informe o primeiro número do cálculo: '));
    let operador = prompt('Informe a operação do cálculo: ');
    let numero2 = parseFloat(prompt('Informe o segundo numero do cálculo'));

    switch(operador){

        case "+":
            let soma = numero1 + numero2;
            alert(`A soma dos valores ${numero1} e ${numero2} é ${soma}`);
            break;

        case "-":
            let subtracao = numero1 - numero2;
            alert(`A subtração dos valores ${numero1} e ${numero2} é de ${subtracao}`);
            break;
        
        case "*":
            let multiplicacao = numero1 * numero2;
            alert(`A multiplicação entre os valores ${numero1} e ${numero2} é ${multiplicacao}`);
            break;
        
        case "/":
            let divisao = numero1 / numero2;
            alert(`A divisã entre os valores ${numero1} e ${numero2} é de ${divisao}`);
            break;
    }

    condicao = prompt('Você deseja continuar calculando (s/n)?');

}while(condicao == 's');



