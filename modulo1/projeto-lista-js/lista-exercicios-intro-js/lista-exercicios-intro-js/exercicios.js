// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number (prompt("Digite aqui a altura do retanguolo :"));
  let largura = Number (prompt("Digite aqui a lagura do retangulo : "));

  let areaRetangulo = altura * largura;

  console.log (areaRetangulo);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual = Number (prompt("Digite aqui o ano atual: "));
  let anoDeNascimento =Number (prompt("Digite aqui o seu ano de nascimento"));

  let quantosAnosTemUsuario = anoAtual - anoDeNascimento;

  console.log (quantosAnosTemUsuario);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let calculoIMC = (peso / (altura * altura));

  return calculoIMC;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nomeUsuario = prompt ("Digite seu nome aqui :");
  const idadeUsuario = Number (prompt("Digite sua idade aqui : "));
  const emailUsuario = prompt ("Digite seu email aqui : ");

  const frase =  `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`;

  console.log (frase);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor_1 = prompt("Digite uma cor");
  const cor_2 = prompt ("Digite uma segunda cor");
  const cor_3 = prompt ("Digite uma terceira cor");

  let listaDeCores = [ cor_1, cor_2, cor_3];

  console.log (listaDeCores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  let frase = string.toUpperCase();

  return frase;

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const ingressosVendidos = (custo/valorIngresso);

  return ingressosVendidos;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  const igualdadeString = (string1.length === string2.length);

  return igualdadeString;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
  const primeiroItem = array [0];

  return primeiroItem;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  const ultimoItem = array [array.length-1];
  
  return ultimoItem; 

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let arrayAx = array[0];
  array[0]= array[array.length-1];
  array[array.length-1]= arrayAx;

  return array;


 //array.push(array.splice (0,1)[0]);

 //console.log(array);

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  const stringMinuscula = string1.toLowerCase();
  const stringMiniscula_1 = string2.toLowerCase();

  const igualdadeString = (stringMinuscula ===stringMiniscula_1);
  return igualdadeString;

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}