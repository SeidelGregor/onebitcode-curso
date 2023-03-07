class Casa{
    constructor(rua, numero, bairro, area){
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.area = area;
    }

    getRua(){
        return this.rua;
    }
    getNumero(){
        return this.numero;
    }
    getBairro(){
        return this.bairro;
    }
    getArea(){
        return this.area;
    }
}