const startTime = 5;
let time = startTime * 1;

let ageValue = 1;

let hungerValue = 0;
let boredValue = 0;
let tiredValue = 0;

timer = document.getElementById('timer');




const typeName = () => {
    let name = prompt('What would you like to name your tomagochi?', 'Tommy Gotchi!');

    if (name !== null) {

        document.getElementById('firstName').innerHTML =
    
        `Hello! My name is ${name}!`;
    }
 
      setInterval(clock, 500);
      setInterval(hunger, 10000);
      setInterval(bored, 10000);
      setInterval(tired, 10000);

}


    
function clock () {
    if(hungerValue < 10 && tiredValue < 10 && boredValue < 10 & ageValue < 100){
    const mins = Math.floor(time/60);
    let secs = time % 60;

    secs = secs < 10 ? '0' + secs : secs;

    timer.innerHTML = `${mins}: ${secs}`;

    time--;
   if(time < 0) {
   reset();
   }else{
 
   }
}
        
}

let hunger = () => {

    if(hungerValue < 10 && tiredValue < 10 && boredValue < 10 & ageValue < 100){
    hunger = document.getElementById('hungry');
   
    hungerValue++;

    hunger.innerHTML = `Hunger: ${hungerValue}`;
    }else{
        gameOver = document.getElementById('gameOver');
gameOver.innerHTML = `GAMEOVER!`;
        gameOver;
      return;
        
    }
    

  
 };


let bored = () => {
    if(hungerValue < 10 && tiredValue < 10 && boredValue < 10 & ageValue < 100){
            
bored = document.getElementById('bored');
       
        boredValue++;
    
       bored.innerHTML = `Boredom: ${boredValue}`;
}else{
    gameOver = document.getElementById('gameOver');
gameOver.innerHTML = `GAMEOVER!`;
    gameOver;
    return;
}
};

let tired = () => {
    if(hungerValue < 10 && tiredValue < 10 && boredValue < 10 & ageValue < 100){
        tired = document.getElementById('tired');
       
        tiredValue++;
    
        tired.innerHTML = `Tiredness: ${tiredValue}`;
        }else {
            gameOver = document.getElementById('gameOver');
gameOver.innerHTML = `GAMEOVER!`;
            gameOver;
            return;
        }
};



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
   time = startTime * 1;
    age.innerHTML = `Age: ${ageValue++}`;
       console.log(ageValue);
};



// const stage2 = () => {
//    while(ageValue > 4) {
//        $("#body1").css({ 'width' : '65px', 'height' : '90px' });
//     }
// }




// $( ".target" ).hide();

// $( ".target" ).show();





$(() => {

    $('#submit').on('click', typeName);
    $('#leftB').on('click', feed);
    $('#leftC').on('click', sleep);
    $('#rightC').on('click', play);
    
});