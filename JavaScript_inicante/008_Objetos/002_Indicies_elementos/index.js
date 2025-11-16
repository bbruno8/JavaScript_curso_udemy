//Função que retorna um objeto

function tenis(tamanho,modeloTenis,marca) {
    //Passando o paramentro dentro do objeto
    return {
        //Não foi necessário escrever tamanho: tamanho, pois o nome da propriedade é igual ao nome do parâmetro
        //Caso fossem diferentes, seria necessário fazer assim: tamanhoDoTenis: tamanho
        tamanho,
        modelo: modeloTenis,//Nesse caso os nomes são diferentes
        marca,
    }
}

console.log(tenis(42,'Air Max','Nike'));
console.log(tenis(38,'Super Star','Adidas'));

//Criando um objeto diretamente com variáveis
const tamanho = 40;
const modeloTenis = 'Classic';
const marca = 'Adidas';
//Usando a sintaxe curta de objetos
const Tenis2 = {
    tamanho,
    modelo: modeloTenis,
    marca,
}

console.log(Tenis2);

//Criando um objeto com funções/métodos
const Tenis3 = {
    //Funções dentro do objeto
    //Escrevendo na sintaxe curta
    getTamanho() {
        return 35;
    },
    getModelo() {
        return 'Runner';
    },
    getMarca() {
        return 'Puma';
    }
}

console.log(Tenis3.getTamanho());
console.log(Tenis3.getModelo());
console.log(Tenis3.getMarca());