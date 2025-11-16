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
// Retorne apenas os pedidos que a bebida seja igual a 'Coca-Cola'
let filterCocaCola = pedidos.filter((element,index) => {
    return element.bebida === 'Coca-Cola'
});

console.log(filterCocaCola);