/*
    Crie uma classe Pessoa para representar dados básicos de uma pessoas. A classe deve conter:
    1 - Dois campos privados : #nome e #idade, que armazenam o nome e a idade da pessoa, respectivamente.
    2 - Um método público obterNome() que retorna o nome da pessoa
    3 - Um método público obterIdade() que retorna a idade da pessoa
    4 - Um método público definirIdade(novaIdade) que permite alterar o idade, mas somente se o valor fornecido for positivo.
    Caso contrário, exibe uma mesnagem de erro.

    Objetivo:
    - Criar uma instância de Pessoa com um nome e uma idade iniciais
    - Exibir o nome e a idade da pessoa, usando os métodos obterNome() e obterIdade()
    - Tentar alterar a idade da pessoa, usando o método definirIdade() e verificar o resultado
*/

// RESOLUÇÃO

class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade){
        this.#nome = nome
        this.#idade = idade
    }
    // Método público para obter o nome da pessoa
    obterNome(){
        return this.#nome
    }
    // Método público para obter a idade da pessoa
    obterIdade(){
        return this.#idade
    }
    // Método público para definir a idade da pessoa
    definirIdade(novaIdade){
        if(novaIdade > 0){
            this.#idade = novaIdade
            return `Idade da pessoa: ${this.#idade}`
        }
        return `Valor inválido para idade!`
    }
}

const pessoa = new Pessoa('Camburinho', 28)

console.log('============= Pessoa ===============')
console.log('Nome:', pessoa.obterNome())
console.log('Idade:', pessoa.obterIdade())
console.log('Nova idade:', pessoa.definirIdade(-30))
console.log('============ Nice ==================')