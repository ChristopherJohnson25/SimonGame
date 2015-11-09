// $(document).ready(function(){

console.log("linked");

// var alien = document.querySelector(".topAlien");
var button = document.querySelector(".bottomButton");
var start = document.getElementById('starter');
var score = document.getElementById('frame');

var alien1 = document.querySelector("#light1");
var alien2 = document.querySelector("#light2");
var alien3 = document.querySelector("#light3");
var alien4 = document.querySelector("#light4");

var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");

var moves = [];
var computerMoves = [];
var scoreNumber = document.querySelector("#number")

var score1 = 0
//assinging all variables, figured that each button and each simon element needed it's own var
//doing it by class didnt help differentiate them enough. 

// These functions toggle aliens on and off sweeet
// var toggle1 = function(){
//     alien1.classList.toggle("hidden");
// }

// var toggle2 = function(){
// 	alien2.classList.toggle("hidden");
// }

// var toggle3 = function(){
// 	alien3.classList.toggle("hidden");
// }

// var toggle4 = function(){
// 	alien4.classList.toggle("hidden");
// }

// anna was here - refactoring the above functions to take a parameter
var toggleAlien = function(event){

    movePush();
    // "Guard clause"
    if (moves.length < computerMoves.length) {
        // stop EVERYTHING IT'S A FIRE SALE
        return;
    }
    // debugger;
    // get info about which button was clicked: This is available as a property of the event object - event.target!
    // push user's move into moves array
    // Toggle the appropriate alien
    // let's check to see if the arrays are the same length yet!
        // if they're not the same, 
    // Compare the two arrays
    // We compare the user's choices with the computer's choices
    // Assuming user is correct
    var arraysDoMatch = true;

    for (var i = 0; i < moves.length; i++) {
        if (moves[i] !== computerMoves[i]) {
            arraysDoMatch = false;
        }
    }

    if (arraysDoMatch) {
        console.log("They match!");
        // I get to move on to the next round!
        // reset user's moves counter
        moves = [];
        //score counter
        score1 ++;
        scoreNumber.innerHTML  = score1;  //thanks taylor! 
    } else {
        alert("You Lose!")
        console.log("Noo.");
    }
    // If the arrays are the same length & contain the same stuff in the same order, the user won that round! Computer goes again & adds to array
    // If the arrays are not the same length (User's array is shorter), then we wait for another click 
    // If the contents of the arrays are NOT the same... alert YOU LOST.
};

//Above is sort of a test to see that all my elements are assinged 
// properly, and that the classes are working properly. 


var starter = function(){
	alien1.classList.remove("hidden");
	alien2.classList.remove("hidden");
	alien3.classList.remove("hidden");
	alien4.classList.remove("hidden");
};


//This is one way to sort of initiate the game, will perhaps do a different class additon.

//going to mess around with .Random here.

var aliens = [
	alien1,
	alien2,
	alien3,
	alien4
];

//this below is thanks to Taylor for giving me a good direction!



var hide = function (alienFlash){
    alienFlash.classList.add("hidden");

};

var show = function (alienFlash) {
    alienFlash.classList.remove("hidden");
};


var flash = function (alienFlash){
    hide(alienFlash);
    window.setTimeout(show, 500, alienFlash);
};

var randomToggle = function(){
    var random = aliens[Math.floor(Math.random()*aliens.length)];
    // storing this random div in the computer moves array
    computerMoves.push(random);
    //for loop to iteratre through array. 
    //make every element blink. 
    for (var i = 0; i < computerMoves.length; i++) {
        var setTimer = function(indexToRemember) {
            window.setTimeout(function(){
            var alienFlash = computerMoves[indexToRemember];
            flash(alienFlash);
            }, indexToRemember * 1000);
    };

        setTimer(i);

}
};

// var randomToggle = function(){
//     var random = aliens[Math.floor(Math.random()*aliens.length)];
//     // storing this random div in the computer moves array
//     computerMoves.push(random);
//     //for loop to iteratre through array. 
//     //make every element blink. 
//     for (var i = 0; i < computerMoves.length; i++) {
//         var setTimer = function(indexToRemember) {
//             setTimeout(function(){
//             computerMoves[indexToRemember].classList.add("hidden");
//             },1000);
//             setTimeout(function(){
//                 computerMoves[indexToRemember].classList.remove("hidden");
//             },1500);
//         };
//         setTimer(i);

//     };
	
// };




//must now push user input into an empty array, will then === that to the random toggle array. 

// movePush === computer random choices 


// Should happen when a user clicks, and not before
var movePush = function(){
    console.log("Pushing the div with an id of " + event.target.id + " into the 'moves' array.");
    // debugger
    if (event.target === button1) {
        moves.push(alien1);
         setTimeout(function(){
            alien1.classList.add("hidden");
            },100);
            setTimeout(function(){
                alien1.classList.remove("hidden");
            },300);
        // toggleAlien(alien1);
    } else if (event.target === button2) {
        moves.push(alien2);
          setTimeout(function(){
            alien2.classList.add("hidden");
            },100);
            setTimeout(function(){
                alien2.classList.remove("hidden");
            },300);
        // toggleAlien(alien2);
    } else if (event.target === button3) {
        moves.push(alien3);
          setTimeout(function(){
            alien3.classList.add("hidden");
            },100);
            setTimeout(function(){
                alien3.classList.remove("hidden");
            },300);
        // toggleAlien(alien3);
    // } else (event.target.id === button4) {
        // else doesn't need a conditional
    } else if (event.target === button4) {
        moves.push(alien4);
          setTimeout(function(){
            alien4.classList.add("hidden");
            },500);
            setTimeout(function(){
                alien4.classList.remove("hidden");
            },800);
        // toggleAlien(alien4);
    }
};

// movePush();


score.addEventListener('click', starter);
button1.addEventListener('click', toggleAlien);
button2.addEventListener('click', toggleAlien);
button3.addEventListener('click', toggleAlien);
button4.addEventListener('click', toggleAlien);

start.addEventListener('click', randomToggle);



// create an array that will hold random computer choices
// compare arrays
// clear the arrays - computer & user moves

// First, compuer goes & displays/saves a random alien
// Next, the user chooses an alien
// Then, we compare the user's choices with the computer's choices
    // If the arrays are the same length & contain the same stuff in the same order, the user won that round! Computer goes again & adds to array
    // If the arrays are not the same length (User's array is shorter), then we wait for another click 
    // If the contents of the arrays are NOT the same... alert YOU LOST.










// });