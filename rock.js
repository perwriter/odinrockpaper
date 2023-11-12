function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();

  if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    return "You Win! " + playerChoice + " beats " + computerSelection;
  } else if (playerChoice === computerSelection) {
    return "It's a Tie! Both chose " + playerChoice;
  } else {
    return "You Lose! " + computerSelection + " beats " + playerChoice;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice: rock, paper, or scissors"
    );
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    // Update scores
    const result = playRound(playerSelection, computerSelection);
    if (result.includes("You Win!")) {
      playerScore++;
    } else if (result.includes("You Lose!")) {
      computerScore++;
    }
  }

  // Determine the winner of the game
  if (playerScore > computerScore) {
    console.log(
      "You Win the Game! Final Score: " + playerScore + " - " + computerScore
    );
  } else if (playerScore < computerScore) {
    console.log(
      "You Lose the Game! Final Score: " + playerScore + " - " + computerScore
    );
  } else {
    console.log(
      "It's a Tie! Final Score: " + playerScore + " - " + computerScore
    );
  }
}

// Call the game function to play a 5 round game
game();
