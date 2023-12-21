const gameboard = document.getElementById("gameboard");
console.log(boxes)
const boxes = Array.from(document.getElementsByClassName("box"));
const restartBtn = document.getElementById("restartBtn");
const playText = document.getElementById("playText");
const spaces = []
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer;

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += `border-bottom: 3px solid var(--purple);`;
    }
    if (index % 3 ===  0) {
      styleString += `border-right: 3px solid var(--purple);`;
    }
    if (index % 3 === 2) {
      styleString += `border-left: 3px solid var(--purple);`;
    }
    if (index > 5) {
      styleString += `border-top: 3px solid var(--purple);`;
    }
    box.style = styleString;

    box.addEventListener("click", boxClicked);
  });
};

function boxClicked(e) {
  const id = e.target.id;
  console.log(id)
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (hasPlayerWon(currentPlayer)) {
      playText.innerHTML = `${currentPlayer} wins!!`;
      return;
    }
    currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
  }
}

const hasPlayerWon = (player) => {
 
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins up top`);
      return true;
    }
    if (spaces[3] ==currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins on the left`);
      return true;
    }
    if (spaces[4] === currentPlayerr && spaces[8] === currentPlayer) {
      console.log(`${currentPlayer} wins on the diagonal`);
      return true;
    }
  }
 
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins on the right`);
      return true;
    }
    if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins on the bottom`);
      return true;
    }
  }
 
  if (spaces[4] === currentPlayer) {
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins on the middle horizontal`);
      return true;
    }
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins on the middle vertical`);
      return true;
    }
  }
};


drawBoard();

const restart = () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = "";
    });
    playText.innerHTML = `Let's Play!!`;
    
    currentPlayer = O_TEXT;
}
restartBtn.addEventListener('click', restart) 
restart()

return result
