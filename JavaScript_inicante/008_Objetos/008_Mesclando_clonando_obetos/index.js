let tenis = {
    marca: "Nike",
    modelo: "Air Max",
    cor: "Preto",
    preco: 350.00,
};
// Clonando o objeto
let clone1 = tenis;

clone1.caixa= false;
clone1.cadarco = true;
clone1.preco = 400.00;

console.log(clone1); // Mostra o objeto original

// Mesclando objetos
let mesclar = Object.assign(tenis,clone1);

console.log(mesclar); // Mostra o objeto mesclado

let mesclar2 = {...tenis, ...clone1};

console.log(mesclar2); // Mostra o objeto mesclado usando spread operator