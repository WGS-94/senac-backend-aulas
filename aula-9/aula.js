// Programação orientada a objeto (POO)

// - Organizar em torno de classes e objetos
// - Reutilização e modularaização do código
// - Abstração e encapsulamento 
// - Herança e polimorfismo
// - Encapsulamento: esconder detalhes internos do objeto e expor apenas os métodos necessários para o uso do objeto.

class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidade = 0;
    }
    // Método para ligar o carro
    ligar(){
        console.log('O carro está ligado');
    }
    // Método para acelerar o carro
    acelerar() {
        this.velocidade += 10;
    }
    // Método para frear o carro
    freiar() {
        this.velocidade -= 10;
    }
    // Método para exibir as informações do carro
    getVelocidade() {
        return this.velocidade;
    }
    // Método para deslogar o carro
    desligar(){
        console.log('O carro está desligado');
    }
    // Método para exibir as informações do carro
    exibirInformacoes(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Velocidade: ${this.velocidade}`;
    }
}

// ========= Programação Funcional ==============================================================

// - Não utiliza variáveis
// - Não utiliza loops
// - Utiliza funções puras
// - Utiliza funções de alta ordem (funções que retornam funções ou que recebem funções como parâmetros)
// - Utiliza funções de composição (funções que retornam funções)
// - Utiliza funções de redução (funções que retornam um valor a partir de uma coleção de valores)
// - Utiliza funções de map (funções que retornam uma coleção de valores a partir de uma coleção de valores)
// - Utiliza funções de filter (funções que retornam uma coleção de valores a partir de uma coleção de valores)
// - Utiliza funções de find (funções que retornam o primeiro valor que atende a uma condição)
// - Utiliza funções de some (funções que retornam true se pelo menos um valor atende a uma condição)
// - Utiliza funções de every (funções que retornam true se todos os valores atendem a uma condição)
// - Utiliza funções de sort (funções que retornam uma coleção de valores ordenada)
// - Utiliza funções de reduce (funções que retornam um valor a partir de uma coleção de valores)

// ========== Programação Declarativa ==============================

// - Descrever o que o programa deve fazer 
// - Não se preocupa com como o programa deve fazer 
// - Exemplo: SQL, HTML, CSS, JavaScript (com algumas exceções)

// ========== Por que POO foi criado? ============================

// - Para resolver problemas complexos 
// - Para criar sistemas escaláveis
// - Para criar sistemas flexíveis e fáceis de manter 
// - Para criar sistemas que possam ser reutilizados
// - Para criar sistemas que possam ser estendidos e personalizados

// =========== Classes e Objetos ===============================

// - Classes: são modelos ou templates que definem as características e comportamentos de um objeto
// - Objetos: são instâncias de classes, ou seja, são criados a partir de classes e possuem suas próprias características e comportamentos

// Exemplo: Uma classe Carro e um objeto Carro


