//import "core-js";
//import "regenerator-runtime";
//import "@babel/polyfill";

let armaLaser = {
  cadencia: 30,
  posicao: [0, 0, 0],
  atirando: false
}

async function ajustarPosicao(x, y, z) {
  if (z > 90 || z < -90) {
    return Promise.reject("Angulo invalido");
  }
  armaLaser.posicao = [x, y, z];
  return ([x, y, z]);
}

async function atirar(x, y, z) {
  armaLaser.atirando = true;
  return ([x, y, z]);
}

function recarregar(){
  return new Promise ((resolve) =>{
    setTimeout(() =>{
      resolve("Recarga bem sucesida");
    }, 2500);
  });
}

async function moverAtirando(x, y, z) {
  try {
    const resultados = await Promise.all([ajustarPosicao(x, y, z), recarregar()]);
    let novasCoordenadas = resultados[0] ;
    console.log(`Arma ajustada para as coordenadas (${novasCoordenadas[0]}, ${novasCoordenadas[1]}, ${novasCoordenadas[2]})`);
    console.log(resultados[1]);
    let coordenadasTiro = await atirar(...novasCoordenadas);
    console.log(`Começando a atirar nas coordenadas (${coordenadasTiro[0]}, ${coordenadasTiro[1]}, ${coordenadasTiro[2]})`);   
  } catch (erro) {
    console.log(erro);
  }
}

moverAtirando(50, 0, 20);