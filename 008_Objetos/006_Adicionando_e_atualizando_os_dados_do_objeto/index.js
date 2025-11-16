// Adicionando e atualizando os dados do objeto
//Usamos let pois const não permite a atualização do objeto

let Tenis = {
    marca: "Nike",
    modelo: "Air Max",
};
// Adicionando uma nova propriedade ao objeto
Tenis.modelo ="Air Force";

//Podemos também adicionar novas propriedades
Tenis.cor = "Preto";
Tenis.preco = 350.00;

console.log(Tenis);