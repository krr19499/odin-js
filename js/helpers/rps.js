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
        if(        playerSelection !== computerSelection
          ){
            if (
              computerSelection === options.rock 
            ) {
              console.log("player1 wins" + computerSelection + " " + playerSelection);
              return 1;
            } else {
              console.log(
                "player1 loses" + computerSelection + " " + playerSelection
              );
      
              return 2;
            }    
          }
          return 0;
        
  
      case "paper":
        if(        playerSelection !== computerSelection
          ){
            if (
              computerSelection === options.paper
            ) {
              console.log("player1 " + computerSelection + " " + playerSelection);
              return 1;
            } else {
              return 2;
            }
          }
          return 0;  
      
      case "scissor":
        if(        playerSelection !== computerSelection
          ){
            if (
              computerSelection === options.scissor 
            ) {
              console.log("player1 " + computerSelection + " " + playerSelection);
              return 1;
            } else {
              return 2;
            }
          
          }
          return 0;
        
      default:
        return 0;
    }
  }

 