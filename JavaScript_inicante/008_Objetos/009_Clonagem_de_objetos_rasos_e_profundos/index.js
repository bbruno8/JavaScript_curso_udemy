let tenis = {
    marca: "Nike",
    modelo: "Air Max",
    cor: "Preto",
    preco: 350.00,
};

let sapato = {
    marca: "classic",
    modelo: "Oxford",
    cor: "Preto",
    preco: 105.00,
};

// Clonando o objeto tenis usando JSON.stringify e JSON.parse 
//Vamos converter o objeto em uma string JSON e depois de volta para um objeto
//Assim, criamos uma cópia independente do objeto original


let clone1 = JSON.stringify(tenis); // Converte o objeto em string JSON
clone1 = JSON.parse(clone1); // Converte a string JSON de volta para um objeto

//Podemos fazer o processo em uma única linha:
// let clone1 = JSON.parse(JSON.stringify(tenis));

clone1.preco = 300.00; // Modifica o preço do clone

console.log(clone1); // Exibe a string JSON
console.log(tenis); // Exibe o objeto original
