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
const cartasDoUsuario = [];
const cartasDaMaquina = [];
const pontuacaoMaxima = 21;

function confirmacao () {
   
   if(confirm ("Bem-vinde ao jogo de Blackjack\nQuer iniciar uma nova rodada?") ) {
   iniciarJogo();
   
   } else {
      console.log("O jogo acabou")
   }

}
confirmacao()

function sortearCarta (){

   const carta = comprarCarta(); 
   return carta;
   
}

function resultadoDoJogo(pontosUsuario, pontosMaquina ){

   if(pontosUsuario === pontosMaquina ) {
      return "Empate!";

   } else if (pontosUsuario > pontosMaquina ) {
      return "O usuário ganhou!";

   } else if (pontosUsuario < pontosMaquina ) {
      return "O computador ganhou!";

   }else {
      return "Digite um valor válido ";
   }

}

function retornaTextosDasCartas (cartas) {

   let textoDasCartas = ""
   for ( let i = 0; i<cartas.length; i++){
      textoDasCartas = textoDasCartas + cartas[i].texto
   }
   return textoDasCartas;
}

function retornaPontuacaoDasCartas (cartas) {

   let pontuacaoDasCartas = 0
   for ( let i = 0; i<cartas.length; i++){
      pontuacaoDasCartas = pontuacaoDasCartas +cartas[i].valor
   }
   return pontuacaoDasCartas;
}

function iniciarJogo () {

   cartasDoUsuario.push(sortearCarta());
   cartasDoUsuario.push(sortearCarta());

   cartasDaMaquina.push(sortearCarta());
   cartasDaMaquina.push(sortearCarta());

   let pontuacaoDoUsuario = retornaPontuacaoDasCartas (cartasDoUsuario);
   let textoDaCartaDoUsuario = retornaTextosDasCartas(cartasDoUsuario);

   let pontuacaoDaMaquina = retornaPontuacaoDasCartas(cartasDaMaquina);
   let textoDaCartaDaMaquina = retornaTextosDasCartas(cartasDaMaquina);

  let resultadoDoConfirme = confirm (`Usuário - cartas: ${textoDaCartaDoUsuario}  - pontuação ${pontuacaoDoUsuario} 
Computador - cartas: ${cartasDaMaquina[0].texto} \n Deseja comprar mais carta ?`)

   if(resultadoDoConfirme === true) {
      while (pontuacaoDoUsuario < pontuacaoMaxima && pontuacaoDaMaquina < pontuacaoMaxima) {
         cartasDoUsuario.push(sortearCarta());
         cartasDaMaquina.push(sortearCarta());
         pontuacaoDoUsuario = retornaPontuacaoDasCartas (cartasDoUsuario);
         pontuacaoDaMaquina = retornaPontuacaoDasCartas(cartasDaMaquina);
         if (pontuacaoDoUsuario <pontuacaoMaxima && pontuacaoDaMaquina < pontuacaoMaxima){
            resultadoDoConfirme = confirm (`Usuário - cartas: ${retornaTextosDasCartas(cartasDoUsuario)}  - pontuação ${pontuacaoDoUsuario} 
Computador - cartas: ${cartasDaMaquina[0].texto} \n Deseja comprar mais carta ?`)

            if (resultadoDoConfirme === false){
               break;
            }

         } else {
            alert(`Usuario - Cartas: ${retornaTextosDasCartas(cartasDoUsuario)} - Pontuação ${retornaPontuacaoDasCartas(cartasDoUsuario)} \nComputador - Cartas: ${retornaTextosDasCartas(cartasDaMaquina)} - Pontuação ${retornaPontuacaoDasCartas(cartasDaMaquina)}\n ${ resultadoDoJogo (retornaPontuacaoDasCartas(cartasDoUsuario),retornaPontuacaoDasCartas(cartasDaMaquina))}`)
         }
      }
   } else {
      console.log("O jogo acabou")
   }
}






