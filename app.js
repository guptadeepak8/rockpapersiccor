const hand={
    '✂️':'siccor',
    'rock':'rock',
    'paper':'paper'
}
const play =document.getElementById('clicked')
const siccorelm=document.querySelectorAll('siccorelment')

const objectdisplay =Object.keys(hand)

function dis()
objectdisplay.map(prev=>{
  console.log(prev);
  return prev

})














// siccorelm.addEventListener('click',(para)=>{
//   let you=para.value
//   console.log(you)
// // let computer=hand[Math.floor(Math.random()*3)]
// // console.log(`user :${you} computer :${computer}`);
// // if (you===computer){
// //   console.log ("draw")
// // }
// // else if ((you==='rock' && computer==='siccor' )||(you==='paper' && computer==='rock') || (you==='siccor' && computer==='paper'))  {
// //     console.log('you wins computer loss' );
// // }else{
// //   console.log('computer wins you loss');
// // }
// })


