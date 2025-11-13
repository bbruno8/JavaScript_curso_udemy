// Boas práticas para nomes de variáveis: usar camelCase
let dataNascimento = "24/08/2005";
console.log(dataNascimento); // Saída: 24/08/2005


// Nomes de variáveis não podem começar com números
// let 1nome = "Ana"; // Isso causaria um erro
let nome1 = "Ana"; // Correto mas não recomendado

// Nomes de variáveis não podem conter espaços ou caracteres especiais (exceto _ e $)
// let nome completo = "Carlos"; // Isso causaria um erro
// let nome-completo = "Carlos"; // Isso causaria um erro

let nome_completo = "Carlos"; // Correto
console.log(nome_completo); // Saída: Carlos

// Nomes de variáveis são case-sensitive
let cidade = "Belo Horizonte";
let Cidade = "Rio de Janeiro";
console.log(cidade); // Saída: Belo Horizonte
console.log(Cidade); // Saída: Rio de Janeiro

// Evitar usar nomes muito genéricos ou abreviações
let x = 10; // Não recomendado
let quantidadeDeItens = 10; // Recomendado

