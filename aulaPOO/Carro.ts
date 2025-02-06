class Carro {
    constructor(public modelo: string, public ano: number, public cor: string){}
    public info():void {
        console.log(`${this.modelo} ${this.cor} ano ${this.ano}`);
    }
}

const Supra = new Carro("Supra",1987, "branco")
Supra.info()