const array = ["Banana", "Maçã", "Laranja", "Abacaxi", "Uva"];
console.log(array.sort()); // Ordena em ordem alfabética
console.log(array.reverse()); // Reverte a ordem dos elementos

const numeros = [5, 10, 8, 1, 2,98,14,45,23,67];
console.log(numeros.sort());//Funciona mas ordena como strings, saida fica: [1, 10, 14, 2, 23, 45, 5, 67, 8, 98], pois compara o primeiro digito

console.log(numeros.sort((a, b) => a - b)); // Ordena corretamente em ordem crescente
console.log(numeros.sort((a, b) => b - a)); // Ordena corretamente em ordem decrescente 

const carros = [
  { modelo: "Ford", ano: 2010 },
  { modelo: "Chevrolet", ano: 2005 },
  { modelo: "Toyota", ano: 2018 },
  { modelo: "Honda", ano: 2012 },
];
console.log(carros.sort((a, b) => a.modelo.localeCompare - b.modelo.localeCompare)); // Ordena por modelo em ordem alfabética
//localeCompare é um método de string que compara duas strings e retorna um valor numérico indicando se a string de referência vem antes, 
// depois ou é igual à string comparada na ordem alfabética.

console.log(carros.sort((a, b) => a.ano - b.ano)); // Ordena por ano em ordem crescente
console.log(carros.sort((a, b) => b.ano - a.ano)); // Ordena por ano em ordem decrescente
console.log(carros.sort((a, b) => b.modelo.localeCompare-a.modelo.localeCompare)); // Ordena por modelo em ordem alfabética reversa

// Exemplo com números negativos e decimais
const numerosComplexos = [3.5, -2.1, 4.8, -1.0, 0.0, 2.3];
console.log(numerosComplexos.sort((a, b) => a - b)); // Ordena corretamente em ordem crescente