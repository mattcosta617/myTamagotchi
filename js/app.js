
// ---------------Values------------------------


const startTime = 5;
let time = startTime * 60;

let ageValue = 1;

let hungerValue = 0;
let boredValue = 0;
let tiredValue = 0;

timer = document.getElementById('timer');

// <---------------Start the game by clicking-----------


const typeName = () => {
    let name = prompt('What would you like to name your tomagochi?', 'Tommy Gotchi!');
    let instructions = prompt(`To start the game press the Start button, for a faster game experience you can press Demo. Do not let your hunger, tiredness, or boredom reach 10 or your tomagochi will die. Every 5 minutes your tomagochi will age 1 year. Your goal is to reach 99 years old and live a fulfilled, happy life!`);

    if (name !== null) {

        document.getElementById('firstName').innerHTML =
        
        `Hello! My name is ${name}!`;
        `INSTRUCTIONS: ${instructions}`;
    }
    if(ageValue > 100){
        clearInterval(clock);
    }else{
      setInterval(clock, 1000);
    }


    // <----------------REAL VERSION---------------
      setInterval(hunger, 30000);
      setInterval(bored, 50000);
      setInterval(tired, 30000);

      setInterval(stage2, 1500000);
      setInterval(stage3, 3000000);
      setInterval(nightTime, 150000)
      setInterval(dayTime, 300000);
};

    //   <--------------DEMO VERSION------------------
      const demo = () => {
        let instructions = prompt(`To start the game press the Start button, for a faster game experience you can press Demo. Do not let your hunger, tiredness, or boredom reach 10 or your tomagochi will die. Every 5 minutes your tomagochi will age 1 year. Your goal is to reach 99 years old and live a fulfilled, happy life!`);
        let name = prompt('What would you like to name your tomagochi?', 'Tommy Gotchi!');
        
        if (name !== null) {
    
            document.getElementById('firstName').innerHTML =
           
            `Hello! My name is ${name}!`; 
            `INSTRUCTIONS: ${instructions}`;
        }
        if(ageValue > 100){
            clearInterval(clock);
        }else{
          setInterval(clock, 50);
        }

    setInterval(hunger, 2000);
    setInterval(bored, 2000);
    setInterval(tired, 2000);

    setTimeout(stage2, 15000);
    setTimeout(stage3, 30000);
    setInterval(nightTime, 15000)
    setInterval(dayTime, 30000);

};

// -------------------------Add to time, hunger, boredom, tiredness---------
    
function clock () {
    if(hungerValue < 10 && tiredValue < 10 && boredValue < 10 & ageValue < 100){
    const mins = Math.floor(time/60);
    let secs = time % 60;

    secs = secs < 10 ? '0' + secs : secs;

    timer.innerHTML = `${mins}: ${secs}`;

    time--;
   if(time < 0) {
   reset();
   }
}
        
}

let hunger = () => {

    if(hungerValue < 10 && tiredValue < 10 && boredValue < 10 & ageValue < 100){
    hunger = document.getElementById('hungry');
   
    hungerValue++;

    hunger.innerHTML = `Hunger: ${hungerValue}`;
    }else{
        $("#body1").css({ 'display' : 'none'  });
        
        clearInterval(nightTime);
        nightTime();
        clearInterval(bored);
        gameOver = document.getElementById('gameOver');
        gameOver.innerHTML = `GAMEOVER!`;
        gameOver;
        clearInterval(hunger);
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
    $("#body1").css({ 'display' : 'none'  });
    nightTime();
    clearInterval(nightTime);
    clearInterval(bored);
    // $("#lFoot").css({ 'top' : '35px', 'width' : '15px', 'left' : '2px' });, 'height' : '40px','left' : '47px', 'top' : '40px'
    // $("#rFoot").css({ 'top' : '35px', 'width' : '15px', 'left' : '2px'  });
    // $("#head").css({ 'left' : '5px', 'height' : '35px', 'top' : '-10px' });
    // $("#lUpperArm").css({ 'height' : '15px', 'width' : '25px' });
    // $("#rUpperArm").css({ 'height' : '15px', 'width' : '25px', 'left' : '25px' });
    return;
}
};

let tired = () => {
    if(hungerValue < 10 && tiredValue < 10 && boredValue < 10 & ageValue < 100){
        tired = document.getElementById('tired');
       
        tiredValue++;
    
        tired.innerHTML = `Tiredness: ${tiredValue}`;
        }else {
            $("#body1").css({ 'display' : 'none'  });
            nightTime();clearInterval(nightTime);
            clearInterval(bored);
            gameOver = document.getElementById('gameOver');
            gameOver.innerHTML = `GAMEOVER!`;
            gameOver;
            clearInterval(tired);
            return;
        }
};

// ------------------Eat isnt currently working
// const eat = () => {
//     let eat = document.createElement('class');
//     eat.setAttribute('id', 'eat');
//     let mouth = document.getElementById('mouth');
//     mouth.appendChild(eat);
//     $("#eat").show({ 'position' : 'relative', 'height' : '10px', 'width' : '10px', 'background' : 'rgb(80, 47, 28);'});
// }

// ------------------Action buttons-----------


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


// -----------------Changes through intervals-------

function reset() {
    
    clearInterval();
   time = startTime * 60;
    age.innerHTML = `Age: ${ageValue++}`;
       console.log(ageValue);
};

const nightTime = () => {

        $(".screen").css({ 'background-color' : 'rgb(35, 72, 85)' });
};

const dayTime = () => {
    $(".screen").css({ 'background-color' : 'lightblue' });
}



const stage2 = () => {
       $("#body1").css({ 'width' : '60px', 'height' : '80px','left' : '95px', 'top' : '20px'  });
       $("#lFoot").css({ 'top' : '65px', 'width' : '25px', 'left' : '2px' });
       $("#rFoot").css({ 'top' : '65px', 'width' : '25px', 'left' : '2px'  });
       $("#head").css({ 'left' : '5px', 'height' : '70px', 'top' : '-10px' });
       $("#lUpperArm").css({ 'height' : '15px', 'width' : '45px', 'left' : '-35px', 'top' : '5px' });
       $("#rUpperArm").css({ 'height' : '15px', 'width' : '45px', 'left' : '45px' });
   };



   const stage3 = () => {
    $("#body1").css({ 'width' : '85px', 'height' : '100px', 'left' : '80px', 'top' : '20px' });
    $("#head").css({ 'left' : '5px', 'height' : '80px', 'top' : '-10px' });
    $("#head").css({ 'left' : '20px', 'height' : '70px' });
    $("#lFoot").css({ 'top' : '80px', 'width' : '25px', 'left' : '10px' });
    $("#rFoot").css({ 'top' : '80px', 'width' : '25px', 'left' : '15px' });
    $("#lUpperArm").css({ 'height' : '15px', 'width' : '45px' });
    $("#rUpperArm").css({ 'height' : '15px', 'width' : '45px', 'left' : '65px' });
};


// ----------------------Click Functionality--------



$(() => {

    $('#submit').on('click', typeName);
    $('#leftB').on('click', feed);
    // $('#leftB').on('click', eat); ------------ eat does not currently work
    $('#eat').on('click', feed);
    $('#leftC').on('click', sleep);
    $('#rightC').on('click', play);
    $('#demo').on('click', demo);
    
});