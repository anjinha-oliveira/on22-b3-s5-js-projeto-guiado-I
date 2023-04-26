/* 
- Crie uma classe Livro com as propriedades titulo, autor, editora e preco. O id deve ser preechido com um número aleatório entre 0 e 100

- Ao preencher o id, verifique se não existe um livro com aquele ID na lista. Se houver, crie outro ID aletório e repita esse processo até que o número gerado não tenha sido selecionado como ID anteriormente.

- Crie uma classe Loja com uma propriedade livros, que deverá ser um array de objetos da classe Livro.
*/

const livros = []

class Loja {
    constructor () {
        this.livros = []
    }

    adicionarLivro(livro) {
        this.livros.push(livro)
    }

    cadastrarLivro(titulo, autor, editora, preco) {
        const livro = new Livro(titulo, autor, editora, preco);
        this.livros.push(livro)
        
    }
}

class Livro {
    constructor (titulo, autor, editora, preco) {
        this.adicionarID();
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.preco = preco;

        livros.push(this)
    }

    adicionarID() {
        let livroEncontrado = undefined;
        do {
            this.id = parseInt(Math.random() * 100);
            livroEncontrado = livros.find((livro) => livro.id === this.id)
        } while (livroEncontrado !== undefined)
    }
}


const loja = new Loja();
//loja.adicionarLivro(l1);
//loja.adicionarLivro(l2);
//loja.adicionarLivro(l3);
//loja.adicionarLivro(l4);

//console.log(loja)
loja.cadastrarLivro('Pardal', 'Luan fonsceca', 'Livraria Recife', 10)
loja.cadastrarLivro('Crimes', 'Sandra', 'Livraria Olinda', 50)
loja.cadastrarLivro('Romance', 'Rita', 'Livraria Iputinga', 60)
loja.cadastrarLivro('40 tons de cinza', 'Angela Oliveira', 'Livraria Jaqueira', 30)
console.log(loja.livros)