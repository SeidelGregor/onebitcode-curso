import sistemaSolar from './sistema_solar';
import Conversor from './conversor';
const c = new Conversor();
sistemaSolar.planetas.forEach(planeta => {
    let nome = planeta.nome;
    let distanciaUA = planeta.distancia.toFixed(2);
    let distanciaKM = c.converter(distanciaUA).toFixed(2);
    const div = document.querySelector('#sistemaSolar');
    const paragrafo = document.createElement('p');
    paragrafo.textContent = (`${nome} está a ${distanciaUA}UA ou ${distanciaKM}Km do Sol (1UA = ${c.UA}Km)`);
    div.appendChild(paragrafo);
});

