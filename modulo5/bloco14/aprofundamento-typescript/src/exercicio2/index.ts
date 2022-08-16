// Observe a função a seguir, escrita em JavaScript:

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// Entradas são numeros e arry
// Saída são obejetos

function obterEstatisticas(numeros:number[]): {} {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number,}= {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas( [1, 3, 7, 5, 8]))
// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// number[] recebe um oconjunto de todos os números que estejam dentro de um arry
// {} Objects: o conjunto de todos os objetos (que inclui funções e arrays)

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }

const arrayNumeros: number [] = [20, 5, 10, 5, 8, ]

type Estastitica = {
    maior: number,
    menor: number,
    media: number
}

type amostraDeIdades ={
    numeros: number[],
    obterEstatisticas(numeros: number []): Estastitica
    
}