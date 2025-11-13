/*
var ; //Ele é usado para declarar variáveis com escopo global ou de função
let ; //Ele é usado para declarar variáveis com escopo de bloco
const ; //Ele é usado para declarar constantes, ou seja, valores que não podem ser reatribuídos 
*/ 


//****Melhor usar let e const no lugar de var para evitar problemas de escopo.****


//Podemos declarar String, Number, Boolean, Object, Array, entre outros tipos de dados.

var nome = "João"; // Declaração de variável com var
console.log(nome); // Saída: João

let idade = 25; // Declaração de variável com let
console.log(idade); // Saída: 25

const pi = 3.14; // Declaração de constante com const
console.log(pi); // Saída: 3.14

//Var e let podem ser reatribuídas

nome = "Maria";
console.log(nome); // Saída: Maria

idade = 30;
console.log(idade); // Saída: 30

//Const não pode ser reatribuída
// pi = 3.1415; // Isso causaria um erro

// Não podemos declarar variaiveis com palavras reservadas
// let for = 10; // Isso causaria um erro porque "for" é uma palavra reservada