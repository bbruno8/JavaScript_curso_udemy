//Formas de adicionar elementos no array

let array = [1, 2, 3];

array[1] = 4; // Adiciona o elemento 4 na posição 1
array.push(5); // Adiciona o elemento 5 no final do array
array.unshift(0); // Adiciona o elemento 0 no início do array

console.log(array); // Saída: [0, 1, 4, 3, 5]