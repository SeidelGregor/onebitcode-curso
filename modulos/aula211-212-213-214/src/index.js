import Nave from './naves';
import armamentos from './armamentos';
import { escudos, emissoes } from './defesas';

const nave = new Nave("Nabucodonossor", "Morfeus", armamentos.explosao[1], emissoes[0]);
console.log(nave);