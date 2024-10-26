let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true ; 

let WinPattern = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    console.log("dibc");
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
    })
});     

const checkWinner = () => {
    for (let patterns of WinPattern){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }        
    }
}

const showWinner = (winner) => {
    msg.innerText = `The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    newGameBtn.classList.remove("hide");
    disableBtn();
}

const resetGame = () => {
    turnO=true;
    count=0;
    enableBtn();
    msgContainer.classList.add("hide");
    newGameBtn.classList.add("hide");
}

const disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
        
resetBtn.addEventListener ("click" , (resetGame));
newGameBtn.addEventListener("click" , (resetGame));

