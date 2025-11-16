//Usando o operador spread para expandir os elementos de um array
// em argumentos individuais em uma função ou em uma expressão.
const num = [1, 2, 3, 4, 5];
console.log(...num);

// Usando o operador spread para encontrar o valor máximo em um array
// passando os elementos do array como argumentos individuais para a função Math.max
console.log(Math.max(...num)); // Saída: 5

//Se não usarmos o operador spread, o resultado será NaN
console.log(Math.max(num)); // Saída: NaN


