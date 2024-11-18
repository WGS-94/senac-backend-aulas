// Classe base (pai) ItemBiblioteca
class ItemBiblioteca {
    // Atributos
    titulo: string; // atributo que representa o titulo do item
    // atributo que representa a autor do item
    autor: string;

    // Vamos construir a classe base (inicialia os atributos)
    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }

    // Metodo que exibe  as informações gerais do item
    exibeInformacoes() {
        return `Título: ${this.titulo} - Autor: ${this.autor}`;
    }
}

// Subclasse que representa um livro, herdando as propriedades da classe base
class Livro extends ItemBiblioteca {
    // ISBN vai ser um identificador único para o livro em questão
    ISBN: string;
    // Número de páginas do livro
    paginas: number;
    // Gênero do livro 
    genero: string;
    // Vamos construir a classe Livro, herdando a classe base e inicializando os atributos 
    constructor(titulo: string, autor: string, ISBN: string, paginas: number, genero: string) {
        super(titulo, autor); // Chamando o construtor da classe base para inicializar os atributos titulo e autor
        this.ISBN = ISBN;
        this.paginas = paginas;
        this.genero = genero;
    }
    // Metodo que exibe as informações do livro
    exibeInformacoes(): string {
        console.log(`${super.exibeInformacoes()}`) // Chamando o metodo da classe base para exibir as informações gerais do item
        return `Título: ${this.titulo} - Autor: ${this.autor} - ISBN: ${this.ISBN} - Páginas: ${this.paginas} - Gênero: ${this.genero}`;
    }
}

// const livro = new ItemBiblioteca('O Senhor dos Anéis', 'J.R.R.Tolkien');
// console.log(livro.exibeInformacoes()); // imprime: Título: O Senhor dos Anéis - Autor: J.R.R.Tolkien