//Definida uma palavra, vamos deixar ela toda em minúsculo e sem espaços.
const palavra = "Arara".toLocaleLowerCase().replace(" ", "");

//Criar um objeto vazio para armazenar as letras e suas quantidades.
let letras = {};

//Percorrer cada letra da palavra.
for (let i = 0; i < palavra.length; i++) {
    //Verificar se a letra já existe no objeto.
    if (letras[palavra[i]]) {
        //Se existir, incrementar a quantidade.
        letras[palavra[i]] ++ ;
    }
    else {
        //Se não existir, adicionar a letra com quantidade 1.
        letras[palavra[i]] = 1;
    }
}
    
//Exibir a palavra e o objeto com as letras e suas quantidades.
console.log(palavra);
console.log(letras);
