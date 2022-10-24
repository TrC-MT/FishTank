/*
Developer: TrC-Mt
Title: Fish Tank

IDE: Visual Studio Code

Special thanks: to my instructors at Mountainland Technical College
Developers note: This is a personal project. I'm making it for fun. I got the idea from another personal project.
*/
//==========================================================================================
window.setTimeout( //After a certain amount of time, in this case 10 milliseconds
    function(){
        ChangeIntervals(); //Run the ChangeIntervals function
    }, 10
);

var interval = 3000 //It's only set to be a global variable. The number that it's set to shouldn't matter, it's just there for debugging purposes
const MaxInterval = 30000 //Still figuring out the timings, which is why they are long. Eventually they should be smaller ex: between 8 and 4
const MinInterval = 20000


function ChangeIntervals(){
    var DecInterval = Math.random() * (MaxInterval - MinInterval) + MinInterval; //Randomly pick a number between the max and min
    interval = Math.floor(DecInterval); //Set the interval to that number, removing the decimals for proper timing.

    ChangeFishColor(); //Execute those functions
    ChangeFishWidth();
    ChangeFishSpeed(); //It might become independant and run on it's own timing.

    setTimeout(ChangeIntervals, interval) //Re-run this function after the interval
}

//-------------------------------------------------------------

function getRandomColorNumber() {
    return Math.random() * 255; //255 is the max rgb amount
}
function ChangeFishColor(){
    for(let i = 1; i < document.getElementsByTagName('span').length +1; i++){ //The amount of divs, spans, and fish are the same. I just used what it's selecting for readability
        const red = getRandomColorNumber();
        const green = getRandomColorNumber();
        const blue = getRandomColorNumber();
        const Color = `rgb(${red}, ${green}, ${blue})`
        document.getElementById(`${i}s`).style.backgroundColor = Color //Change the iterated span background-color to the randomly generated Color.
    }
};

function ChangeFishWidth(){ //Change the width/size of the iterated fish to a randomly generated percentage between two values
    for(let i = 1; i < document.getElementsByTagName('img').length +1; i++){
        var Width = Math.random() * (17 - 12) + 12
        document.getElementById(`${i}f`).style.width = Width + '%' 
        document.getElementById(`${i}s`).style.width = Width + '%'
    }
};

//-------------------------

function ChangeFishSpeed(){
    for(let i = 1; i < document.getElementsByTagName('div').length +1; i++){ // i goes from 1 through 4 //Iterates only once?
        var Duration = Math.random() * (8 - 4) + 4 // Hopefully these can be smaller too. They are just larger for debugging purposes.
        document.getElementById(`${i}b`).style.animationDuration = Duration + 's' //This is how long it takes for the fish to get from one side of the screen to another. It is NOT how long it takes to go from one side and back.

        //Yes I made them individual so that eventually I can make them start in different locations. I agree it would be easier code-wise to put them together.
        if(i == 1){
            console.log(`Setting the timeout of a to ${Duration}`)
            setTimeout(ChangeFishADirection, Duration) //Make the fish flip directions after the Duration is up. It should flip on each 'bounce'  //Probably should be setInterval when the timings work.
            // ChangeFishADirection()
        }
        else if(i == 2){ //This should happen on the second iteration, not all at once.
            console.log(`Setting the timeout of b to ${Duration}`)
            setTimeout(ChangeFishBDirection, Duration)
            // ChangeFishBDirection()
        }
        else if(i == 3){
            console.log(`Setting the timeout of c to ${Duration}`)
            setTimeout(ChangeFishCDirection, Duration)
            // ChangeFishCDirection()
        }
        else if(i == 4){
            console.log(`Setting the timeout of d to ${Duration}`)
            setTimeout(ChangeFishDDirection, Duration)
            // ChangeFishDDirection()
        }
    }
};

//Yes I made them individual so that eventually I can make them start in different locations. I agree it would be easier code-wise to put them together.
var a = 0 //Keeps track of how many times it's 'bounced'
function ChangeFishADirection(){
    console.log('Changing A direction')
    a += 1 //Keeps track of which direction it's going.
    if(a%2 == 0){
        console.log('a is even')
        document.getElementById(`1f`).style.transform = 'rotateY(180deg)'
        // .setAttribute('style', 'transform:rotateY(180deg)')
    }
    else{
        console.log('a is odd')
        document.getElementById(`1f`).style.transform = 'rotateY(-180deg)' //Why does this flip back to 180?
    }
}
var b = 0
function ChangeFishBDirection(){
    console.log('Changing B direction')
    b += 1
    if(b%2 == 0){
        document.getElementById(`2f`).style.transform = 'rotateY(180deg)'
    }
    else{
        document.getElementById(`2f`).style.transform = 'rotateY(-180deg)'
    }
}
var c = 0
function ChangeFishCDirection(){
    console.log('Changing C direction')
    c += 1
    if(c%2 == 0){
        document.getElementById(`3f`).style.transform = 'rotateY(180deg)'
    }
    else{
        document.getElementById(`3f`).style.transform = 'rotateY(-180deg)'
    }
}
var d = 0
function ChangeFishDDirection(){
    console.log('Changing D direction')
    d += 1
    if(d%2 == 0){
        document.getElementById(`4f`).style.transform = 'rotateY(180deg)'
    }
    else{
        document.getElementById(`4f`).style.transform = 'rotateY(-180deg)'
    }
}

//===============================================================
/*

*/