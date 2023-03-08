class motorDecolagem{
    constructor(nave){
        this.nave = nave;
    }
    ligar(){
        this.verificarCarga().then(carga => {
            console.log(`${this.nave.nome} Partida autorizada: carga atual em ${carga.toFixed(2)}%`)
        }).catch(carga =>{
            console.log(`${this.nave.nome} Partida não autorizada: carga atual em ${carga.toFixed(2)}%`)
        });
    }
    verificarCarga(){
        return new Promise((resolve, reject) =>{
            const carga = this.nave.porcentagemCarga();
            if(carga >= 30){
                resolve(carga);
            }else{
                reject(carga);
            }
        });
    }
}

export default motorDecolagem;