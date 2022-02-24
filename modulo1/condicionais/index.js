// Exercícios de interpretação de código

/*
1 - Leia o código abaixo:


const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza? 
O codigo teste se os numeros é par ou não, pois todos os números pares tem resto zero.

b) Para que tipos de números ele imprime no console "Passou no teste"? 
Numeros par

c) Para que tipos de números a mensagem é "Não passou no teste"? 
Numeros impares 

2 - O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a) Para que serve o código acima?

O Usuario digita uma fruta é o codigo retonar a fruta e o preço 

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
"O preço da fruta maçã é R$ 2.25
, preco
c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

Retornaria o preço da pera com 5

3 - Leia o código abaixo:


const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?

Está pedidno que o úsuario forneça algum dado que seja um número.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

Como 10 é maior que 0, então o número passou no teste 

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

Dá um erro, foi não foi defindo números negativos 
*/

//Exercícios de escrita de código


/*
1 - Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
*/

const idadeUsuario = Number(prompt("Digite sua idade aqui: "));
const idadeMinimaParaDirigir = 18

if (idadeUsuario >= idadeMinimaParaDirigir) {
    console.log ("Você pode dirigir");
} else {
    console.log("Você não pode dirigir.")
}

/*
2 - Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/

const peridoDoAluno = prompt ("Digite qual periodo vc estuda: digite M para matutino, V para Vespertino ou N para Noturno");

const matutino = 'M';
const vespertino ='V';
const noturno = 'N';

if(peridoDoAluno === matutino ) {
    console.log("Bom dia !");

} else if (peridoDoAluno === vespertino ) {
    console.log("Bom tarde!");

} else if (peridoDoAluno === noturno ) {
    console.log("Bom noite!");

}else {
console.log("Digite um valor válido ")
}

/*
//3 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
*/

const peridoDoAluno = prompt ("Digite qual periodo vc estuda: digite M para matutino, V para Vespertino ou N para Noturno");

const matutino = 'M';
const vespertino ='V';
const noturno = 'N';

switch (peridoDoAluno.toUpperCase()) {
    case matutino:
      console.log("Bom dia! ");
      break;
    case vespertino:
      console.log("Boa tarde! ");
      break;
    case noturno:
      console.log("Boa noite! ");
      break;
    default:
      console.log("Periodo invalido");
  }
  
/*
  4 - Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/

  const generoFilme = prompt("Qual gênero de filme que vamos assistir? ");
  const valorDoIngresso = prompt("Qual o valor do ingresso");

  function assistirOuNao (genero, valor) {
    if (
      genero.toUpperCase() === 'FANTASIA' &&
      valor < 15
  ){
    console.log("Bom filme! ")
  } else{
    console.log("Escolha outro filme :( ")
  }
} 
assistirOuNao(generoFilme, valorDoIngresso);
