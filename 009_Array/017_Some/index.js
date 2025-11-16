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

pedidos.some((item)=>{
    return item.bebida === 'suco de laranja'
});

console.log(pedidoBebida); // true
//Retorna true, pois existe pelo menos um pedido de suco de laranja

//Essa condição é semelhante a tebela verdade do operador lógico OU (||) 
//Então basta que uma das condições seja verdadeira para que o resultado final seja verdadeiro