const rock = document.querySelector('.Rock');
const paper = document.querySelector('.Paper');
const scissors = document.querySelector('.Scissors');
const winloss = document.querySelector('.winloss')
const scoretext = document.querySelector('.score');
const answers = document.querySelector('.answers');
const winrate = document.querySelector('.winrate');


document.querySelector('.home').addEventListener('click', () =>{
    window.location.href = "../index.html"
})

let score = 0;
let pcmove;
let playermove;
let howmanytimesplayed = 0;


rock.addEventListener('click', () =>{
    computer();
    playerpick('rock');
    whowin(playermove, pcmove)
})
paper.addEventListener('click', () =>{
    computer();
    playerpick('paper');
    whowin(playermove, pcmove)
})
scissors.addEventListener('click', () =>{
    computer();
    playerpick('scissors');
    whowin(playermove, pcmove)
})






function computer(){
    let number = Math.random() * 3;
    if (number < 1){
        pcmove = "scissors"
    }else if(number < 2){
        pcmove = "rock"
    }else{
        pcmove = "paper"
    }
    console.log(pcmove)
}


function playerpick(move){
    if (move === "scissors"){
        playermove = "scissors"
    }else if (move === "rock"){
        playermove = "rock"
    }else{
        playermove = "paper"
    }
    console.log(playermove)

}
function whowin(player, pc){
    howmanytimesplayed ++;
    let howmuchwin = Math.round((score / howmanytimesplayed) * 100)
    winrate.textContent = `Winrate : ${howmuchwin}%`

    console.log(howmanytimesplayed)
    answers.innerHTML = `You pick: <span class="bigger">${playermove}</span>  <br></br> Pc pick: <span class="bigger">${pcmove}</span>`
    if (player === "scissors" && pc === "paper"){
        winloss.textContent = `You win`
        winloss.style.color = "Green"
        score++;
        scoretext.textContent = `Wins: ${score}`
    }else if (player === "rock" && pc === "scissors"){
       winloss.textContent = "You win"
       winloss.style.color = "Green"
       score++;
       scoretext.textContent = `Wins: ${score}`
    }else if (player === "paper" && pc === "rock"){
        winloss.textContent = "You win"
        winloss.style.color = "Green"
        score++;
        scoretext.textContent = `Wins: ${score}`
    }else if (player === "scissors" && pc === "scissors"){
        winloss.textContent = "Tie"
        winloss.style.color = "Black"
    }else if (player === "rock" && pc === "rock"){
        winloss.textContent = "Tie"
        winloss.style.color = "Black"
    }else if (player === "paper" && pc === "paper"){
        winloss.textContent = "Tie"
        winloss.style.color = "Black"
    }else{
        winloss.textContent = "You Lost"
        winloss.style.color = "Red"
    }
}