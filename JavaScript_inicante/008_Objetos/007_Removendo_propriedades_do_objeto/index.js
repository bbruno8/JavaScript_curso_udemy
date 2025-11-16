let tenis = {
    marca: "Nike",
    modelo: "Air Max",
    cor: "Preto",
    preco: 350.00,
};

delete tenis.preco; // Removendo a propriedade 'preco' do objeto

//Podemos adicionar novamento
tenis.preco = 400.00; // Adicionando novamente a propriedade 'preco' ao objeto

console.log(tenis);