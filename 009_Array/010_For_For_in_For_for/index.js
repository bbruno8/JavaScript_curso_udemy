const array = [1, 2, 3, 4, 5];

const arrayObj = [{
    nome: 'Luiz',
    sobrenome: 'Otávio'
}, {
    nome: 'Maria',
    sobrenome: 'Oliveira'
}, {
    nome: 'Helena',
    sobrenome: 'Silva'
}];


//for ([Inicialização]; [Condição]; [Incremento]) { ... }
// for (let i = 0; i < arrayObj.length; i++) {
//     console.log(arrayObj[i]); // Acessa cada elemento do array e imprime no console
//     console.log(i); // Imprime o índice atual
// }

//{ nome: 'Luiz', sobrenome: 'Otávio' }
// 0
// { nome: 'Maria', sobrenome: 'Oliveira' }
// 1
// { nome: 'Helena', sobrenome: 'Silva' }
// 2

//for off 
//Percorre os valores do array
//Pode usar arrays multidimensionais exemplo: const array = [[1,2], [3,4], [5,6]]; ele vai retornar cada array interno
for (let item of arrayObj) {
    console.log(item); // Acessa cada elemento do array e imprime no console
}

//For in
//Não é recomendado para arrays, mas sim para objetos
//Percorre as chaves do objeto
const obj = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};
for (let chave in obj) {
    console.log(chave, obj[chave]); // Acessa cada chave do objeto e imprime no console junto com seu valor
}