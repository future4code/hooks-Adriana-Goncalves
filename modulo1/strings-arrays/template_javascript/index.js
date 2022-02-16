// Exercícios de interpretação de código

 /*
1 - Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
a - vazio

array = null
console.log('b. ', array)
b- null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
c- 11

let i = 0
console.log('d. ', array[i])
d- 3

array[i+1] = 19
console.log('e. ', array)
e- [3, 19,5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
f- 9

2- Leia o código abaixo com atenção 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
SUBI NUM ÔNIBUS EM MIRROCOS
*/

// Exercícios de escrita de código

// 1- Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

let nomeDoUsuario = prompt("Digite aqui o seu nome:");
let emailDoUsuario = prompt ("Digite seu email aqui:");

const mensagem = `O email ${emailDoUsuario.trim()} foi cadastrado com sucesso.Seja bem-vindo(a), ${nomeDoUsuario} !`;

console.log(mensagem);



//2 - Faça um programa que contenha um array com 5 das suas comidas preferidas,armazenado em uma variável.

const comidasFavorita = [ "abacate", "lasanha", "feijão", "arroz", "lentilha"];
console.log(comidasFavorita);

const mensagem = `Esssa são minhas comidas favoritas \n ${comidasFavorita[0]} \n ${comidasFavorita [1]} \n ${comidasFavorita[2]} \n ${comidasFavorita[3]} \n ${comidasFavorita[4]} `;

console.log(mensagem);

const comidaFavoritaUsuario = prompt("Digite aqui sua comida fovorita aqui:");

comidasFavorita [1]= comidaFavoritaUsuario;

console.log(comidasFavorita);


//3 - Faça um programa, seguindo os passos:

let listaDeTarafas = [];

let tarefasDoUsuario_1   = prompt("Digite aqui 1 tarefas:");
listaDeTarafas.push(tarefasDoUsuario_1);

let tarefasDoUsuario_2   = prompt("Digite aqui 2 tarefas:");
listaDeTarafas.push(tarefasDoUsuario_2);

let tarefasDoUsuario_3   = prompt("Digite aqui 3 tarefas:");
listaDeTarafas.push(tarefasDoUsuario_3);

console.log(listaDeTarafas);

let indice = Number(prompt("digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 " ));

listaDeTarafas.splice(indice,1);

console.log(listaDeTarafas);

// Desafio 

//Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços.

let fraseUsuario = prompt("Digite uma frase aqui: ");

let novaFraseUsuario = fraseUsuario.split(" ");

console.log(novaFraseUsuario);

// Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

let lista = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

let resultado = lista.indexOf("Abacaxi");

console.log(resultado, lista.length);
