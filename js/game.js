//get values

const paper= document.getElementById('paper')
//console.log(paper.id)
const rock= document.getElementById('rock')
const scissor= document.getElementById('scissor')
const leftOp = document.querySelector('.leftOp')
const OGSTATE = document.body
const clone = OGSTATE.cloneNode(true)
let click;
const EMOJIS ={
  paper :  "0x270B",
  rock:"0x1FAA8",
  scissor:"0x2702",
}
//



//add eventlisterners



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

//add event listeners


leftOp.addEventListener('click',handleEvents
,{once:true})

function handleEvents(e){
  console.log(e.target)
  switch (e.target.id) {
    case "rock":
      creator(e)  
       
      break;
    case "paper":
      creator(e)
      break;
    case "scissor":
      creator(e)
      break;
    default:
  }

}

function creator(e){
  console.log(e.target.id)
  console.log(letsPlay(e.target.id,computerPlay()))
  document.getElementById(e.target.id).remove()
  let cp = computerPlay()
  let computer = document.createElement('div')
  let newPaper = document.createElement('div')
 let fight= document.querySelector('.fight')
 let versus = document.createElement('div')
 let winner =document.createElement('div')
 let body = document.querySelector('body')
 let chooser;
 let button = document.createElement('button')
  //adding properties
  newPaper.className='weapon'
  newPaper.textContent= String.fromCodePoint(EMOJIS[e.target.id])
  newPaper.id=e.target.id
  computer.className="weapon"
  computer.textContent=String.fromCodePoint(EMOJIS[cp])
  versus.className="weapon"
  versus.textContent=String.fromCodePoint("0x1F19A")
  winner.style="color:white"
  winner.className="winner"
  button.textContent="Play Again?"
  
  //showing winner
  chooser = letsPlay(e.target.id,cp)
  if(chooser===1){
    winner.textContent="You Won!"
  } 
  if(chooser===2){
    winner.textContent="Computer Won " + String.fromCodePoint(EMOJIS[cp]) + 
    " beats " + String.fromCodePoint(EMOJIS[e.target.id]) 
  }
  if(chooser===0){
    winner.textContent="WHAT!? IT WAS TIE!!"
  }

  //appending to parent Node
  fight.appendChild(newPaper)
  fight.appendChild(versus)
  fight.appendChild(computer)
  body.appendChild(winner)
  winner.appendChild(button)

   button.onclick=('click', ()=>{
    console.log("clicled")
    newPaper.remove()
    versus.remove()
    computer.remove()
    winner.remove()
    if(e.target.id==='rock'){
      document.querySelector('.leftOp').insertBefore(e.target,paper)
    }
    if(e.target.id==='paper'){
      document.querySelector('.leftOp').insertBefore(e.target,scissor)
    }
    if(e.target.id==='scissor'){
      document.querySelector('.leftOp').insertBefore(e.target,paper.nextSibling)

    }
    //document.body.replaceWith(clone)
    click=true
    leftOp.addEventListener('click',handleEvents,{once:true})
  })
  
  console.log("skip")
}