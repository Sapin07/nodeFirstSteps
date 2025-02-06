const avaliacoes = [
    {
        clientes: 2,
        nota: 5
    },
    {
        cliente: 3,
        nota: 3
    }
]
function calcularMediaAvaliacao(avaliacoes:[]){
    let resultado: number= 0
	avaliacoes.forEach(avaliacao => resultado += avaliacao.nota) 
	
	return resultado;
}