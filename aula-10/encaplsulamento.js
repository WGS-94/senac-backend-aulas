// Encapsulamento de dados e métodos 

// Função para converter valor em reais, moeda brasileira
const converterParaReal = (valor) => {
    return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
        valor,
    )
}

class Conta {
    #saldo = 300 // Propriedade privada

    constructor(nome, tipo){
        this.nome = nome
        this.tipo = tipo
    }

    // Método público para adicionar valor ao saldo
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor
            return `Depósito realizado com sucesso! Saldo atual: ${converterParaReal(this.#saldo)}`
        }
        return `Valor inválido para depósito!`
    }

    // Método público para acessar o valor do saldo
    obterSaldo(){
        return `O saldo atual é ${converterParaReal(this.#saldo)}.`
    }
}

const conta = new Conta('Wilson', 'Poupança')

conta.depositar(100)

console.log(conta) // Mostrou apenas o nome do usuário e não o saldo, porque o saldo é uma propriedade privada

// Para acessar o saldo, é necessário usar o método público obterSaldo()
const saldo = conta.obterSaldo()

console.log(saldo) // Mostra o saldo da conta