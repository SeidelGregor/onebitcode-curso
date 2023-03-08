class Nave {
    constructor(nome, cargaMaxima, cargaAtual){
        this.nome = nome;
        this.cargaMaxima = cargaMaxima;
        this.cargaAtual = cargaAtual;
    }
    porcentagemCarga(){
        return (this.cargaAtual * 100)/ this.cargaMaxima; 
    }
}
export default Nave;