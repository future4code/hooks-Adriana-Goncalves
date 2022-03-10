// Exercícios de interpretação de código

/*
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 
1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i;
  
}
console.log(valor)

Valor impresso no console será 10
O codigo está somando os valores, com a condição que soma vai até 5.
Inicia no zero e vai até 4
0 0
1 1
2 3
3 6
4 10


2 - Leia o código abaixo:
*/
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}


/*
a) O que vai ser impresso no console?
será impresso numero maior que 18 
19
21
23
25
27
30

b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
Não daria para fazer isso com o for of, para acessar o indice de cada ekemento usasria o for é o [i}]

3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

Sera impresso: 
*
**
***
****

*/

// Exercícios de escrita de código

/*
1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

c) Por fim, imprima o array com os nomes dos bichinhos no console
*/

let bichinhosUsuario = Number(prompt("Quantos bichinhos de estimação você tem ? "));
let listaDeBichinhos = [];

if (bichinhosUsuario === 0){
  console.log("Que pena ! Você pode adotar um pet ");
} else{
  let i = 0
    while (i < bichinhosUsuario ) {
      let nomeDoBicnhoDoUsuario = prompt(" Digite o nome do seu bichinho ");
        i = i+1
        listaDeBichinhos.push(nomeDoBicnhoDoUsuario);
}
console.log(listaDeBichinhos);
}

/*
2 - Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
a) Escreva um programa que imprime cada um dos valores do array original.
b) Escreva um programa que imprime cada um dos valores do array original divididos por 10.
c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array.
d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.
*/

// A
let arrayOriginal = [2, 3, 5, 7, 9, 10, 20];

function imprimerCadaValorDoArray (){
  for (let i= 0; i < arrayOriginal.length; i++ ){
    console.log(arrayOriginal[i]);
  }
}
imprimerCadaValorDoArray()


//B


function dividindoPorDez(){
  for (let i= 0; i < arrayOriginal.length; i++ ){
    console.log(arrayOriginal[i]/10);
  }
}
dividindoPorDez();


// C

let arryNumeroPar =[]

function imprimeindoNumeroPar(){
  for (let i= 0; i < arrayOriginal.length; i++ ){
  
    let ehPar = (arrayOriginal[i] % 2) === 0
    if (ehPar === true) {
      arryNumeroPar.push(arrayOriginal[i])
    }
  }
  console.log(arryNumeroPar);
}
imprimeindoNumeroPar();


// D

let arrayString =[]

function imprimindoStrings(){
  for (let i= 0; i < arrayOriginal.length; i++ ){
    arrayString.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
  }
  console.log(arrayString);
}
imprimindoStrings();


// E


function maiorEMenorNumero(){

  let maiorNumero = 0
  let menorNumero = 10000
  for (let i= 0; i < arrayOriginal.length; i++ ){
    let numeroMaior = arrayOriginal[i]

    if (numeroMaior > maiorNumero){
      maiorNumero = numeroMaior
    }
    if (numeroMaior < menorNumero){
      menorNumero = numeroMaior
    }
  }
  console.log( `O maior número é ${maiorNumero} e o menor numero é ${menorNumero}`)
}
maiorEMenorNumero()
