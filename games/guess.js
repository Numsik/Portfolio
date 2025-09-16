let min = 0;
let max = 10;
let typ = 0;
let pcmove = 0;
let guesses = 0;


const mininpt = document.querySelector('.min');
const maxinpt = document.querySelector('.max');



const typinpt = document.querySelector('.typ');



function gettyp(){
    typ = Number(typinpt.value);
    console.log(typ)
}
document.querySelector('.SendValues').addEventListener('click', () =>{
    gettyp();
    isittrue(typ, pcmove);
})
function PcMove(){
    let random = (Math.random() * (max - min) + min);
    let Move = Math.round(random)
    pcmove = Number(Move)
    console.log(pcmove)
    
}
function isittrue(player, pc){
    if (guesses < 8){
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