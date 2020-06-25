const startTime = 1;
let time = startTime * 1;

let ageValue = 1;

let hungerValue = 0;
let boredValue = 0;
let tiredValue = 0;




const typeName = () => {
    let name = prompt('What would you like to name your tomagochi?', 'Tommy Gotchi!');

    if (name != null) {

        document.getElementById('firstName').innerHTML =
    
        `Hello! My name is ${name}!`;
    }
if(hungerValue === 10 || boredValue === 10 || tiredValue === 10 || ageValue === 100){
   gameOver();
    }else{
    setInterval(counting, 1000);
    setInterval(hunger, 1000);
    setInterval(tired, 1000);
    setInterval(bored, 1000);
    }
}
// const allIntervals = () => {
//     if(hungerValue === 10 || boredValue === 10 || tiredValue === 10 || ageValue === 100){
//     gameOver();
//      }else{
//      setInterval(counting, 1000);
//      setInterval(hunger, 1000);
//      setInterval(tired, 1000);
//      setInterval(bored, 1000);
//      }
//     }

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

function hunger() {
    if(hungerValue < 10){
    let hunger = document.getElementById('hungry');
  
    hungerValue ++;
    hunger.innerHTML = `Hunger: ${hungerValue}`;
    }
}

function bored() {
    if(boredValue < 10){
    let bored = document.getElementById('bored');
    boredValue ++;
    bored.innerHTML = `Boredom: ${boredValue}`;
}
}

function tired() {
    if(tiredValue < 10){
    let tired = document.getElementById('tired');
    tiredValue ++;
    tired.innerHTML = `Tiredness: ${tiredValue}`;
}else if (tiredValue === 10){
    gameOver();
}
}


const feed = () => {
    if(hungerValue > 0){
    let hunger = document.getElementById('hungry');
    hungerValue -= 1;
    hunger.innerHTML = `Hunger: ${hungerValue}`;
    }
};

const sleep = () => {
    if (tiredValue > 0){
    let tired = document.getElementById('tired');
    tiredValue -= 1;
    tired.innerHTML = `Tiredness: ${tiredValue}`;
    }
};

const play = () => {
    if (boredValue > 0) {
    let bored = document.getElementById('bored');
    boredValue -= 1;
    bored.innerHTML = `Boredom: ${boredValue}`;
    }else {
        console.log()
    }
};


function reset() {
    
    clearInterval();
   time = startTime * 2;
    age.innerHTML = `Age: ${ageValue++}`;
       console.log(ageValue);
};

// function gameOver() {
//     clearInterval(allIntervals);
//     const screen = document.getElementsByClassName('screen');
//    const upperBody = document.getElementsByClassName('upperBody');
//    const lowerBody = document.getElementsByClassName('lowerBody');
//   console.log(upperBody);
//   console.log(lowerBody);
//   console.log(screen);
// }



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


$(() => {

    $('#submit').on('click', typeName);
    $('#leftB').on('click', feed);
    $('#leftC').on('click', sleep);
    $('#rightC').on('click', play);
    
});