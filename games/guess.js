let min = 0;
let max = 0;
let typ = 0;
let pcmove = 0;
let guesses = 0;


const showyouinput = document.querySelector('.typewihbtn');

function showinput(){
    showyouinput.style.display = "block"
}

document.querySelector('.easymode').addEventListener('click', () =>{
    max = 10;
    PcMove()
    showinput()
});
document.querySelector('.mediummode').addEventListener('click', () =>{
    max = 20;
    PcMove()
    showinput()
});
document.querySelector('.hardmode').addEventListener('click', () =>{
    max = 50;
    PcMove()
    showinput()
});
document.querySelector('.resetgame').addEventListener('click', () =>{
    showyouinput.style.display = "none"
})


const mininpt = document.querySelector('.min');
const maxinpt = document.querySelector('.max');



const typinpt = document.querySelector('.typ');



function gettyp(){
    typ = Number(typinpt.value);
}
document.querySelector('.SendValues').addEventListener('click', () =>{
    gettyp();
    isittrue(typ, pcmove);
})
function PcMove(){
    if (max === 0){
        console.log('Before select dificulty');
        return;
    }
    let random = (Math.random() * (max - min) + min);
    let Move = Math.round(random)
    pcmove = Number(Move)
     
}
function isittrue(player, pc){
    if (guesses < 7){
        if (player > pc){
        console.log('too high try again')
        guesses ++;
        }else if(player < pc){
        console.log("to low try again")
        guesses ++;
        }else{
        console.log("you are right")
        }
    }else{
        console.log('you lost')
    }


}
PcMove();