// Exercícios de interpretação de código
/*
1 - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // boolean


2 - Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?
 

let primeiroNumero = (prompt("Digite um numero!"))
let segundoNumero =  (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) // será impresso a concatenação de 2 + 2 que é 22 


3 - Para o exercício anterior, sugira ao seu colega uma solução 
para que o valor impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero =  Number(prompt("Digite um numero!"))
let segundoNumero =  Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) Para o resultado dar a soma de 2 números será nescessario fazer 
conversão de string para number.

*/
// Exercícios de escrita de código
// 1 - Faça um programa que:

let idadeDoUsuario = Number (prompt("Qual sua idade ?"))
let idadeDoAmigo = Number (prompt("Qual a idade do seu amigo (a) ?"))

let maiorUoMenor = idadeDoUsuario > idadeDoAmigo

console.log ("Sua idade é maior do que a do seu melhor amigo? " , maiorUoMenor)

let diferencaDeIdade = idadeDoUsuario - idadeDoAmigo

console.log("A diferença de idade é", diferencaDeIdade);

// 2 - Faça um programa que:

let numeroPar = Number (prompt ("Digite um número par "));

let restoDaDivisao = numeroPar % 2

console.log (" O resto da divisão é : ", restoDaDivisao); 

// c - quando o número é par o resto da divisão sempre vai dar 0 (multiplo)
// d - quando o número é impar o resto da divisão sempre vai da 1 (multiplo)

// 3 - Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console

let idadeDoUsuario = Number (prompt("Digite sua idade em  anos"));

let idadeEmMeses = idadeDoUsuario * 12;
console.log ("A sua idade em meses é :", idadeEmMeses);

let idadeDoEmDias =  idadeDoUsuario * 365;
console.log ("A sua idade em dia é : ", idadeDoEmDias);

let idadeEmHoras =  idadeDoEmDias * 24;
console.log("Sua idade em horas é: ", idadeEmHoras);


// 4 - Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false

let numero_1 = Number(prompt("Digite um número:"));
let number_2 = Number(prompt("Digite um segundo número: "));

let maior = numero_1 > number_2;
let igual = numero_1 === number_2;
let divisivel = numero_1 % number_2  === 0 ;
let divisivel_2 = number_2 % numero_1 === 0;

console.log ("O primeiro numero é maior que segundo?", maior);
console.log ("O primeiro numero é igual ao segundo?", igual );
console.log ("O primeiro numero é divisível pelo segundo?", divisivel);
console.log ("O segundo numero é divisível pelo primeiro?", divisivel_2);


// Desafio
// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

let unidadeEmF = 77;
let formula = (unidadeEmF - 32)*(5/9) + 273.15;

console.log("A unidade em k é :", formula);

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

let unidadeEmC = 80;
let fomula_1  = (unidadeEmC)*(9/5) + 32;

console.log (" A unidade em °F é :" , fomula_1);

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

let unidadeDeC = 30;
let fomula_2  = (unidadeDeC)*(9/5) + 32;
let fomulaC  = unidadeDeC + 273.15

console.log (" A unidade em °F é :" , fomula_2);
console.log (" A unidade em k é ", fomulaC);

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

let unidadeDoUsuario = Number (prompt( "Digite um unidade Graus Celsius"))
let formula_3  = (unidadeDoUsuario)*(9/5) + 32;
let formula_4  = unidadeDoUsuario + 273.15

console.log (" A unidade em °F é :" , formula_3);
console.log (" A unidade em k é ", formlua_4);


// 2 - Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

let unidadeDoConsumidor = Number (prompt("Digite a quantidade de quilowatts consumida"))
let quilowattHora = 280;
let valorDoQuilowat = 0.05;
let valorPagarHora = quilowattHora * valorDoQuilowat;
let valorPagoConsumido = unidadeDoConsumidor * valorPagarHora

console.log ("O valor a ser pago é :", valorPagoConsumido);