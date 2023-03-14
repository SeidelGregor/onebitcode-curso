class motorDecolagem {
    constructor(nave) {
        this.nave = nave;
    }
    async ligar() {
        try{
            const resultados = await Promise.all([await this.verificarCarga(), await this.testarEscudo()]);
            this.nave.escudo = await this.normalizarEscudo(resultados[0]);
            console.log(`${this.nave.nome} Partida autorizada: carga atual em ${this.nave.porcentagemCarga().toFixed(2)}%, escudos em ${this.nave.escudo}`);
        }catch(erro){
            console.log(erro);
        }
    }
    async verificarCarga() {
        const carga = this.nave.porcentagemCarga();
        if (carga >= 30) {
            return carga;
        } else {
            return Promise.reject(`${this.nave.nome}: carga atual em ${carga.toFixed(2)}% pouca carga`);
        }
    }
    async testarEscudo() {
        const escudo = this.nave.escudo;
        if (escudo * 2 < 100) {
            return Promise.reject(`${this.nave.nome}: carga de escudo insuficiente`);
        } else {
            const escudoDuplicado = escudo * 2;
            return escudoDuplicado;
        }
    }
    async normalizarEscudo(escudo) {
        const escudoNormalizado = escudo * 0.75;
        if (escudoNormalizado > 120) {
            return Promise.reject(`${this.nave.nome}: sobrecarga de escudo`);
        } else {
            return escudoNormalizado;
        }
    }
}

export default motorDecolagem;