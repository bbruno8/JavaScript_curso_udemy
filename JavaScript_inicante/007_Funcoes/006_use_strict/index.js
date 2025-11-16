//use strict mode ativa um modo mais rigoroso de verificação de erros no JavaScript
'use strict';
//Exemplo de uso do 'use strict'
function exemplo() {
    // Sem 'use strict', a variável x seria criada como uma variável global 
    // se não fosse declarada com var, let ou const.
    // Com 'use strict', isso gera um erro.
    x = 10; // Isso causará um erro em 'use strict'
    console.log(x);
}