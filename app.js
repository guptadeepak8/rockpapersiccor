const sissorElement =document.getElementById('sissor-element')
const paperElement =document.getElementById('paper-element')
const rockElement =document.getElementById('rock-element')
const resultElement =document.getElementById('result')
const computerChoice= document.getElementById('computer-value')
const computerScore= document.getElementById('computer-point')
const playerScore= document.getElementById('player-point')

const hand =['sissor','paper','rock']
let computerpoints=0
let playerpoints=0


  function gameRule(){
    let computer= hand[Math.floor(Math.random()*3)]
    let gameResult
    computerChoice.innerHTML= computer
   if (you===computer){
      gameResult=`Draw`
    }
    else if ((you==='rock' && computer==='sissor' )||(you==='paper' && computer==='rock') || (you==='sissor' && computer==='paper'))  {
      playerpoints=playerpoints+1
      gameResult='player'
    }else{
      computerpoints=computerpoints+1
      gameResult ='computer'
    }
    resultElement.innerHTML= gameResult 
    playerScore.innerHTML=playerpoints
    computerScore.innerHTML=computerpoints
  }

function restart(){
  location.reload();
}
sissorElement.addEventListener('click',()=> {
  gameRule(you='sissor')
})
paperElement.addEventListener('click',()=> {
  gameRule(you='paper')
})
rockElement.addEventListener('click',()=>{
  gameRule(you='rock')
})
   
  








