// A função recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:
// São bissextos todos os anos múltiplos de 400.
// São bissextos todos os anos múltiplos de 400.
// Não são bissextos todos os demais anos.
// Não são bissextos todos os demais anos.
// Código em JavaScript: 
// function checaAnoBissexto(ano) {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

function checaAnoBissexto(ano: number): boolean {
    // retorna um boolean
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }
 console.log(checaAnoBissexto(2022))