// Exercícios de interpretação de código
/* 
1 - Exercícios de interpretação de código

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
Será impresso:
10
50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
Daria erro, pois a função ainda precisa do console.log para imprimir 

2 - Leia o código abaixo


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade
É uma função que pega a frase que o usuario digitou e transforma toda ela em minúscula e retorna true se na false tiver a palavara cenoura e false se não tiver a palavra cenoura.
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.   Eu gosto de cenoura
true
ii.  CENOURA é bom pra vista
true
iii. Cenouras crescem na terra
true
*/

//Exercícios de escrita de código

/* 1 - Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
*/

function fraseSobreMim () {
    let nome = prompt("Digite seu nome: ");
    let idade = Number(prompt("Digite sua idade: "));
    let cidade = prompt("Digite sua cidade: ");
    let profissao = prompt("Digite sua profissão: ");

    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);

}

fraseSobreMim ();
/*
b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
*/

function fraseDoUsuario (nome, idade, cidade, profissao) {
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);

}
fraseDoUsuario( "Luis", 27, "Lisboa", "Desenvolvedor");
/*
2 - Escreva as funções explicadas abaixo:

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
*/

function soma (number1, number2){
    return number1 + number2;

}

const somando = soma (30, 5);
console.log (somando);
/*
b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
*/

function maiorOuIgual (number1, number2) {
    const maiorOuIgual = number1 >= number2;
    console.log (maiorOuIgual);
    return maioOuIgual
}

maiorOuIgual( 8, 6);
/*
c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/
 function parOuNao (number) {
     const parOuNao = (number % 2) === 0;
     console.log(parOuNao)
     return parOuNao

 }

 parOuNao(6)
/*
 d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
 */

 function mensagem (frase){
     console.log(frase.length, frase.toUpperCase());

 }

 mensagem( "Olá, tudo bem ?");
/*
 3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
*/


let numberUser = Number(prompt("Digite um número: "));
let numberUser_2 = Number (prompt("Digite um segundo número: "));


function soma (numero1, numero2 ) {
    const soma = numero1 + numero2 ;
    return soma

}


function subtracao( numero1, number2) {
    const subtracao = numero1 - number2
    return subtracao


}


function multiplicacao(numero1, numero2) {
    const multiplicacao = numero1 * numero2;
    return multiplicacao

}


function divisao(numero1, number2) {
    const divisao = numero1/ number2
    return divisao

}


const resultado = (` Soma: ${soma (numberUser, numberUser_2)} \n Subtração ${subtracao (numberUser, numberUser_2)} \n Multiplicação ${multiplicacao (numberUser, numberUser_2)} \n Divisão ${divisao (numberUser, numberUser_2)}`)

console.log(resultado);

// Desafios 
/*
1 - Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções

a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
*/

const frase = (mensagem) =>{
    console.log(mensagem);

}
frase("Olá, tudo bem ?");

/*
b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
*/

const valores = (number1, number2) =>{
    const soma = number1 + number2
    frase (soma)

}
valores(8, 5)

/*
2 - Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 
*/
function teoremaPitagoras(cateto_1, cateto_2){
    const catetos = (cateto_1 * cateto_1 ) + (cateto_2 * cateto_2 );
    const hipotenusa = Math.sqrt(catetos);
    return hipotenusa;

}

console.log (teoremaPitagoras( 4, 8))

