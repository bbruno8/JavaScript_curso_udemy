let array = [1, 2, 3, 4, 5];

console.table(array);//saída esperada: [1, 2, 3, 4, 5]

// Remove os elementos a partir do índice 2
//slice cria um novo array sem modificar o array original
//Não é possível usar slice para remover elementos do array original
const newArrray = array.slice(0, 2);
console.table(newArrray);//saída esperada: [1, 2]

// array.splice(2);//remove os elementos a partir do índice 2
// console.table(array);//saída esperada: [1, 2]

// array.splice(4,1);//remove somente o elemento do índice 4
// console.table(array);//saída esperada: [1, 2, 3, 4]