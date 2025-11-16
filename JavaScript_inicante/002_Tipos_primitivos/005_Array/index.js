console.log([1, 2, 3]); //Agrupa dados em uma única variável do tipo array
console.log(['Ana',123, true]); //Arrays podem conter diferentes tipos de dados
console.log([[1,2], [3,4], [5,6]]); //Arrays podem conter outros arrays

console.log(["elemento 0", "elemento 1", "elemento 2"][1]); //Acessando um elemento do array pelo seu índice (posição inciciando em 0)

console.log(["Ana", "Bia", "Carlos"].length); //Propriedade length retorna o tamanho do array

//Metodo forEach: Executa uma função para cada elemento do array
/*saida: 
Ana 0
Bia 1
Carlos 2
*/      
["Ana", "Bia", "Carlos"].forEach ((res,index) => {
    console.log(res, index);
});