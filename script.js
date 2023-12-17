let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-game")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
//playerX, playerO
let turnO = true;
let cnt = 0
let flag = 0
const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        cnt+=1;
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
        
    
    })
}) 

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations 🥳🎉! Winner is ${winner}`
    flag = 1
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const resetGame = ()=>{
    turnO = true;
    flag = 0
    cnt = 0
    enableBoxes();
    msgContainer.classList.add("hide")
}

const checkwinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
        console.log(cnt)
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val)
            }
            else if(cnt==9 && flag==0){
                msg.innerText = "Oops! 😅 Game was a Draw. Try again!"
                msgContainer.classList.remove("hide")
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)