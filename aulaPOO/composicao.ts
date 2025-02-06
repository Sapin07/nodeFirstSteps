// class Animal {
//     public nome: string
//     public idade: number
//     constructor(nome: string, idade: number) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }
type Constructor = new ( ...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;
type AnimalProps = GConstructor<{nome: string, idade: number}>;

interface AnimalInterface {
    nome:string
    idade:number
    comer: () => void
}

class Animal implements AnimalInterface{
    constructor( public nome: string, public idade: number) {}

    comer() : void {
        console.log('*sons de comendo')
    };
}

class AnimalVoador extends Animal implements AnimalInterface {
    constructor(
        public nome: string, public idade: number, public penas: boolean
    ) {
        super(nome, idade)
    }
    voa(): void {
        console.log('voando baby')
    }
}

class AnimalAquatico extends Animal implements AnimalInterface {
    constructor(
        public nome: string, public idade: number
    ) {
        super(nome, idade)
    }

    nadar(): void {
        console.log('glub glub')
    }
}
function MixinNada<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor(...args: any[]) {
            super(...args); // Propaga os argumentos corretamente
        }
        nadar() {
            console.log('nadando');
        }
    };
}

function MixinVoa<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor(...args: any[]) {
            super(...args); // Propaga os argumentos corretamente
        }
        voar() {
            console.log('voando');
        }
    };
}

function MixinAnda<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor(...args: any[]) {
            super(...args); // Propaga os argumentos corretamente
        }
        andar() {
            console.log('andando');
            console.log(this.nome)
            console.log(this.idade)
        }
    };
}

class AnimalVoadorAndadorNadador extends (MixinNada(MixinAnda(MixinVoa(Animal)))){}

// Pato faz tudo
const pato = new (MixinNada(MixinAnda(MixinVoa(Animal))))('roberto', 2);

// Testando
pato.comer();
pato.nadar();
pato.voar();
pato.andar();

//cachorro anda
const cachorro = new Animal('porco', 12)
cachorro.comer
//peixe nada
const peixe = new AnimalAquatico('tutu', 10)
// function MixinAnda<TBase extends AnimalProps>(superClasse: TBase) {
//     return class extends superClasse{
//         constructor(...args:any){
//             super(args[0])
//         }
//         andar() {
//             console.log('andando')
//         }
//     }
// }
