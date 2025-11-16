//iife

//Ela se auto executa imediatamente após ser declarada 
(function(){
    const soma = 2 + 2;
   console.log(soma); 
})();

//Outra forma de escrever uma iife é utilizando arrow function
(() => {
    const soma = 3 + 3;
   console.log(soma); 
})();

//Podemos passar parametros para uma iife
((a, b) => {
    const soma = a + b;
   console.log(soma); 
})(5, 5);

//Podemos atribuir o resultado de uma iife a uma variavel
const resultado = ((a, b) => {
    return a + b;
})(10, 10);
console.log(resultado);

//Podemos usar o var para ver o escopo de variaveis dentro de uma iife
(function(){
    var nome = 'Bruno';
    console.log(nome);
})();
//console.log(nome); //Gera um erro, pois a variavel nome não existe fora da iife   