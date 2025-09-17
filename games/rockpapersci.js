const rock = document.querySelector('.Rock');
const paper = document.querySelector('.Paper');
const scissors = document.querySelector('.Scissors')
let pcmove;
let playermove;




function computer(){
    let number = Math.random() * (3 - 0) + 0;
    console.log(number)
    if (number < 1){
        pcmove = "scissors"
    }else if(number < 2){
        pcmove = "rock"
    }else{
        pcmove = "paper"
    }
    console.log(pcmove)
}
computer();
function playerpick(move){
    if (move === "scissors"){
        playermove = "scissors"
    }else if (move === "rock"){
        playermove = "rock"
    }else{
        playermove = "paper"
    }

}
function whowin(player, pc){
    if (player === "scissors" && pc === "paper"){
        console.log("player win")
    }else if (player === "rock" && pc === "scissors"){
        console.log("player won")
    }else if (player === "paper" && pc === "rock"){
        console.log("player won")
    }else{
        console.log("pc wonn")
    }
}