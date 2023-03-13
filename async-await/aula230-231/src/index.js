require("core-js");
require("regenerator-runtime");

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

function moverAtirando(x, y, z) {
  ajustarPosicao(x, y, z).then(coordenadas => {
    console.log(`Arma ajustada para as coordenadas (${coordenadas[0]}, ${coordenadas[1]}, ${coordenadas[2]})`);
    return atirar(...coordenadas);
  }).then(coordenadas => {
    console.log(`Começando a atirar nas coordenadas (${coordenadas[0]}, ${coordenadas[1]}, ${coordenadas[2]})`);
  }).catch(erro => { console.log(erro); });
}

moverAtirando(20, 30, 91);