const pedidos = [
    {
        id: 1,
        lanche: 'X-Burguer',
        nome : 'João',
        bebida: 'Coca-Cola',
        preco: 22.50,
    }
    , {
        id: 2,
        lanche: 'X-Salada',
        nome : 'Maria',
        bebida: 'suco de laranja',
        preco: 18.00,
    }
    , {
        id: 3,
        lanche: 'X-Bacon',
        nome : 'Pedro',
        bebida: 'Coca-Cola',
        preco: 25.00,
    }
]

const balancoTotal = pedidos.reduce((total, item)=>{
    return total + item.preco
},0);

console.log(balancoTotal); // 65.5
