class motorDecolagem {
    constructor(nave) {
        this.nave = nave;
    }
    ligar() {
        const verCarga = this.verificarCarga();
        const verEscudo = this.testarEscudo();
        Promise.all([verEscudo, verCarga]).then(valores => {
            return this.normalizarEscudo(valores[0]);
        }).then(escudo => {
            this.nave.escudo = escudo;
            console.log(`${this.nave.nome} Partida autorizada: carga atual em ${this.nave.porcentagemCarga().toFixed(2)}%, escudos em ${this.nave.escudo}`);
        }).catch(erro => {
            console.log(erro)
        });
    }
    verificarCarga() {
        return new Promise((resolve, reject) => {
            const carga = this.nave.porcentagemCarga();
            if (carga >= 30) {
                resolve(carga);
            } else {
                reject(`${this.nave.nome}: carga atual em ${carga.toFixed(2)}% pouca carga`);
            }
        });
    }
    testarEscudo() {
        return new Promise((resolve, reject) => {
            const escudo = this.nave.escudo;
            //console.log(escudo);
            if (escudo * 2 < 100) {
                reject(`${this.nave.nome}: carga de escudo insuficiente`);
            } else {
                const escudoDuplicado = escudo * 2;
                resolve(escudoDuplicado);
            }
        });
    }
    normalizarEscudo(escudo) {
        return new Promise((resolve, reject) => {
            const escudoNormalizado = escudo * 0.75;
            console.log(escudoNormalizado);
            if (escudoNormalizado > 120) {
                reject(`${this.nave.nome}: sobrecarga de escudo`);
            } else {
                resolve(escudoNormalizado);
            }
        });
    }
}

export default motorDecolagem;