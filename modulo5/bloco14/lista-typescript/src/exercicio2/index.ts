// Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

const printVariableType = (variable: any): void => {
  if (typeof(variable) === "object") {
    console.log(`é um arry ${Array.isArray(variable)}`);
  } else {
    console.log(typeof variable);
  }
};

 printVariableType("Adriane")
//  printVariableType(["filmes", "livros", "series"])
//  printVariableType([1, 2, 3, 4]);
//  printVariableType({fruta: "Banana"})
//  printVariableType(25)

// Anotações:
// Any é a cláusula de escape do Typescript. Você pode usar any para
// declarar uma seção do seu código para ser dinâmica ou semelhante ao
// JavaScript, ou para contornar as limitações do sistema de tipos.
// E ele literalmente quer dizer qualquer um. Então declarando uma variável como o tipo any podemos atribuir qualquer valor para ela.

// Void

// O tipo void é muito usado junto com funções, serve para dizer que o valor é vazio, não é atribuído nada
