
const home = document.querySelector('.home');
home.addEventListener('click', () =>{
    window.location.href = "../index.html"
});

let crossboard = ["", "","",
                    "","","",
                    "","",""]

const boardelement = document.querySelector('.board');



function renderboard(){
    boardelement.innerHTML = "";
    crossboard.forEach((cell, i) =>{
        const div = document.createElement("div");
        div.classList.add("cell");
        div.textContent = cell;
        div.addEventListener('click', () =>{
            makeamove();
        })
        boardelement.appendChild(div)
    })
}