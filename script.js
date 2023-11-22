//your JS code here. If required.
const increment = document.getElementById("counter");
const button = document.getElementById("incrementBtn");
let counter=0;
const listener= function(){
	counter++;
	if(counter===3){
		button.addEventListener("click",listener);
	}
}
button.addEventListener("click", listener);

