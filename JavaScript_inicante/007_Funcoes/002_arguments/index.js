//Função usando argumentos
function soma(num1,num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
    return num1 + num2;
    }
    return "Por favor, insira apenas números";
}

console.log(soma("1",6)); 

//Função chamando outra função
function soma2(num1,num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
    return num1 + num2;
    }
    return "Por favor, insira apenas números";
}

console.log(soma2(soma2(3,2), soma2(0,5))); 

//Função usando arguments 
function subtracao(){
    return arguments;
}
//Os argumentos são retornados em forma de array
console.log(subtracao("Banana", 2, 3, 4, 5));

//Arguments não funciona em arrow functions