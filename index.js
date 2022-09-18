// PEGANDO VARIAVEIS DOM

const bPomo = document.querySelector(`.pomodoro`);
const bShort = document.querySelector(`.short`);
const bLong = document.querySelector(`.long`);
const corpo = document.querySelector(`.primeiro-bloco`);
const corpoCronometro = document.querySelector(`.cronometro`);
const setting = document.querySelector(`.setting-2`);
const settingButton = document.querySelector(`.settingButton`);
const tituloQuit = document.querySelector(`.tituloButtonFecha`);
const backgroundBefore = document.querySelector(`.background-before`);
const pomodoroTimer = document.querySelector(`.pomodoro-input`);
const shortTimer = document.querySelector(`.short-input`);
const longTimer = document.querySelector(`.long-input`);
const body = document.querySelector(`body`);
const header = document.querySelector(`header`);
//// variaveis do CRONOMETRO //////////
const resposta = document.querySelector(`.numero`);
let aux_cronometro = 0;
const startButton = document.querySelector(`.start`);
let contaUp;
let tempoTimer = (pomodoroTimer.value) * 60 * 1000;
let mutex = 0;
let semaforo = 1;



bPomo.addEventListener(`click`, () => {
    clearInterval(contaUp);
    aux_cronometro = 0;
    estisoHome();
    tempoTimer = (pomodoroTimer.value) * 60 * 1000;
    formataTimer(new Date(tempoTimer));
    corpo.style.backgroundColor = `rgba(212, 74, 74, 0.89)`;
    body.style.backgroundColor = `rgba(212, 74, 74, 0.89)`;
    header.style.backgroundColor = `rgba(212, 74, 74, 0.89)`;
    corpoCronometro.style.backgroundColor = `rgba(241, 110, 110, 0.685)`;
    semaforo = 1;
    startButton.style.color = `rgba(212, 74, 74, 0.89)`;
})

// mudando o valor do timer sempre pro pomodoro, talvez a boa seja criar uma variavel timer para cada
bShort.addEventListener(`click`, () => {
    clearInterval(contaUp);
    aux_cronometro = 0;
    estisoHome();
    tempoTimer = (shortTimer.value) * 60 * 1000;
    formataTimer(new Date(tempoTimer));
    // resposta.innerHTML= `<h1>${}</h1>`
    corpo.style.backgroundColor = `rgba(4, 150, 130, 0.877)`;
    body.style.backgroundColor = `rgba(4, 150, 130, 0.877)`;
    header.style.backgroundColor = `rgba(4, 150, 130, 0.877)`;
    corpoCronometro.style.backgroundColor = `rgba(4, 180, 145, 0.622)`;
    semaforo = 2;
    startButton.style.color = `rgba(4, 150, 130, 0.877)`;

})
bLong.addEventListener(`click`, () => {
    clearInterval(contaUp);
    aux_cronometro = 0;
    estisoHome();
    tempoTimer = 300000 * 2;
    formataTimer(new Date(tempoTimer));
    corpo.style.backgroundColor = `rgba(34, 135, 194, 0.966)`;
    body.style.backgroundColor = `rgba(34, 135, 194, 0.966)`;
    header.style.backgroundColor = `rgba(34, 135, 194, 0.966)`;
    corpoCronometro.style.backgroundColor = `rgba(27, 166, 247, 0.5)`;
    semaforo = 3;
    startButton.style.color = `rgba(34, 135, 194, 0.966)`;
})


/////   PARTE DO CRONOMETRO ///////

function estisoHome() {

    startButton.textContent=`START`;
    startButton.style.height = `4em`;
    startButton.style.marginTop = `5%`;
    startButton.style.borderBottom = `6px solid rgba(0, 0, 0, 0.171)`;
}

function inicia() {
    
    contaUp = setInterval(() => {
       
        aux_cronometro += 1000;
        let respostaCompleta = new Date(tempoTimer - aux_cronometro);
        formataTimer(respostaCompleta);

    }, 1000);
   
    mutex = 1;
}
function formataTimer(timer) {
    let minutos = timer.getMinutes();
    let segundos = timer.getSeconds();
    if (minutos < 10) minutos = `0${minutos}`;
    if (segundos < 10) segundos = `0${segundos}`;
    let respostaPronta = (minutos + `:` + segundos);
    resposta.innerHTML = `<h3>${respostaPronta}<h3>`;
}

startButton.addEventListener(`click`, () => {
    if (mutex == 1) {
        clearInterval(contaUp);

        estisoHome();
        mutex = 0;

        return;
    }
    startButtonAtivadoEstilo();
    inicia();
});


function startButtonAtivadoEstilo(){
    startButton.style.borderBottom = `2px solid black`
    startButton.textContent= `STOP`;
}



////  PARTE DE ANIMACOES BoTOES
function fechaSetting() {
    setting.classList.remove(`setting`);
    setting.classList.add(`setting-2`);
    backgroundBefore.classList.remove(`background`);
    if (semaforo === 1) {
        tempoTimer = (pomodoroTimer.value) * 60 * 1000;
        formataTimer(new Date(tempoTimer));
        return;
    }
    if (semaforo === 2) {
        tempoTimer = (shortTimer.value) * 60 * 1000;
        formataTimer(new Date(tempoTimer));
        return;
    }
    tempoTimer = (longTimer.value) * 60 * 1000;
    formataTimer(new Date(tempoTimer));
}

settingButton.addEventListener(`click`, () => {
    setting.classList.add(`setting`);
    setting.classList.remove(`setting-2`);
    backgroundBefore.classList.add(`background`);
    backgroundBefore.addEventListener(`click`, fechaSetting);



});
tituloQuit.addEventListener(`click`, fechaSetting);


