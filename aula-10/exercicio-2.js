/*
    Crie uma classe PoteDeVitamina que representa um pote com algumas vitaminas dentro. A classe deve conter:
    1 - Um campo privado : #vitamina, que armazenam uma lista de vitaminas dentro do pote.
    por exemplo: ["vitamina C", "vitamina D", "vitamina B12"]
    2 - Um método público abrir() que permite pegar uma vitamina do pote. O método deve:
    - Retornar uma vitamina da lista, se houver, e exibir uma mensagem informando qual vitamina foi retirada.
    3 - Um método público contarVitaminas() que retorna o número de vitaminas restantes do pote em formato de string.
*/

// RESOLUÇÃO

class PoteDeVitamina {
    // Campo privado para armazenar a lista de vitaminas
    #vitaninas = ["vitamina C", "vitamina D", "vitamina B12", "vitamina E", "vitamina K"];

    // constructor(vitamina){
    //     this.#vitaninas = vitamina
    // }

    // Método público para pegar uma vitamina do pote
    abrir(){
        // Verificar se há vitaminas no pote
        if (this.#vitaninas.length > 0) {
            // Retirar a última vitamina da lista
            const vitaminaRetirada = this.#vitaninas.pop();
            // Retira a vitamina na posição 2
            const retirarVitamina = this.#vitaninas[2]
            return [retirarVitamina, vitaminaRetirada];
        }
    }
    // Método público para definir a idade da pessoa
    contarVitaminas(){
        return this.#vitaninas.length
    }
}

const vitamina = new PoteDeVitamina()

console.log('============= Vitaminas ===============')
console.log('N° de vitaminas iniciais:', vitamina.contarVitaminas())
console.log('Vitamina(s) retirada(s):', vitamina.abrir())
console.log('N° de vitaminas restantes:', vitamina.contarVitaminas())
console.log('============ Nice ==================')