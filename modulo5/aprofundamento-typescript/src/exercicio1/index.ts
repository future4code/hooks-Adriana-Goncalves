// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// let minhaString: string = "Adriane"
// let minhaString: string = 4

// Ocorre um erro, pois o tipo number não poder ser atribuido ao tipo string.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

// let meuNumero : number = 4
let meuNumero : number | string = "Adriane"

// Podemos usar o Union Types, o union é um dos tipos do TS que nos permite combinar um ou mais tipos de types
// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// nome, que é uma string;
// idade, que é um número;
// corFavorita, que é uma string.

type person = {
    nome: string,
    idade: number,
    corFavorita: string
}
enum CoresArcoIris{
    VERMELHO = "Vermelho",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja"
}

const usuarioA: person = {
    nome: "Adriane",
    idade: 25,
    corFavorita: CoresArcoIris.AZUL
}
const usuarioB: person = {
    nome: "Pedro",
    idade: 50,
    corFavorita: CoresArcoIris.LARANJA
}
const usuarioC: person = {
    nome: "Rosana",
    idade: 19,
    corFavorita: CoresArcoIris.ANIL
}
console.log(usuarioA)
// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.