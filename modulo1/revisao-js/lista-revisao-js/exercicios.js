// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a,b) {
        if (a>b) return 1;
        if (a<b) return -1;
        return 0;
    })
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = array.filter((array) =>{
        return array%2 === 0
    })
    return numerosPares;
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = array.filter((array) =>{
        return array%2 === 0
    })
    let elavandoAoQuadrado = numerosPares.map((numeroPar) =>{
        return numeroPar**2
    })
    return elavandoAoQuadrado;
}     

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let numeroMaior = array[0];
   for(let i = 0; i < array.length; i++) {
       if(array[i] > numeroMaior ) {
           numeroMaior = array[i];
       }
   }
   return numeroMaior;
 
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else {
        maiorNumero = num2;
        menorNumero = num1
    }
    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    diferenca = maiorNumero - menorNumero

    const retornandoObjeto ={
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca:diferenca
    }
    return retornandoObjeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let arrayPares = [];

    for(let i = 0; arrayPares.length < n; i++) { console.log(i, arrayPares.length)
        if(i % 2===0 ) {
            arrayPares.push(i);
        }
    }
    return arrayPares
 
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tresLadosIguais = "Equilátero"
    let  doisLadosIguais = "Isósceles"
    let tresLadosDiferentes = "Escaleno"

    if( ladoA === ladoB && ladoC ===ladoA && ladoB === ladoC){
        return tresLadosIguais

    }else if ( ladoA === ladoB || ladoC ===ladoA || ladoB === ladoC) {
        return doisLadosIguais

    }else if (ladoA !== ladoB && ladoC !==ladoA && ladoB !== ladoC){
        return tresLadosDiferentes
    }
    return 'erro'
    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    const ordenaNumeros = array.sort(function( a,b){
        if (a >b ) return 1;
        if (a < b) return -1;
        return 0;
    })
    return [ordenaNumeros[ordenaNumeros.length-2], ordenaNumeros[1]]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const copiaPessoa ={
        ... pessoa,
        nome:'ANÔNIMO'
    }
    return copiaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    const alturaPermitida = 1.5;
    const idadeMininaPermitida = 14;
    const idadeMaximaPermitida = 60;

    const pessoasAutorizadas = pessoas.filter ((pessoa) =>{
        if ( pessoa.altura > alturaPermitida && pessoa.idade >idadeMininaPermitida && pessoa.idade < idadeMaximaPermitida) {
            return true
        }
        return false
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const alturaPermitida = 1.5;
    const idadeMininaPermitida = 14;
    const idadeMaximaPermitida = 60;

    const pessoasNaoAutorizadas = pessoas.filter ((pessoa) =>{
        if ( pessoa.altura > alturaPermitida && pessoa.idade >idadeMininaPermitida && pessoa.idade < idadeMaximaPermitida) {
            return false
        }
        return true
        
    })
    return pessoasNaoAutorizadas
 
}

// EXERCÍCIO 14
function somaItensArray (array){
    let somaDosItens = 0 
    for (let i=0; i<array.length; i++){
        somaDosItens += array[i];
    }

    return somaDosItens
}

function retornaContasComSaldoAtualizado(contas) {

    let novoSaldoTatal = 0
    let soma = 0

    for (let i=0; i<contas.length; i++){ 
        soma = somaItensArray (contas[i].compras)
        novoSaldoTatal = contas[i].saldoTotal - soma

        contas[i].saldoTotal = novoSaldoTatal
        contas[i].compras = []
    }
    return contas


}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
      return consultas.sort(function (a,b) {
        if (a.nome >b.nome) return 1;
        if (a.nome <b.nome) return -1;
        return 0;
    })
  
}

// EXERCÍCIO 15B
// função auxilar para converter data no formato strgin para formato data 
function converterData (data) {
    let dia = parseInt(data.split("/")[0]);
    let mes = parseInt(data.split("/")[1]);
    let ano = parseInt(data.split("/")[2]);

    return new Date ( ano, mes-1, dia)
}
function retornaArrayOrdenadoPorData(consultas) {

    return consultas.sort(function (a,b) {
        return (converterData(a.dataDaConsulta) - converterData(b.dataDaConsulta))
      
    })
   
}

