const tenis = {
    modelo: 'Air Max',
    estoque: false,
    cor: 'Preto',
    marcas: ['Nike', 'Adidas', 'Puma'],
    tamanho: {Brasil: 42,EUA: 9,Europa: 41
    }
};

//Destructing - Desestruturação de Objetos
//Extraindo os valores do objeto e criando variáveis com os mesmos nomes das propriedades
const {modelo,marcas,tamanho} = tenis;

console.log(modelo);
console.log(marcas);
console.log(tamanho);

//Podemos também retornar um valor padrão caso a propriedade não exista no objeto
const {estoque="Não existe esse modelo no estoque!"} = tenis;
console.log(estoque);

//Podemos também renomear a variável ao extrair o valor da propriedade
const Sapato = {
    modelo: 'Classic',
    estoque: false,
   secret: 121345,
   link: {a:"a",b:"b"}
};
//Renomeando a variável modelo para nomeDoModelo
const {secret:codigo} = Sapato;
console.log(codigo);
//Renomeando a variável link para a
const {link: a} = Sapato;
console.log(a);

//Fazer isso e a mesmas coisa que:
console.log(Sapato.link.a);
