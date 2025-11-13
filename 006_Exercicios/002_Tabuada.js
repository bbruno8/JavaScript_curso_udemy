//Definido o multiplicador da tabuada
const multiplicador = 5;

//Laço de repetição para calcular a tabuada de 1 a 10 do multiplicador
for (let i =1; i <=10; i++) {
    const resultado = multiplicador * i;
    console.log(multiplicador + " x " + i + " = " + resultado);
}