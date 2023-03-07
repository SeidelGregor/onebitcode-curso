class Conversor{
    UA = 149587870;
    converter(distanciaPlaneta){
        return this.UA * distanciaPlaneta;
    }
}

export default Conversor;