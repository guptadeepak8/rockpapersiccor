const hand =['siccor','paper','rock']

const siccorElement =document.getElementById('siccor-btn')
const paperElement =document.getElementById('paper-btn')
const rockElement =document.getElementById('rock-btn')
const outputElement =document.getElementById('output')
const compvalue= document.getElementById('com-out')
const computerdisplay= document.getElementById('computer-point')
const playerdisplay= document.getElementById('player-point')


siccorElement.addEventListener('click',()=> {
  gameRule(you='siccor')

})
paperElement.addEventListener('click',()=> {
  gameRule(you='paper')
})
rockElement.addEventListener('click',()=>{
  gameRule(you='rock')
})
let computerpoints=0
let playerpoints=0


  function gameRule(){
    let computer= hand[Math.floor(Math.random()*3)]
    let result
   
   if (you===computer){
      result=`Draw play a fair game `
    }
    else if ((you==='rock' && computer==='siccor' )||(you==='paper' && computer==='rock') || (you==='siccor' && computer==='paper'))  {
      playerpoints=playerpoints+1
      result=`you wins computer loss `
    }else{
      computerpoints=computerpoints+1
      result =`computer wins you loss `
    }
  
    compvalue.innerHTML="computer:-" +computer
    outputElement.innerHTML= result 
    playerdisplay.innerHTML=playerpoints
    computerdisplay.innerHTML=computerpoints
   
  }
  










