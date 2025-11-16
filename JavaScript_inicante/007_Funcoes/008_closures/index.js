//Closures - Funções Aninhadas
//Closure é quando uma função "lembra" do escopo onde ela foi criada, mesmo quando executada fora desse escopo.
function QualSeuNome(name){
    const msg = 'Seu nome é '+name;
    function SeuNome(){
        return `${msg} ${name}`;
    }
    return SeuNome;
}

console.log(QualSeuNome('João'));

//Caso eu user .SeuNome() aqui, dará erro, pois a função SeuNome está dentro da função QualSeuNome e não está visível fora dela.

//Exemplo 2 - Calculadora usando Closures
function Calculadora(num1,num2){
    const msg = 'O resultado é: ';
    //Funções Aninhadas
    const soma = function(){
        return msg+(num1+num2);
    }
    const subtracao = function(){
        return msg+(num1-num2);
    }
    const multiplicacao = function(){
        return msg+(num1*num2);
    }
    const divisao = function(){
        return msg+(num1/num2);
    }
    //Retornando um Objeto com as funções
    return { 
        soma: soma,
        subtracao: subtracao,
        multiplicacao: multiplicacao,
        divisao: divisao
    };
}
//Chamando as funções da Calculadora
console.log(Calculadora(10,5).soma());
console.log(Calculadora(10,5).subtracao());
console.log(Calculadora(10,5).multiplicacao());
console.log(Calculadora(10,5).divisao());
//Mesmo após a execução da função Calculadora, as funções internas ainda têm acesso às variáveis num1, num2 e msg devido ao closure.