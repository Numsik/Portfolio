const home = document.querySelector('.home');
home.addEventListener('click', () => {
  window.location.href = "../index.html";
});

let crossboard = ["", "", "", "", "", "", "", "", ""];

const boardelement = document.querySelector('.board');
const resetgame = document.querySelector('.resetgame');
const playgame =  document.querySelector('.playgame');
const showgame = document.querySelector('.showonplaybtn');
const textwhowon = document.querySelector('.whowon')

playgame.addEventListener('click', () =>{
    showgame.style.display = "flex";
});


function renderboard() {
  boardelement.innerHTML = "";
  crossboard.forEach((cell, i) => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.textContent = cell;
    div.addEventListener('click', () => {
      makeamove(i);
      renderboard();
      checkwin();
    });
    boardelement.appendChild(div);
  });
}

let currentplayer = "X";

function makeamove(index) {
  if (crossboard[index] === "") {
    crossboard[index] = currentplayer;
    currentplayer = currentplayer === "X" ? "O" : "X";
  }
}

function checkwin() {
  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let combo of wins) {
    const [a, b, c] = combo;
    if (crossboard[a] && crossboard[a] === crossboard[b] && crossboard[a] === crossboard[c]) {
      textwhowon.textContent = `${crossboard[a]} won!`;
      return;
    }
  }
}
resetgame.addEventListener('click', () =>{
    crossboard = ["", "", "", "", "", "", "", "", ""];
    currentplayer = "X"
    renderboard();
    textwhowon.textContent = "";
})


renderboard();
