let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let resultPanel = document.querySelector(".resultPanel");
let newGameBtn = document.querySelector(".newGameBtn");
let chongoMsg = document.querySelector(".chongoMsg");
let msg = document.querySelector("#msg");


const wunhide = (winner) => {
  msg.innerText = `Chongos!! the winner is ${winner}`;
  resultPanel.classList.remove("hide");
  chongoMsg.classList.remove("hide");
}

const dunhide = () => {
  msg.innerText = `Nobody Won, except me ofc xd`;
  resultPanel.classList.remove("hide");
  chongoMsg.classList.remove("hide");
}

const checkWinner = () => {
  for (let i of winPattern) {
    let p1 = boxes[i[0]].innerText;
    let p2 = boxes[i[1]].innerText;
    let p3 = boxes[i[2]].innerText;
    if(p1 != "" && p2 != "" && p3 != ""){
      if(p1 === p2 && p2 === p3){
        console.log("winner", p1);
        wunhide(p1);
      }
    }
  }
}

// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turn0 = true;
  count = 0;
  enableBoxes();
  resultPanel.classList.add("hide");
};

let count = 0;
let turn0 = true;
let winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    box.disabled = true;
    if(turn0){
      box.innerText = "O";
      turn0 = false;

    } else{
      box.innerText = "X";
      turn0 = true;
    } 
    count++;   
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      dunhide();
    }
  })
})

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);