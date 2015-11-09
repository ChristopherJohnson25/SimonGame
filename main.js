$(document).ready(function(){

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

moves = [];

//assinging all variables, figured that each button and each simon element needed it's own var
//doing it by class didnt help differentiate them enough. 

var toggle1 = function(){
	alien1.classList.toggle("hidden");
}
button1.addEventListener('click', toggle1);

var toggle2 = function(){
	alien2.classList.toggle("hidden");
}
button2.addEventListener('click', toggle2);

var toggle3 = function(){
	alien3.classList.toggle("hidden");
}
button3.addEventListener('click', toggle3);

var toggle4 = function(){
	alien4.classList.toggle("hidden");
}
button4.addEventListener('click', toggle4);

//Above is sort of a test to see that all my elements are assinged 
// properly, and that the classes are working properly. 


var starter = function(){
	alien1.classList.remove("hidden");
	alien2.classList.remove("hidden");
	alien3.classList.remove("hidden");
	alien4.classList.remove("hidden");
};

score.addEventListener('click', starter);

//This is one way to sort of initiate the game, will perhaps do a different class additon.

//going to mess around with .Random here.

var aliens = [
	alien1,
	alien2,
	alien3,
	alien4
]

var random = aliens[Math.floor(Math.random()*aliens.length)];

var randomToggle = function(){
	setTimeout(function(){random.classList.add("hidden");},1000);
	setTimeout(function(){random.classList.remove("hidden");},1500);
};


start.addEventListener('click', randomToggle);


//must now push user input into an empty array, will then === that to the random toggle array. 



var movePush = function(){
	addEventListener('click');
	if (event.target.id === button1) {
		moves.push(button1);
	} else if (event.target.id === button2) {
		moves.push(button2);
	}
	
};

movePush();

















});