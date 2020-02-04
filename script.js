function computerPlay(){
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 10) % 3;
  return choices[choice];
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();

  if(playerSelection == computerSelection){
      alert("You both chose " + playerSelection + "! Draw!");
      return "draw";
    }
  if(playerSelection == "rock"){
    if (computerSelection == "paper"){
      alert("The computer played: " + computerSelection);
      alert("You lost! Paper beats rock!");
      return "lost";
    }
    else {
      alert("The computer played: " + computerSelection);
      alert("You won! Rock beats scissors!");
      return "won";
    }
  }
  else if(playerSelection == "paper"){
    if (computerSelection == "rock"){
      alert("The computer played: " + computerSelection);
      alert("You won! Paper beats rock!");
      return "won";
    }
    else {
      alert("The computer played: " + computerSelection);
      alert("You lost! Scissors beats paper!");
      return "lost";
    }
  }
  else{
    if (computerSelection == "rock"){
      alert("The computer played: " + computerSelection);
      alert("You lost! Rock beats Scissors!");
      return "lost";
    }
    else {
      alert("The computer played: " + computerSelection);
      alert("You won! Scissors beats paper!");
      return "won";
    }
  }
}

function game(){
  let winCount = 0;
  let lossCount = 0;
  let playerChoice;
  alert("This game has 5 rounds!");
  for(let i = 0; i < 5; i++){
    alert("Round : " + (i + 1) + "!");
    playerChoice = prompt("Pick your move: Enter Rock, Paper or Scissors");
    let result = playRound(playerChoice, computerPlay());
    
    if(result == "won"){
      winCount += 1;
    }
    else if(result == "lost"){
      lossCount += 1;
    }
    
  }

  if (winCount > lossCount){
    alert("You won this game!");
  }
  else if(winCount == lossCount){
    alert("The game was a draw!");
  }
  else{
    alert("You lost this game!");
  }

}

game();