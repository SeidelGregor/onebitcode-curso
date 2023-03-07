class Planeta{
    constructor(nome, areaSuperficie){
        this.nome = nome;
        this.areaSuperficie = areaSuperficie;
    }
    rotacao(){
        console.log("Rotacionando");
    }
    getNome(){
        return this.nome;
    }
    getAreaSuperficie(){
        return this.areaSuperficie;
    } 
}

module.exports = Planeta;