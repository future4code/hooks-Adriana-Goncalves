/* 
1- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

> Será impresso no console:
 10
 10  5

 2- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

> Será impresso no console:
10  10  10

3- Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os 
nomes não podem começar com números ou caracteres especiais.

> O programa faz um calculo de quanto a pessoa recebe por horas trabalhada. Ele faz isso dividindo o
quanto a pessoa recebe por dia, por o quanto ela trabalha por dia.

> nomes para as variáveis:

horasTrabalhasPorDia
quantoRecebePorDiaTrabalhado

*/

// Exercícios de interpretação de código

//  exercício 1

let nome;
let idade; 

console.log (typeof (nome))
console.log (typeof (idade))

// Apareceu como undefined pois as variaveis não  possuem valor.

nome = prompt ("Digite o seu nome")
idade = prompt ("Digite sua idade")

console.log (typeof (nome))
console.log (typeof (idade))

console.log ("Olá", nome, "você tem " ,idade, " anos!");

// Exercicio 2

const voceGostasDeChocolate = prompt ("Você gosta de chocolate ?")
const voceJogaFutebol = prompt ("Você joga futebol ?")
const voceGostaDeVermelho = prompt ("Você gosta de vermelho ?")

let resposta_1 = voceGostasDeChocolate 
let resposta_2 = voceJogaFutebol
let resposta_3 = voceGostaDeVermelho


console.log ( "Você gosta de chocolate ?", resposta_1)
console.log ("Você joga futebol ?", resposta_2)
console.log ("Você gosta de vermelho ?", resposta_3)


// exercicio 3

let a = 10
let b = 25
let c;

c = b;
b = a;
a = c;

// Depois de trocados, teremos o seguinte resultado:

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10  

// desafio

let numero1 = prompt ("Digite  um número")
let numero2 = prompt ("Digite mais um número")


let somaNumeros 
let multiplicado

somaNumeros = parseInt (numero1) +  parseInt(numero2)
multiplicado = parseInt (numero1) * parseInt(numero2)

console.log ( " A soma dos numeros é ", somaNumeros)
console.log ( "O primeiro número multiplicado pelo segundo número resulta em ", multiplicado)
