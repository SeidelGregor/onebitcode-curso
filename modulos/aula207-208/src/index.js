const Planeta = require('./planeta');
const sitemaSolar = require('./sistema_solar');
const moment = require('moment');

const terra = new Planeta("Terra", 510100000);
sitemaSolar.planetas.push(terra);
sitemaSolar.planetas.push(new Planeta("Marte", 144800000));
sitemaSolar.planetas.push(new Planeta("Mercurio", 74800000));
sitemaSolar.planetas.push(new Planeta("Saturno", 4270000000));

console.log(sitemaSolar);
console.log(moment().format('hh:mm:ss'));