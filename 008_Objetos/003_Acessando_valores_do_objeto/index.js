const tenis = {
    tamanho: 45,
    modelo: 'Air Max'
};
//Usamos o ponto (.) para acessar os valores do objeto
console.log(tenis.modelo);
console.log(tenis.tamanho);

//Também podemos usar colchetes [] para acessar os valores do objeto
console.log(tenis['modelo']);
console.log(tenis['tamanho']);

//Verificando o tipo de dado retornado ao acessar uma propriedade do objeto
console.log(typeof tenis.modelo);
console.log(typeof tenis.tamanho);

//Exibindo uma mensagem com os valores acessados do objeto
console.log("Modelo do tenis é: " + tenis.modelo + " e o tamanho é: " + tenis.tamanho);