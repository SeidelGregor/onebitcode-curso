class Planeta {
    constructor(nome, distancia){
        this.nome = nome;
        this.distancia = distancia;
    }
    getNome(){
        return this.nome;
    }
    getDistancia(){
        return this.distancia;
    }
}

export default Planeta;