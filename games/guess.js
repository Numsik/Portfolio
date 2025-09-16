let min = 1;
let max = 0;
let typ = 0;
let pcmove = 0;
let guesses = 0;

const showyouinput = document.querySelector('.typewihbtn');
const modeselection = document.querySelector('.modeselection');
const textselect = document.querySelector('.textselect');
const whatyouhadtodo = document.querySelector('.whatyouhadtodo');
const winloss = document.querySelector('.winloss');
const typinpt = document.querySelector('.typ');
const home = document.querySelector('.home')


home.addEventListener('click', () =>{
    console.log("TOHLE JDE")
    window.location.href = "../index.html";
});

function showinput() {
    showyouinput.style.display = "block";
    modeselection.style.display = "none";
    textselect.style.display = "none";
}

function PcMove() {
    if (max === 0) return;
    let random = Math.random() * (max - min) + min;
    pcmove = Math.round(random);
    console.log(pcmove);
}

function gettyp() {
    typ = Number(typinpt.value);
}

function isittrue(player, pc) {
    if (guesses < 7) {
        if (player > pc) {
            whatyouhadtodo.textContent = `Too high, try again`;
            guesses++;
        } else if (player < pc) {
            whatyouhadtodo.textContent = `Too low, try again`;
            guesses++;
        } else {
            winloss.style.color = "Green"
            winloss.textContent = `You win`;
            whatyouhadtodo.textContent = '';
        }
    } else {
        winloss.style.color = "Red"
        winloss.textContent = `You lost`;
        whatyouhadtodo.textContent = '';
    }
}

document.querySelector('.easymode').addEventListener('click', () => {
    max = 10;
    PcMove();

    document.addEventListener('DOMContentLoaded', () => {
        const homeBtn = document.querySelector('.home');
        if (homeBtn) {
            homeBtn.addEventListener('click', function() {
                window.location.href = '../index.html';
            });
        }
    });
    showinput();
});

document.querySelector('.mediummode').addEventListener('click', () => {
    max = 20;
    PcMove();
    showinput();
});

document.querySelector('.hardmode').addEventListener('click', () => {
    max = 50;
    PcMove();
    showinput();
});

document.querySelector('.resetgame').addEventListener('click', () => {
    showyouinput.style.display = "none";
    modeselection.style.display = "block";
    textselect.style.display = "block";
    guesses = 0;
    whatyouhadtodo.textContent = '';
    winloss.textContent = '';
});

document.querySelector('.SendValues').addEventListener('click', () => {
    gettyp();
    isittrue(typ, pcmove);
    typinpt.value = ''
});
