//Criando um objeto chamado tênis com várias propriedades,dentro dele criamos outros objetos e arrays.

let tenis = {
    modelo: 'Air Max',
    ano: 2021,
    cor: 'Preto',
    estoque: false,
    preco: 499.90,
    tamanho: {
        Brasil: 42,
        EUA: 9,
        Europa: 41
    },
    caixa: {
        largura: 30,
        altura: 20,
        profundidade: 40
    },
    marca: [
        { nome: 'Nike' }, { nome: 'Adidas', }, { nome: 'Puma' }
    ],
    //Função dentro do objeto
    //Essa função acessa o array marca e retorna o nome da marca conforme o índice passado como parâmetro.
    getMarca: function(param) {
        return this.marca[param].nome;
    }
}

console.log(tenis);
console.log(tenis.tamanho);
