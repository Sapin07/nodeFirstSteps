// ***** para buscar uma tipagem de um outro arquivo usa-se um import EX:
//---->     import { Produto } from "pasta/arquivo_de_origem.ts"

interface EstabelecimentoInterface {
    endereco: string,
    returnProductNames: () => string[];
}

interface ReceitaInterface {
    remedios: string[];
    idMedico: string;
}

interface FarmaciaInterface extends EstabelecimentoInterface {
    compraRemedio: (
        receita: ReceitaInterface, remediosAComprar: string[]) => void;
}

interface remedio extends Produto {
    receitaObrigatoria?: boolean;
}

type Produto = {
    nome: string;
    valor: number;
};

class Estabelecimento implements EstabelecimentoInterface{
    private filaDeEspera: number;
    constructor(
        public nome: string,
        public endereco: string,
        protected tipo: string, 
        protected produtos: Produto[],
        filaDeEspera?:number
    ){
        this.nome = nome;
        this.endereco = endereco;
        this.tipo = tipo;
        this.produtos = produtos;
        this.filaDeEspera = filaDeEspera ?? 10;
    }
    DiminuirFila(){
        if(this.filaDeEspera === 0) {
            return;
        }
            this.filaDeEspera -= 1;
    }
    public returnProductNames(): string[] {
        return this.produtos.map(produto => produto.nome)
    }

    get FilaDeEspera() {
        return this.filaDeEspera;
    }
    set FilaDeEspera(fila: number) {
        if (fila <= 0) {
            return
        }
        this.filaDeEspera = fila;
    }
}

// instaciar uma class
const padaria2 = new Estabelecimento(
    'Seu Joca Paes', 
    'Av Paulista', 
    'Alimentos', 
    [
        {nome: 'Pao', valor: 0.60}, 
        {nome: 'Sonho', valor: 3.0}, 
        {nome: 'Rosca', valor: 4.50} 
    ],
    23
)
class Farmacia extends Estabelecimento implements FarmaciaInterface {
    constructor(
        public nome: string,
        public endereco: string,
        protected tipo: string, 
        protected produtos: remedio[],
        filaDeEspera?:number
    ){
      super(nome, endereco, tipo, produtos, filaDeEspera)
    }

    public compraRemedio(
        receita: ReceitaInterface,
        remediosAComprar: string[]
     ):  void {
        
        const remediosDisponiveis = this.produtos.filter(
            produto => remediosAComprar.includes(produto.nome)
        );

        if (remediosDisponiveis.length === 0) {
            console.log('puts nao temos')
        }

        const remediosComReceita = remediosDisponiveis.filter(
            produto => {
                if (!produto.receitaObrigatoria) {
                    return true
                }

                return receita.remedios.includes(produto.nome)
            }
        )

        console.log(remediosDisponiveis);
        console.log(remediosComReceita);
    }
}

const farmacia = new Farmacia(
    'Facinha da Lucia', 
    'Av Paulista', 
    'Farmaceutico', 
    [
        {nome: 'aspirina', valor: 0.60}, 
        {nome: 'remedio sabor morango', valor: 3.0, receitaObrigatoria:true}, 
        {nome: 'remedio sabor banana', valor: 3.0, receitaObrigatoria: true}, 
        {nome: 'Acetonato de potassio', valor: 4.50} 
    ],
    23
)

farmacia.compraRemedio({
    remedios: ['remedio sabor morango'],
    idMedico: '12345'
},['remedio sabor banana','aspirina'])

// console.log(padaria2.returnProductNames())
// exemplo obj padaria
// const padaria = {
//     endereco: 'Algum lugar',
//     tipo: 'alimentacao',
//     produtos: [
//         {nome: 'pao', valor: 0.6},
//         {nome: 'pacoca', valor: 1},
//         {nome: 'leite', valor: 3.0}
//     ],
//     returnProductNames(){
//         return this.produtos.map(produto => produto.nome)
//     }
// }

// console.log(padaria.returnProductNames())