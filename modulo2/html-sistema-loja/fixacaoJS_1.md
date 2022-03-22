```js
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 const salarioFixo = 2000.00;
 const comissao = 100;
 const porcentagem = 0.05;
 const salarioFinalDoMes = salarioFixo + (comissao*qtdeCarrosVendidos) + (porcentagem*valorTotalVendas)

 return salarioFinalDoMes
}
```

