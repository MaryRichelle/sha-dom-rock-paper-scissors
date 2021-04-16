let choices = ["rock", "paper", "scissors"];
let playerSelection = "";
const playButton = document.querySelector('#play-button');
const buttons = document.querySelectorAll('.selection');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const computerPicked = document.querySelector('#computer-picked');
const playerPicked = document.querySelector('#player-picked');
const pScore = document.querySelector('#player-score-span');
const cScore = document.querySelector('#computer-score-span');
let results = document.querySelector('#result');
let computerScore = 0;
let playerScore = 0;


 rockButton.addEventListener('click', () =>{
     computerPlay();
     let computerSelection = computerPlay();
     playerPicked.textContent = "rock";
     if( computerSelection === "rock"){
        computerPicked.textContent = "rock";
        results.textContent = " its a tie!"
        results.style.color = "yellow";
     } else if ( computerSelection === "paper"){
        computerPicked.textContent = "paper";
        results.textContent = "you loose!";
        results.style.color = "red";
        computerScore++;
        updateScore();
        finalResult()
     } else {
        computerPicked.textContent = "scissors";
        results.textContent = "you Win";
        results.style.color = "green"
        playerScore++; 
        updateScore(); 
        finalResult()
    }

   });

 paperButton.addEventListener('click', () =>{
     computerPlay();
     let computerSelection = computerPlay();
     playerPicked.textContent = "paper";
     if( computerSelection === "paper"){
        computerPicked.textContent = "paper";
        results.textContent = " its a tie!"
        results.style.color = "yellow";
     } else if ( computerSelection === "scissors"){
        computerPicked.textContent = "scissors";
        results.textContent = "you loose!";
        results.style.color = "red";
        computerScore++;
        updateScore();
        finalResult()
     } else {
        computerPicked.textContent = "rock";
        results.textContent = "you Win";
        results.style.color = "green"
      
        playerScore++;
        updateScore();
        finalResult()
    }

 });

 scissorsButton.addEventListener('click', () =>{
     computerPlay();
     let computerSelection = computerPlay();
     playerPicked.textContent = "scissors";
     if( computerSelection === "scissors"){
        computerPicked.textContent = "scissors";
        results.textContent = " its a tie!";
        results.style.color = "yellow";
     } else if ( computerSelection === "rock"){
        computerPicked.textContent = "rock";
        results.textContent = "you loose!";
        results.style.color = "red";
        computerScore++;
        updateScore();
        finalResult()
     } else {
        computerPicked.textContent = "paper";
        results.textContent = "you Win";
        results.style.color = "green"

        playerScore++;
        updateScore(); 
        finalResult()
    };

 });

function updateScore(){
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}



playButton.addEventListener("click", () => {
    buttons.forEach((buttons) => {
        buttons.removeAttribute("disabled", "");
        playButton.textContent = "Lets Play";
        playButton.style.display = 'none'
    });
});

function computerPlay() {

    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}
console.log("computerPlay", computerPlay());
function disableButtons() {
   
   rockButton.setAttribute("disabled", "");
   paperButton.setAttribute("disabled", "");
   scissorsButton.setAttribute("disabled", "");
 }

 function finalResult() {
   if(playerScore === 5) {
      results.textContent = "You win the game!";
      results.style.color = "green";
      results.style.fontSize = "12px";

      playButton.style.display ="";
      playButton.textContent = "Play Again!";
      disableButtons();
   } else if (computerScore === 5) {
      results.textContent = "You lose the game...";
      results.style.fontSize = "12px";
      results.style.color = "red";
      playButton.style.display ="";
      playButton.textContent = "Play Again!";
     disableButtons();
   }
   playButton.addEventListener("click", () => {
     pScore.textContent = 0;
     cScore.textContent = 0;
     playerScore = 0;
     computerScore = 0;
     playerPicked.textContent = "";
     computerPicked.textContent = "";
     results.textContent = "";
   });
 }




    

