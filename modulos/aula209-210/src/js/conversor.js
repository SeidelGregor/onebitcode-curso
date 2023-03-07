class Conversor{
    UA = 149587870;
    converter(distanciaPlaneta){
        return this.UA * distanciaPlaneta;
    }
}

module.exports = Conversor;