const siccorElement =document.getElementById('siccor-element')
const paperElement =document.getElementById('paper-element')
const rockElement =document.getElementById('rock-element')
const resultElement =document.getElementById('result')
const computerChoice= document.getElementById('computer-value')
const computerScore= document.getElementById('computer-point')
const playerScore= document.getElementById('player-point')

const hand =['siccor','paper','rock']
let computerpoints=0
let playerpoints=0


siccorElement.addEventListener('click',()=> {
  gameRule(you='siccor')
})
paperElement.addEventListener('click',()=> {
  gameRule(you='paper')
})
rockElement.addEventListener('click',()=>{
  gameRule(you='rock')
})

  function gameRule(){
    let computer= hand[Math.floor(Math.random()*3)]
    let gameResult
    computerChoice.innerHTML= computer
   if (you===computer){
      gameResult=`Draw play a fair game `
    }
    else if ((you==='rock' && computer==='siccor' )||(you==='paper' && computer==='rock') || (you==='siccor' && computer==='paper'))  {
      playerpoints=playerpoints+1
      gameResult='player'
    }else{
      computerpoints=computerpoints+1
      gameresult ='computer'
    }
    resultElement.innerHTML= gameResult 
    playerScore.innerHTML=playerpoints
    computerScore.innerHTML=computerpoints
  }
  








