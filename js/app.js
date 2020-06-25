
const startTime = 5;
let time = startTime * 60;

let ageValue = 1;

let hungerValue = 0;
let boredValue = 0;
let tiredValue = 0;

const typeName = () => {
    // let name = prompt('What would you like to name your tomagochi?', 'Tommy Gotchi!');

    // if (name != null) {

    //     document.getElementById('firstName').innerHTML =
    
    //     `Hello! My name is ${name}!`;
    // }

    setInterval(counting, 1000)
    setInterval(hunger, 3000);
    setInterval(tired, 3000);
    setInterval(bored, 2000);
};


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
    let hunger = document.getElementById('hungry');
  
    hungerValue += 2;
    hunger.innerHTML = `Hunger: ${hungerValue}`;
    
}

function bored() {
    let bored = document.getElementById('bored');
    boredValue += 2;
    bored.innerHTML = `Boredom: ${boredValue}`;
}

function tired() {
    let tired = document.getElementById('tired');
    tiredValue ++;
    tired.innerHTML = `Tiredness: ${tiredValue}`;
}

const feed = () => {
    let hunger = document.getElementById('hungry');
    hungerValue -= 1;
    hunger.innerHTML = `Hunger: ${hungerValue}`;
};

const sleep = () => {
    let tired = document.getElementById('tired');
    tiredValue -= 1;
    tired.innerHTML = `Tiredness: ${tiredValue}`;

};

const play = () => {
    let bored = document.getElementById('bored');
    boredValue -= 1;
    bored.innerHTML = `Boredom: ${boredValue}`;
};

function reset() {
    
    clearInterval();
   time = startTime * 2;
    age.innerHTML = `Age: ${ageValue++}`;
       console.log(ageValue);
};





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