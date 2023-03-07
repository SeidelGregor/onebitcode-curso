const autores = ["Machado de Assis", "Guimarães Rosa", "Carlos Drummond Andrade"];

console.log(autores);//sem spread
console.log(...autores);//com spread

/**operador spread funciona passando os valores de um array e não o array todo*/

function MUA (velocidadeInicial, aceleracao, tempo){
    return velocidadeInicial + (aceleracao*tempo);
}

const corpo1 = [0, 9.8, 15];
const corpo2 = [5, 3, 30];

//usando operador espread pra passar valores para funções
console.log(MUA(...corpo1));
console.log(MUA(...corpo2));