//todos os valores estão em kg e metros
//Valores declarados como constantes pois não irão mudar
const peso =80;
const altura =1.80;

//Cálculo do IMC
const imc = peso / (altura * altura);

console.log(`Seu IMC é ${imc.toFixed(2)}`);

//Foi usado o if else if para fazer a verificação dos valores do IMC
if (imc < 18.49) {
    console.log("Você está muito abaixo do peso.");
}else if (imc >= 17 && imc <18.49) {
    console.log("Você está abaixo do peso.");
}else if (imc >= 18.49 && imc <24.99) {
    console.log("Você está com o peso normal.");
}else if (imc >= 25 && imc <29.99) {  
    console.log("Você está acima do peso.");
} else if (imc >= 30 && imc <34.99) {
    console.log("Você está com obesidade grau I.");
}else if (imc >= 35 && imc <39.99) {
    console.log("Você está com obesidade grau II.");
}else {
    console.log("erro!");
}