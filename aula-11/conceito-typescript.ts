// Typescript

/*
    ====== CONCEITO DE TYPESCRIPT =======
    - É uma linguagem de programação que adiciona tipos estáticos a JavaScript.
    - É uma extensão do JavaScript, não uma substituição.
    - É uma linguagem de programação que permite a definição de tipos para as variáveis, funções e objetos.
    - É uma linguagem de programação que permite a verificação de tipos estáticos, o que significa que o compilador 
    pode verificar se o código está correto antes de executá-lo.
*/

// Exemplo de tipos em Typescript

// Tipos primitivos
let nome: string = 'João';
let idade: number = 30;
let estaCasado: boolean = true;
let salario: number = 5000.50;
let altura: number = 1.80;
let peso: number = 70.5;

// Tipos de array
let nomes: string[] = ['João', 'Maria', 'Pedro'];
let idades: number[] = [30, 25, 40];
let estaCasados: boolean[] = [true, false, true];
let salarios: number[] = [5000.50, 6000.00, 7000.00];
let alturas: number[] = [1.80, 1.70, 1.80];

// Tipos de objeto
let pessoa: {
    nome: string;
    idade: number;
    estaCasado: boolean;
} = {
    nome: 'João',
    idade: 30,
    estaCasado: true
};

// Tipos de função
function soma(a: number, b: number): number {
    return a + b;
}

// Tipos de tipo de dado
let nomeCompleto: string = 'João Pedro';
let idadeCompleta: number = 30;
// let estaCasadoCompleto: boolean = true; // Erro, pois não é possível atribuir um valor a uma variável que não foi declarada.
// let salarioCompleto: number = 5000.50; // Erro, pois não é possível atribuir um valor a uma variável que não foi declarada.
// let alturaCompleta: number = 1.80; // Erro, pois não é possível atribuir um valor a uma variável que não foi declarada.
// let pesoCompleto: number = 70.5; // Erro, pois não é possível atribuir um valor a uma variável que não foi declarada.
