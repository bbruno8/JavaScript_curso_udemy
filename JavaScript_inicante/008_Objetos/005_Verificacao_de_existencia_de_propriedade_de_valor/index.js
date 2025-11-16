const tenis = {
    tamanho: 45,
    modelo: 'Air Max',
    marca: 'Nike'
};

//Verificando se a propriedade 'cor' existe no objeto tenis
console.log(tenis.hasOwnProperty('cor')); //Retorna false, pois a propriedade não existe
//Verificando se a propriedade 'modelo' existe no objeto tenis  
console.log(tenis.hasOwnProperty('modelo')); //Retorna true, pois a propriedade existe

//Usado para fazer uma validação
if(tenis.hasOwnProperty('marca')){
    console.log(`A marca do tênis é: ${tenis.marca}`);
}else{
    console.log('A propriedade marca não existe no objeto tenis');
}

//Outra forma de verificar se a propriedade existe no objeto é usando o operador 'in'
console.log("cor" in tenis); //Retorna false, pois a propriedade não existe
console.log("tamanho" in tenis); //Retorna true, pois a propriedade existe

if("cor" in tenis){
    console.log(`A cor do tênis é: ${tenis.cor}`);
}else{
    console.log('A propriedade cor não existe no objeto tenis');
}