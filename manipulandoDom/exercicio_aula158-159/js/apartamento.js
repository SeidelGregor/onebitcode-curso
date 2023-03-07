class Apartamento extends Casa{
    constructor(rua, numero, bairro, area, numeroAp){
        super(rua, numero, bairro, area);
        this.numeroAp = numeroAp;
    }
    getNumeroAp(){
        return this.numeroAp;
    }
}