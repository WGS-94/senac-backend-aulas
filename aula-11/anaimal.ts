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
class Mamifero extends Animal {
    tipoPelagem: string; // Tipo de pelagem de mamífero
    amamenta: boolean;

    // O constructor do Mamífero que vai chamar o constructor pai de todos (Animal | super) par inicializar as propriedades
    constructor(nome: string, idade: number, especie: string, raca: string, peso: number, tipoPelagem: string, amamenta: boolean){
        super(nome, idade, especie, raca, peso); // Tudo isso vem da classe superior (Animal)
        this.tipoPelagem = tipoPelagem;
        this.amamenta = amamenta;
    }

    // Polimorfísmo - agora vamso subrescrever o método (mudar a sua forma, conforme a sua nececidade)
    // subrescrever o método emitirSom() para os mamíferos, criando um só específico para esse grupo
    emitirSom():string {
        return "Som típico de um mamífero (latido, miado, etc)";
    }
}

// Classes Ave que herda da super Animal (aqui se tem os atributos específicos dos mamíferos)
class Ave extends Animal {
    envergaduraAsas: number;
    tipoBico: string;

    constructor(nome: string, idade: number, especie: string, raca: string, peso: number, envergaduraAsas: number,  tipoBico: string){
        super(nome, idade, especie, raca, peso); 
        this.envergaduraAsas = envergaduraAsas;
        this.tipoBico = tipoBico;
    }

    emitirSom():string {
        return ''
    }
}

// Classes Peixe que herda da super Animal (aqui se tem os atributos específicos dos mamíferos)
class Peixe extends Animal {
    tamanhoAquario: number;
    tipoAlimeto: string;

    constructor(nome: string, idade: number, especie: string, raca: string, peso: number, tamanhoAquario: number,  tipoAlimeto: string){
        super(nome, idade, especie, raca, peso); 
        this.tamanhoAquario = tamanhoAquario;
        this.tipoAlimeto = tipoAlimeto;
    }

    emitirSom():string {
        return 'Peixes não emitem sons audíveis!'
    }
}
