/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const mensagemDeBoasVindas = ("Boas vindas ao jogo de Blackjack!");
console.log(mensagemDeBoasVindas);

function confirmacao () {
   
   if(confirm ("Quer iniciar uma nova rodada?") ) {
     
   } else {
      console.log("O jogo acabou")
   }

}
confirmacao()

function sortearCarta (){

   const carta = comprarCarta(); 
   return carta;
   
}

const cartaUsuario1 = sortearCarta();
const cartaUsuario2 = sortearCarta();

console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto}  - pontuação ${cartaUsuario1.valor + cartaUsuario2.valor} `);

const cartaMaquina1 = sortearCarta();
const cartaMaquina2 = sortearCarta();

console.log(`Computador - cartas: ${cartaMaquina1.texto} ${cartaMaquina2.texto}  - pontuação ${cartaMaquina1.valor + cartaMaquina2.valor} `);


function resultadoDoJogo(pontosUsuario, pontosMaquina ){
 
   if(pontosUsuario === pontosMaquina ) {
       console.log("Empate!");
 
   } else if (pontosUsuario > pontosMaquina ) {
       console.log("O usuário ganhou!");
 
   } else if (pontosUsuario < pontosMaquina ) {
       console.log("O computador ganhou!");
 
   }else {
   console.log("Digite um valor válido ")
   }
}
resultadoDoJogo (cartaUsuario1.valor + cartaUsuario2.valor, cartaMaquina1.valor + cartaMaquina2.valor);


