import Nave from './nave';
import Motor from './verificacao_decolagem';

const sophia = new Nave("Sophia", 10, 5, 70);
const amsterda = new Nave("Amsterdã", 14, 10, 40);
const estrelaAna = new Nave("Estrela Anã", 20, 4, 80);


const motorS = new Motor(sophia);
const motorA = new Motor(amsterda);
const motorE = new Motor(estrelaAna);

motorS.ligar();
motorA.ligar();
motorE.ligar();