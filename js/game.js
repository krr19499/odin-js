//get values
 requirejs(["./helpers/rps"])

const paper= document.getElementById('paper')
//console.log(paper.id)
const rock= document.getElementById('rock')
const scissor= document.getElementById('scissor')
const leftOp = document.querySelector('.leftOp')
computerScore=0
playerScore=0
const EMOJIS ={
  paper :  "0x270B",
  rock:"0x1FAA8",
  scissor:"0x2702",
}

//add event listeners
leftOp.addEventListener('click',handleEvents
,{once:true})

function handleEvents(e){
  //user does not click on boxes
  if(e.target.id ===""){
    return leftOp.addEventListener("click",handleEvents,{once:true})
  }
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
  let scorePlayer = document.querySelector(".score[id=player]")
  let scoreComputer = document.querySelector(".score[id=computer]")

  let left =(document.querySelector(".score[id=player] div")===null) ? document.createElement("div")
    : document.querySelector(".score[id=player] div") 
  scorePlayer.appendChild(left)
  
  let right=(document.querySelector(".score[id=computer] div")===null) ?   document.createElement("div")
  : document.querySelector(".score[id=computer] div")





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

 
  //Appending to DOM
  fight.appendChild(newPaper)
  fight.appendChild(versus)
  fight.appendChild(computer)
  body.appendChild(winner)
  winner.appendChild(button)
  scorePlayer.appendChild(left)
  scoreComputer.appendChild(right)

   button.onclick=('click', ()=>{
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
   
   
   
    leftOp.addEventListener('click',handleEvents,{once:true})
  })

  sendScore(chooser)

  left.textContent=playerScore
  right.textContent=computerScore
  
}

function sendScore(input){
  if(input===1) playerScore+=1
  if(input===2) computerScore+=1
}
