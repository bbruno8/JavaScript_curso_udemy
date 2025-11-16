const arrayObj = [{
    nome: 'Luiz',
    sobrenome: 'Otávio'
}, {
    nome: 'Maria',
    sobrenome: 'Oliveira'
}, {
    nome: 'Pedro',
    sobrenome: 'Silva'
}, {
    nome: 'Helena',
    sobrenome: 'Souza'
}];

// Usando continue e break em um loop for of
for (let item of arrayObj) {
    if (item.nome === 'Maria') {
        console.log('Encontrado Maria, pulando para o próximo...');
        continue; // Pula para a próxima iteração do loop
    }
    if (item.nome === 'Helena') {
        console.log('Encontrado Helena, saindo do loop...');
        break;// Sai do loop completamente
    }


    console.log(item);
// Saida:{ nome: 'Luiz', sobrenome: 'Otávio' }
// Encontrado Maria, pulando para o próximo...
// { nome: 'Pedro', sobrenome: 'Silva' }
// Encontrado Helena, saindo do loop...
};