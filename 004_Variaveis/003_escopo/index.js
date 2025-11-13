//Escopo: Determina quais são os dados que podem ser acessados em diferentes partes do código

//Funciona para let e const

let nome = 'João' // Variável global

{
    let nome = 'Maria' // Variável local prevalece dentro do bloco
    let idade = 25 // Variável local
    console.log(nome) // Acessa a variável global resultado: Maria
}

console.log(nome) // Acessa a variável global resultado: João
console.log(idade) // Erro: idade is not defined está fora do escopo onde foi declarada (global)

//Não usar var, pois var não respeita escopo de bloco 
var sobrenome = 'Silva' // Variável global

{
    var sobrenome = 'Santos' // Sobrescreve a variável global
    console.log(sobrenome) // Acessa a variável global resultado: Santos
}
console.log(sobrenome) // Acessa a variável global resultado: Santos