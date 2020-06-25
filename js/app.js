
const startTime = 5;
let time = startTime * 60;



const hungry = document.getElementById('hungry');
const tired = document.getElementById('tired');
const bored = document.getElementById('bored');
const timer = document.getElementById('timer');
const age = document.getElementById('age');
let getName = document.getElementById('firstName');
const startButton = document.getElementById('rightC');
const snoozeButton = document.getElementById('leftC');
const feedButton = document.getElementById('leftB');

// startButton.addEventListener('click', handleStartGame)


let ageValue = 1;

setInterval(counting, 1000);

function counting () {
   
    
    const mins = Math.floor(time/60);
    let secs = time % 60;

    secs = secs < 10 ? '0' + secs : secs;

    timer.innerHTML = `${mins}: ${secs}`;
    time--;
   if(time < 0) {
   reset();
   } 
    
}



// let hobbitClass = document.querySelector('.hobbits');
// hobbitClass.appendChild(newDiv);
function reset() {
  clearInterval();
   time = startTime * 1;
    age.innerHTML = `Age: ${ageValue++}`;
       console.log(ageValue);
}


function hunger() {
   let hungerPains = document.getElementById(hungry);
   let time = getElementById(time);
   console.log(time);
   console.log(hungerPains);
}

function tired() {
    let sleepy = document.getElementById(tired);
}

function bored() {

}

$( ".target" ).hide();

$( ".target" ).show();


// let tomagochi = {};


// const foodButton = document.getElementById('food')
// let num = 0;

// const check = () => {
//     switch (num) {
//         case: 0:

//         foodButton.addEventListener('click', createSnackAndMealButtons)
//         num += 1;
//          return 1;
//          case: 1;

//          num -= 0;
//          return 0;
//     }
// }
