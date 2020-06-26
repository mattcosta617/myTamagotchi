const startTime = 5;
let time = startTime * 2;

let ageValue = 1;

let hungerValue = 0;
let boredValue = 0;
let tiredValue = 0;

timer = document.getElementById('timer');

if(hungerValue === 10){
    clearInterval(clock);
    console.log('Game stops here');

    }

const typeName = () => {
    let name = prompt('What would you like to name your tomagochi?', 'Tommy Gotchi!');

    if (name !== null) {

        document.getElementById('firstName').innerHTML =
    
        `Hello! My name is ${name}!`;
    }
        let clear = setInterval(clock, 1000);
        let clear2 = setInterval(hunger, 1000);
        let clear3 = setInterval(tired, 1000);
        let clear4 = setInterval(bored, 1000); 
    if(hunger >= 10 || tired >= 10 || bored >= 10 || age >= 100){
        clearInterval(clear);
        clearInterval(clear2);
        clearInterval(clear3);
        clearInterval(clear4);
    }
}
// }

    const mins = Math.floor(time/60);
    let secs = time % 60;

    secs = secs < 10 ? '0' + secs : secs;

    timer.innerHTML = `${mins}: ${secs}`;
    
function clock () {
   
    
    time--;
   if(time < 0) {
   reset();
   } 
   if(hungerValue === 10){
       gameOver();
   }
        
}

function hunger() {
    if(hungerValue < 10){
    let hunger = document.getElementById('hungry');
    // hungerValue ++;
    hunger.innerHTML = `Hunger: ${hungerValue}`;
    console.log(hungerValue);
    }else{
        gameOver();
        hungerValue = 0;
        
    }
 }


function bored() {
    if(boredValue < 10){
    let bored = document.getElementById('bored');
    // boredValue ++;
    bored.innerHTML = `Boredom: ${boredValue}`;
}else{
    gameOver();
    boredValue = 0;
  
}
}

function tired() {
    if(tiredValue < 10){
    let tired = document.getElementById('tired');
    // tiredValue ++;
    tired.innerHTML = `Tiredness: ${tiredValue}`;
}else{
    gameOver();
    tiredValue = 0;
   
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



function gameOver() {
    clearInterval();


}



$( ".target" ).hide();

$( ".target" ).show();





$(() => {

    $('#submit').on('click', typeName);
    $('#leftB').on('click', feed);
    $('#leftC').on('click', sleep);
    $('#rightC').on('click', play);
    
});