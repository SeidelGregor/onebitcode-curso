require("core-js");
require("regenerator-runtime");

let armaLaser = {
  cadencia: 30,
  posicao: [0, 0, 0],
  atirando: false
}

async function ajustarPosicao(x, y, z) {
    armaLaser.posicao = [x, y, z];
    return([x, y, z]);
}

async function atirar(x, y, z) {
    armaLaser.atirando = true;
    return([x, y, z]);
}

function moverAtirando(x, y, z) {
    ajustarPosicao(x, y, z).then(coordenadas => {
    console.log(`Arma ajustada para as coordenadas (${coordenadas[0]}, ${coordenadas[1]}, ${coordenadas[2]})`);
    return atirar(...coordenadas);
  }).then(coordenadas => {
    console.log(`Começando a atirar nas coordenadas (${coordenadas[0]}, ${coordenadas[1]}, ${coordenadas[2]})`);
  })
}

moverAtirando(20, 30, 50);