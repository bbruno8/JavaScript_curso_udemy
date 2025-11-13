//Operador ternário
//É uma forma mais curta de escrever uma condicional if...else

//Estrutura:
//condição ? valor se verdadeiro : valor se falso;

const idade = 18;
const podeBeber = idade >= 18 
? 'Pode beber' 
: 'Não pode beber';
console.log(podeBeber); // Saída: Pode beber

const numero = 10;
const parOuImpar = numero % 2 === 0 ? 'Par' : 'Ímpar';
console.log(parOuImpar); // Saída: Par