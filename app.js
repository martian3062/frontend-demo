const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset-btn');

let currentPlayer = 'X';
let gameActive = true;
let gameState = Array(9).fill(null);

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],  
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Function to highlight winning boxes
function highlightWinner(pattern) {
  pattern.forEach(index => {
    boxes[index].classList.add('win');
  });
}

// Function to check for a winner
function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      gameActive = false;
      highlightWinner(pattern);
      setTimeout(() => alert(`${gameState[a]} wins!`), 200);
      return;
    }
  }

  if (!gameState.includes(null)) {
    gameActive = false;
    setTimeout(() => alert("It's a draw!"), 200);
  }
}

// Click handler
boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    if (!gameActive || gameState[index]) return;

    box.textContent = currentPlayer;
    box.classList.add('filled', currentPlayer === 'X' ? 'x-color' : 'o-color');
    gameState[index] = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  });
});

// Reset button
resetBtn.addEventListener('click', () => {
  gameActive = true;
  currentPlayer = 'X';
  gameState.fill(null);

  boxes.forEach(box => {
    box.textContent = '';
    box.classList.remove('filled', 'win', 'x-color', 'o-color');
  });
});
