/*
    Crie uma classe chamada 'Cachorro' com os seguintes atributos:
    nome: o nome do cachorro
    idade: a idade do cachorro
    raca: a raça do cachorro
    cor: a cor do cachorro
    peso: o peso do cachorro

    Adicione os seguintes métodos à classe 'Cachorro':
    - Latir(): Este método deve imprimir a mensagem "Au Au", quando for chamdo
    - Aniversario(): Este método deve aumentar a idade do cachorro em 1 quando chamado

    Crie uma instância em um cachorro, chame o método Latir() e depois faça a o cachorro Aniversario() e mostre a sua idade

*/

class Cachorro {
    constructor(nome, idade, cor, peso) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
        this.peso = peso;
    }
    // Método para latir o carro
    latir(){
        console.log('Au Au');
    }
    // Método para exibir aniversário
    aniversario(){
        return `${this.idade += 1}`
    }
}

// Criação de uma instância do cachorro
let cachorro = new Cachorro('Bela', 3, 'Branca', 10);

// Chamada do método Latir()
cachorro.latir();

// Chamada do método Aniversario()
cachorro.aniversario();


// Exibição da idade do cachorro após o aniversário
console.log(`${cachorro.nome} agora tem ${cachorro.idade} anos`);

/* Exercício 2 - Crie uma classe chamada Lampada com os segintes atributos:
 - estado: o estado da lampada (pode ser 'ligada' ou 'desligada')
 - cor: a cor da lampada (exemplo: 'branca', 'amarela')

 Adicione os seguintes métodos:
 - Ligar(): Este método deve mudar o estado da lampada para 'ligada' e exibir a mensagem "A Lampada está ligada!".
 - Desligar(): Este método deve mudar o estado da lampada para 'desligada' e exibir a mensagem "A Lampada está desligada!"

 */

class Lampada {
    constructor(estado, cor){
        this.estado = estado;
        this.cor = cor;
    }
    // Método para ligar a lampada
    ligar(){
        this.estado = true;
        console.log('A Lampada está ligada!');
    }
    // Método para desligar a lampada
    desligar(){
        this.estado = false;
        console.log('A Lampada está desligada!');
    }
}

let lampLigada = new Lampada(true, 'Branca');

console.log(lampLigada)