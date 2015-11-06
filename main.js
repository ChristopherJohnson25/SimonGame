// $(document).ready(function(){})

console.log("linked");

var alien = document.querySelector(".topAlien");
var button = document.querySelector(".bottomButton");
var start = document.getElementById('starter');

var clicked = function(){
	console.log("clicked");
};

button.addEventListener('click', clicked);

