//Exercícios de interpretação de código

// 1 -  Leia o código abaixo

/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])


a) O que vai ser impresso no console?
Matheus Nachtergaele
Virginia Cavendish
Globo 
14h

*/

// 2 - Leia o código abaixo
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")} // troca o A por O na palvara Juba

console.log(cachorro)
console.log(gato)
console.log(tartaruga)


a) O que vai ser impresso no console?
Nome: Juca
Idade: 3
Raça: SRD

Nome: Juba
Idade: 3
Raça: SRD

Nome: Jubo
Idade: 3
Raça: SRD

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Tem a função de fazer uma  cópia inteira de um bjeto para outro e mudar ou adicionar, se
quisermos, apenas uma ou outra propriedade.

*/

// 3 - Leia o código abaixo

/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))


a) O que vai ser impresso no console?

False

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
*/

//Exercícios de escrita de código

// 1 - Resolva os passos a seguir: 

/*
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
*/

const nomeApelido = {
    nome: 'Adriane',
    apelido: ['Adri', 'Drica', 'Dri']

}

function nomes (novoNomeApelido) {
    console.log(`Oi eu sou a ${novoNomeApelido.nome}, mas pode me chamar de: ${novoNomeApelido.apelido [0]}, ${novoNomeApelido.apelido[1]} ou ${novoNomeApelido.apelido[2]}`)

}
nomes(nomeApelido)


/*
b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
*/

const copiaNomeApelido = {
    ... nomeApelido,
    apelido: [ 'Driquinha', 'Ane','A']
}

nomes(copiaNomeApelido)


// 2 - Resolva os passos a seguir: 

/*
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
*/

const primeiraPropriedade ={
    nome: 'Adriane',
    idade: 24,
    profissao: 'Estudante'
}

const segundaPropriedade = {
    nome: 'Luis',
    idade: 27,
    profissao: 'Desenvolvedor'
}

/*
b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`
*/

function infomacoes (propriedade) {
    return [ propriedade.nome, propriedade.nome.length, propriedade.idade, propriedade.profissao, propriedade.profissao.length];
}

function dados (propriedade_1, propriedade_2) {
    let arrayRetornado_1 = infomacoes(propriedade_1)
    let arrayRetornado_2 = infomacoes(propriedade_2)
    const resultado = [...arrayRetornado_1, ...arrayRetornado_2]
    return resultado
}
console.log(dados(primeiraPropriedade, segundaPropriedade))


// Resolva os passos a seguir: 

/*
a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 
d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
*/

let carrinho = [];

const frutas_1 = {
    nome:'Abacate',
    disponibilidade: true
}
const frutas_2 = {
    nome:'Maçã',
    disponibilidade: true
}
const frutas_3 = {
    nome:'Pêra',
    disponibilidade: true
}

function adicionarfrutaSacolao (frutas){
    carrinho.push(frutas)
}

adicionarfrutaSacolao(frutas_1)
adicionarfrutaSacolao(frutas_2)
adicionarfrutaSacolao(frutas_3)
 
console.log(carrinho)


