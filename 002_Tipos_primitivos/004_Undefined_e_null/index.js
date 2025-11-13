let undefined;// variável declarada mas não inicializada
console.log(resposta); // undefined, pois a variável não foi inicializada

let valorNulo = null;
console.log(valorNulo); // null, valor intencionalmente vazio pode vir tbm com ""

console.log(null===undefined); // false, tipos diferentes
console.log(null==undefined);  // true, valores considerados iguais