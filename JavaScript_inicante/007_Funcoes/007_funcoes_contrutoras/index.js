// Função Construtora
function calculadora(num1,num2){
    // Atributos ou Métodos Públicos
    this.soma =() => {
        return num1 + num2
    }
    // Atributos ou Métodos Públicos
    this.subtracao =() => {
        return num1 - num2
    }
}
// Instância da Função Construtora
const caculo = new calculadora(9,6) // Passando os Parâmetros
console.log(caculo.soma()) // Chamando o Método
console.log(caculo.subtracao())// Chamando o Método