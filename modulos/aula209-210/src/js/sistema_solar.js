const Planeta = require('./planeta');
const sistema = require('./informacoes_sistema');

const mercurio =  new Planeta("Mercurio", 0.39);
const venus =  new Planeta("Venus", 0.72);
const terra =  new Planeta("Terra", 1);
const marte =  new Planeta("Marte", 1.52);
const jupiter =  new Planeta("Jupiter", 5.2);
const saturno =  new Planeta("Saturno", 9.53);
const urano =  new Planeta("Urano", 19.1);
const netuno =  new Planeta("Netuno", 30);

sistema.planetas.push(mercurio);
sistema.planetas.push(venus);
sistema.planetas.push(terra);
sistema.planetas.push(marte);
sistema.planetas.push(jupiter);
sistema.planetas.push(saturno);
sistema.planetas.push(urano);
sistema.planetas.push(netuno);

const sistema_solar = sistema;

module.exports = sistema_solar;

