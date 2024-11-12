// Exercício 6 - Crie uma classe chamada Transporte com uma propriedade nome e um método mover(), que imprime 
// uma mensagem 

class Transporte {
    constructor(nome) {
        this.nome = nome;
    }
    // Método mover()
    mover() {
        console.log(`${this.nome} está em movimento.`)
    }
};

// Subclasses ou filhos 
class Carro extends Transporte {
    // Método mover()
    mover() {
        console.log(`O carro está em movimento na estrada.`)
    }
}

class Aviao extends Transporte {
    // Método mover()
    mover() {
        console.log(`O avião está em movimento no ar(céu).`)
    }
}

const meuCarro = new Carro('Ferrari');
meuCarro.mover(); // O carro está em movimento na estrada.

const meuAviao = new Aviao('Boeing 777');
meuAviao.mover(); // O avião está em movimento no ar(céu)
