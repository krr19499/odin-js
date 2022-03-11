//use a map to identify the winning scenarios for the pool;
const options = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

const pool = ["rock", "paper", "scissor"];
function computerPlay() {
  let chooser = Math.floor(Math.random() * 3);
  console.log("chooser " + chooser);
  return pool[chooser];
}

function letsPlay(player, computerSelection) {
  let playerSelection = "" + player;
  playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      if (
        computerSelection === options.rock &&
        playerSelection !== computerSelection
      ) {
        console.log("player1 wins" + computerSelection + " " + playerSelection);
        return 1;
      } else {
        console.log(
          "player1 loses" + computerSelection + " " + playerSelection
        );

        return 2;
      }

    case "paper":
      if (
        computerSelection === options.paper &&
        playerSelection !== computerSelection
      ) {
        console.log("player1 " + computerSelection + " " + playerSelection);
        return 1;
      } else {
        return 2;
      }
    case "scissor":
      if (
        computerSelection === options.scissor &&
        playerSelection !== computerSelection
      ) {
        console.log("player1 " + computerSelection + " " + playerSelection);
        return 1;
      } else {
        return 2;
      }

    default:
      return 0;
  }
}

function game() {
  let computer = 0,
    person = 0;
  for (let i = 0; i < 5; i++) {
    let input = prompt("Pick rock, paper or scissor");
    console.log("input: " + input);

    let res = letsPlay(input, computerPlay());
    console.log("res " + res);
    if (res === 1) person += 1;
    if (res === 2) computer += 1;
  }
  console.log("computer " + computer + " person: " + person);
  if (computer > person) {
    return "Computer won better luck next time";
  }
  if (person > computer) {
    return "You won !";
  } else {
    return "Nobody Won What!?";
  }
}

console.log(game());
