type Cliente = {
    cliente: string;
    saldoTotal: number;
    debitos: number[];
  };
  
  const listaDeClientes : Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const retonarClienteNegativo = (listaNegativa: Cliente[]): Cliente[] =>{
    listaNegativa.forEach((usuario) => {
        // O forEach()método chama uma função para cada elemento em uma matriz.
        const somaTotal = usuario.debitos.reduce((a,b) => a +b ,0);
        usuario.saldoTotal -=somaTotal;
        usuario.debitos = []
    })
    const filtraContasNegativa = listaNegativa.filter ((conta) => conta.saldoTotal <0)
    return filtraContasNegativa
    
}

console.log(retonarClienteNegativo(listaDeClientes))