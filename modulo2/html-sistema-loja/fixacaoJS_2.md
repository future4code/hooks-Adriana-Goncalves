``` js
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  const meiaDuzia = 6;
  const umDuzia = 12;
  const valorMacaMenosMeiaDuzia = 1.30;
  const valorDaMacaMaisMeiaDuzia = 1.00;
  const totalCompraMenosQueMeiaDuzia = quantidade * valorMacaMenosMeiaDuzia;
  const tatalCompraMaiorQueMeiaDuzia = quantidade* valorDaMacaMaisMeiaDuzia;
  
  if(quantidade < meiaDuzia ){
    return totalCompraMenosQueMeiaDuzia
    
  } else if(quantidade >= umDuzia) {
    return tatalCompraMaiorQueMeiaDuzia
    
}else {
  return valor da compra invalido 
}
}
```