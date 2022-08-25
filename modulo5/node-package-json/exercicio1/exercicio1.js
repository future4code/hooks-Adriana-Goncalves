// Exercício 1 -
// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// usa o comando ProcessingInstruction.argv[2]

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

const nome = process.argv[2]
const idade = Number(process.argv[3])
blue = '\u001b[34m';

if(!process.argv[2] || !process.argv[3]){
    console.log("Esperava 2 parâmetros só recebi um.")
} else{
    console.log(`${blue} Olá, ${nome}! Você tem ${idade} anos.`)
}

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

const nome1 = process.argv[2]
const idade1 = Number(process.argv[3])
const idadeDaqui7Anos = (idade1 + 7)
red = '\u001b[31m';

if(!process.argv[2] || !process.argv[3]){
    console.log("Esperava 2 parâmetros só recebi um.")
} else{
    console.log(`${red} Olá, ${nome1}! Você tem ${idade1} anos. Em sete anos você terá ${idadeDaqui7Anos}`)
}
