
``` js
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  const pesoEx = 1
  const pesoP1 = 2
  const pesoP2 = 3
  const notaEx = (ex * pesoEx)
  const notaP1 = (p1 * pesoP1)
  const notaP2 = (p2 * pesoP2)
  const valorDoConjunto = (pesoEx + pesoP1 + pesoP2);
  const mediaNota = (notaEx + notaP1 + notaP2)/valorDoConjunto
  const conceitoA = 'A'
  const conceitoB = 'B'
  const conceitoC = 'C'
  const conceitoD = 'D'
  
   if(mediaNota >= 9 ) {
      return conceitoA;

  } else if (mediaNota <9 && mediaNota >= 7.5 ) {
      return conceitoB;

  } else if ( mediaNota <7.5 && mediaNota >= 6) {
      return conceitoC;

  }else if (mediaNota < 6) {
      return conceitoD;
  
  }else {
    return 'erro'
  }
}
```