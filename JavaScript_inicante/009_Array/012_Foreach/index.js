const arrayObj = [{
    nome: 'Luiz',
    sobrenome: 'Otávio'
}, {
    nome: 'Maria',
    sobrenome: 'Oliveira'
}, {
    nome: 'Pedro',
    sobrenome: 'Silva'
}, {
    nome: 'Helena',
    sobrenome: 'Souza'
}];
//Usando forEach
//O forEach recebe uma função de callback como argumento
//A função de callback pode receber até três argumentos: o valor atual, o índice e o array completo

arrayObj.forEach((item, index) => {
    console.log(index, item);
}
);

arrayObj.forEach((item) => {
    console.log(item.nome);
});

// Diferença entre forEach e for of
// for of permite o uso de break e continue, já o forEach não permite
// for of pode ser usado com qualquer objeto iterável, enquanto o forEach é específico para arrays
