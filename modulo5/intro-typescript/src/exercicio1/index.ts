// A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorna se ele é equilátero, isósceles ou escaleno. Refatore a função para o Typescript.

// Código em JavaScript: 
// function checaTriangulo(a, b, c) {
//   if (a !== b && b !== c) {
//     return "Escaleno";
//   } else if (a === b && b === c) {
//     return "Equilátero";
//   } else {
//     return "Isósceles";
//   }
// }

const ladoA: number = 5;
const ladoB: number = 7;
const ladoC: number = 8;

function checaTriangulo(a: Number, b: Number, c: Number): string {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}
console.log(checaTriangulo(ladoA, ladoB, ladoC));
