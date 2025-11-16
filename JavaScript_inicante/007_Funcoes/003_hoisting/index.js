//O hoisting é um comportamento do JavaScript onde declarações de variáveis e funções são 
// "elevadas" ao topo do seu escopo antes da execução do código.

// No caso de funções, todo o corpo da função é elevado, permitindo que você chame a função
// antes de sua declaração no código.
console.log(soma());//saida 4

function soma() {
  return 2 + 2;
}
// Já no caso de variáveis declaradas com 'var', apenas a declaração é elevada, não a atribuição.
// Portanto, a variável existe antes de sua linha de código, mas seu valor é 'undefined' até
// que a atribuição seja feita.
console.log(x); //saida 'undefined'

var x = 10;
//Const e let também sofrem hoisting, mas diferentemente do var, elas não são inicializadas com
// 'undefined'. Tentar acessar uma variável declarada com const ou let antes de sua declaração
// resultará em um erro de referência.
//console.log(y); // ReferenceError: Cannot access 'y' before initialization
//let y = 20;

// Em resumo, o hoisting permite que funções sejam chamadas antes de sua declaração e que
// variáveis declaradas com 'var' sejam acessadas antes de sua atribuição, mas com valor
// 'undefined'. Variáveis declaradas com 'let' e 'const' não podem ser acessadas antes de
// sua declaração sem causar um erro.