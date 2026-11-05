// Área Trapézio.
alert("Área do Trapézio");

let baseMaior = parseFloat(prompt("Informe o valor da base maior do trapézio:"));

let baseMenor = parseFloat(prompt("Informe o valor da base menor do trapézio: "));

let altura = parseFloat(prompt("Informe o valor da altura do trapézio: "));

let areaTrapezio = (baseMaior + baseMenor) * altura / 2;

alert("A área do trapézio, com os valores informados, é de: " + areaTrapezio);