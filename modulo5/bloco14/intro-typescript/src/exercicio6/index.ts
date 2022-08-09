// Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

// a) A soma desses números
// b) A subtração desses números
// c) A multiplicação desses números
// d) Qual deles é o maior

function operacaoMath( number1: number,number2: number): void {
    const soma = (number1 + number2)
    console.log(`A soma de ${number1} e ${number2} é ${soma}`)
    const sub = (number1 - number2)
    console.log(`A subtração de ${number1} e ${number2} é ${sub}`)
    const mult = (number1 * number2)
    console.log(`A multiplicação de ${number1} e ${number2} é ${mult}`)
    if ( number1 > number2){

    } else {
    
    }
    
}

console.log(operacaoMath( 10, 5))