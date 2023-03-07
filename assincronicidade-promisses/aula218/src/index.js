//executa uma vez depois do tempo informado em milisegundos
const setTimeoutId = setTimeout(() => {
    console.log("setTimeout");
}, 2000);

//para a execução do setTimeout tendo como parametro o id da função
clearTimeout(setTimeoutId);

let segundos = 1;
//executa a cada intervalo de tempo informado em milisegundos
const setIntervalId = setInterval(() => {
    console.log(`${segundos} segundo(s)`);
    //para a execução da função set interval depois de 10 segundos
    segundos >= 10 ? clearInterval(setIntervalId) : segundos++;
}, 1000);