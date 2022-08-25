// Exercício 2 - Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const operacao = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])

blue = '\u001b[34m';
green = '\u001b[32m';
yellow = '\u001b[33m';
red = '\u001b[31m';
if(!process.argv[2] || !process.argv[3] || !process.argv[4] ) {
    console.log("Esperava 3 parâmetros só recebi um ou dois.")
} else {
    switch(operacao){
        case "add":
            console.log(`${blue}${num1 + num2}`)
            break;
        case "subt":
            console.log(`${green}${num1 - num2}`)
            break;
        case "mult":
            console.log(`${yellow}${num1 * num2}`)
            break;
        case "div":
            console.log(`${red}${num1 / num2}`)
            break;
    }

}