
// Exercícios de interpretação de código
// 1 -  Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//     console.log(item, index, array)
//  })
 
//  a) O que vai ser impresso no console?
// Amanda Rangel apelido Mandi
// Laís Petra apelido Laura
// Letícia Chijo apelido Chijo

// 2- Leia o código abaixo

//  const usuarios = [
//      { nome: "Amanda Rangel", apelido: "Mandi" },
//      { nome: "Laís Petra", apelido: "Laura" },
//      { nome: "Letícia Chijo", apelido: "Chijo" },
//    ]
  
//    const novoArrayB = usuarios.map((item, index, array) => {
//       return item.nome
//    })
  
//    console.log(novoArrayB)
// Amanda Rangel
// Laís Petra
// Leticia Chijo
//   a) O que vai ser impresso no console?

// 3 - Leia o código abaixo

//  const usuarios = [
//      { nome: "Amanda Rangel", apelido: "Mandi" },
//      { nome: "Laís Petra", apelido: "Laura" },
//      { nome: "Letícia Chijo", apelido: "Chijo" },
//    ]
  
//    const novoArrayC = usuarios.filter((item, index, array) => {
//       return item.apelido !== "Chijo"
//    })
  
//    console.log(novoArrayC)

//    Amanda Rangel apelido Mandi
//    Laís Petra Lauro

//   a) O que vai ser impresso no console?


// Exercícios de escrita de código

// 1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos
const nomeDosDoguinhos = pets.map ((pet) => {
    return pet.nome
})
console.log(nomeDosDoguinhos);


//  b) Crie um novo array apenas com os cachorros salsicha
const cachorrosSalsicha = pets.filter((pet)=> {
    return pet.raca === 'Salsicha'
})
console.log(cachorrosSalsicha);


//  c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!" 
const clientesPoodles = pets.filter((pet) => {
    return pet.raca === 'Poodle'
})
console.log(clientesPoodles);

const descontoCliente = clientesPoodles.map((clientesPoodle) =>{
    return clientesPoodle.nome
})
for (let i=0; i <descontoCliente.length; i++ )
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${descontoCliente[i]}`)

// 2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item.
const nomeDoItem = produtos.map ((produto) => {
    return produto.nome
})
console.log(nomeDoItem);

//  b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles.

function descontoProduto (produto){
    const contaDoDesconto = (produto.preco * (5/100))
    const resultado = produto.preco - contaDoDesconto 
    produto.preco = parseFloat(resultado.toFixed(2))
    return produto
}
const aplicandoDesconto = produtos.map((produto)=>{
    return descontoProduto(produto)
})
console.log(aplicandoDesconto)


//  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas.
 const bebidas =produtos.filter ((produto) => {
     return produto.categoria === 'Bebidas'
 })
 console.log(bebidas);

//  d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê".
 const objtosYpe = produtos.filter ((produto) => {
     return produto.nome.includes("Ypê")
 })
 console.log(objtosYpe)
 

//  e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê".
const fraseYpe = objtosYpe.map(objtoYpe =>{
    return `Compre ${objtoYpe.nome} por ${objtoYpe.preco}`

})

console.log(fraseYpe)

// encadeado

const fraseYpeEncadeada = produtos.filter ((produto) => {
    return produto.nome.includes("Ypê")
}).map(objtoYpe =>{
    return `Compre ${objtoYpe.nome} por ${objtoYpe.preco}`

})
console.log(fraseYpeEncadeada)
