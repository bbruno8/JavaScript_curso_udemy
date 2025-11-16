//Funcitons declaration

function isValid(){
    const soma = 1 + 1;
    if(soma === 2){
        return true;
    }
    return false;
}

console.log(isValid());

//Function expression
const isValidExp = function(){
    const soma = 1 + 1;
    return soma;
};

console.log(isValidExp());

//Arrow function
const isValidArrow = () => 2 + 2;

console.log(isValidArrow());
