class Nave {
    constructor(nome, cargaMaxima, cargaAtual, escudo) {
        this.nome = nome;
        this.cargaMaxima = cargaMaxima;
        this.cargaAtual = cargaAtual;
        this.escudo = escudo;
    }
    porcentagemCarga() {
        return (this.cargaAtual * 100) / this.cargaMaxima;
    }
}
export default Nave;