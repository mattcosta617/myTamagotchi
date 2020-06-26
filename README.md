# mattsGame



How the game works:

-First you will click start and it will prompt you to enter your name
which will display during your time playing.

-The timer will begin to count down from 5 minutes which means your 
tomagochi is starting to age and every 5 minutes they will age 1 year.

-You must prevent the boredom, tiredness, and hunger from reaching 10
        ****If they reach 10 the game is over and you lose*******

-The goal is to let your tomagochi live a full life and die of old age

-Every 30 seconds the hunger will grow by 1.

-every 50 seconds the boredom will grow by 1.

-every 30 seconds the tiredness value will grow by 1.

- click on the feed button to subtract 1 from hunger.

-click on the play button to subtract 1 from boredom.

-click on the sleep button to subtract 1 from tiredness.

-After 2 and a half minutes it will switch from day time to night time where
you will really start to need to get your rest in.

-at the age of 5 your tomagochi will grow for the first time

-following that your tomagochi will grow again for it's final time
at the age of 10.

-The max age is 99 years old, after that its time to call it quits.




********PERSONAL NOTES ON GAME BUILDING*******
This is out of order but I need this to know what I need to make react to the time intervals and in what order.
    - I need hunger, tired, and bored to increase by 2 every 2 1/2 minutes.
    - I need the feed action to decrease my hunger by 1
    - I need my sleep to put my tiredness back to zero
    - I need play to increase my boredom by 1
    <!-- - first things first I need to add functionality to my button that allows for name entry. -->
    
    -So the guideline for each of these is that I need time divided by 2 to add 1 to each of these objects(hungry,tired, bored).
        In order to do so I will need to access the time function and create an equation that push out what I want to add to each one.
        I also need to max out each of these at ****10**** but I cannot call an end game function without all of these objects created
        that can cause the end of the game to occur
        Once I do create the end game function I will need to make the maximum age 100 and if it surpasses that I will need a prompt that says game over and make sure that everything stops running and the game needs to be restarted maybe with a button click



Where do I start?
    -Define your classes/id's in your html
    -The first classes that you will need are:
        --name
        --age
        --hunger
        --sleepiness
        --boredom
        --lights
        --feed
        --play
    -Connection your buttons to actions
    -set up the timer
    

What do I need to do to create a Tomagotchi?
    -How long is this tomagachi supposed to be alive?
    -How quickly should I age the tomagachi?
    -create stylings for the page including a background and some html with classes
    and ID's so that I can call on them in my js.


What will the pet picture be?
        ****Options for appeance*****
    -Will it be able to move?
        ****Yes at least one movement on and off screen and maybe a jump****
    -Will it be able to speak?
        ****Yes it will be able to speak****
    -How do you even find a photo that moves or create an image that does?
        ****Create the image using div's and use javascript to move the image****
    

Buttons needed-----------------
    -name entry button
        -- when the name button is pressed it will look through alphabet
        -- double click on the name button will select a letter
        -- max letters will be 10
        -- 

    -feed button
        - hunger -1 points

    -Lights
        -lights out at 2:30


    -Play
        -boredom -1 points


Tomagachi should be named and when it is the game will begin. 
        
