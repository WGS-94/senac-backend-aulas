// Vamos desenvolver uma api básica 

// classe Pai - Animal (base)

class Animal {
    // propriedades básicas que todos os animais terão
    nome: string;
    idade: number;
    especie: string;
    raca: string;
    peso: number;

    // Constructor da classe Animal (inicializa as propriedades quando um novo objeto é criado) 
    constructor( nome: string, idade: number, especie: string, raca: string, peso: number){
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
        this.raca = raca;
        this.peso = peso;
    }

    // Método emitirSim(): cada tipo de animal pode ter um som específico
    emitirSom(): string {
        return "Som do animal (genérico)" // Som que qualquer animal emite 
    }

    // Método interagir(): Simular a interção com o animal (ex: alimentar, brincar)
    interagir(acao: string): string {
        // dependendo da ação, o retorno muda
        if(acao === 'alimentar'){
            return `${this.nome} está comendo!`;
        }else if(acao === 'brincar'){
            return `${this.nome} está brincando!`;
        }else {
            return `${this.nome} está descansando, não sabe o que fazer!`;
        }
    }
}

// Classes mamífero que herda o Animal (aqui se tem os atributos específicos dos mamíferos)
class mamifero extends Animal {
    
}

