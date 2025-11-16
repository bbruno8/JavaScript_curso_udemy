const pedidos = [
    {
        id: 1,
        lanche: 'X-Burguer',
        nome : 'João',
        bebida: 'Coca-Cola',
    }
    , {
        id: 2,
        lanche: 'X-Salada',
        nome : 'Maria',
        bebida: 'suco de laranja',
    }
    , {
        id: 3,
        lanche: 'X-Bacon',
        nome : 'Pedro',
        bebida: 'Coca-Cola',
    }
]

let pedidoBebida = pedidos.every((item)=>{
    return item.bebida === 'Coca-Cola'
});

console.log(pedidoBebida); // false
//Retorna false, pois nem todos os pedidos são de Coca-Cola

pedidoBebida = pedidos.every((item)=>{
    return item.bebida === 'suco de laranja' || item.bebida === 'Coca-Cola' 
});

console.log(pedidoBebida); // true
//Retorna true, pois todos os pedidos são de Coca-Cola ou suco de laranja

//Essa condição é semelhante a tebela verdade do operador lógico E (&&) 
//Então todas as condições precisam ser verdadeiras para que o resultado final seja verdadeiro