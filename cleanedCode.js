console.log("linked");

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
var toggleAlien = function(event){

    movePush();
    if (moves.length < computerMoves.length) {
        return;
    }
    var arraysDoMatch = true;

    for (var i = 0; i < moves.length; i++) {
        if (moves[i] !== computerMoves[i]) {
            arraysDoMatch = false;
        }
    }

    if (arraysDoMatch) {
        console.log("They match!");
        moves = [];
        score1 ++;
        scoreNumber.innerHTML  = score1;  
    } else {
        alert("You Lose!")
        console.log("Noo.");
    }
};

var starter = function(){
	alien1.classList.remove("hidden");
	alien2.classList.remove("hidden");
	alien3.classList.remove("hidden");
	alien4.classList.remove("hidden");
};


var aliens = [
	alien1,
	alien2,
	alien3,
	alien4
];


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
    computerMoves.push(random);
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

var movePush = function(){
    console.log("Pushing the div with an id of " + event.target.id + " into the 'moves' array.");

    if (event.target === button1) {
        moves.push(alien1);
         setTimeout(function(){
            alien1.classList.add("hidden");
            },100);
            setTimeout(function(){
                alien1.classList.remove("hidden");
            },300);
    } else if (event.target === button2) {
        moves.push(alien2);
          setTimeout(function(){
            alien2.classList.add("hidden");
            },100);
            setTimeout(function(){
                alien2.classList.remove("hidden");
            },300);
    } else if (event.target === button3) {
        moves.push(alien3);
          setTimeout(function(){
            alien3.classList.add("hidden");
            },100);
            setTimeout(function(){
                alien3.classList.remove("hidden");
            },300);
    } else if (event.target === button4) {
        moves.push(alien4);
          setTimeout(function(){
            alien4.classList.add("hidden");
            },500);
            setTimeout(function(){
                alien4.classList.remove("hidden");
            },800);
    }
};




score.addEventListener('click', starter);
button1.addEventListener('click', toggleAlien);
button2.addEventListener('click', toggleAlien);
button3.addEventListener('click', toggleAlien);
button4.addEventListener('click', toggleAlien);

start.addEventListener('click', randomToggle);
