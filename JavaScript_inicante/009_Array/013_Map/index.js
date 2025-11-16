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
        bebida: 'Guaraná',
    }
    , {
        id: 3,
        lanche: 'X-Bacon',
        nome : 'Pedro',
        bebida: 'Pepsi',
    }
]

//Metodo map é usado para transformar os itens de um array
//O map recebe uma função de callback como argumento
//A função de callback pode receber até três argumentos: o valor atual, o índice e o array completo

pedidos.map((item, index) => {
    if(item.id === 2) {
        item.bebida = 'Fanta Laranja';
    }
});

console.log(pedidos);