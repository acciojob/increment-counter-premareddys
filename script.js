//your JS code here. If required.
let increment= document.getElementById("counter");
let button= document.getElementById("incrementBtn");
let counter=0;
let listener= funtion(){
	counter++;
	console.log(counter);
}
button.addEventListener("click", listener);

