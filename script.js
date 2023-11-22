//your JS code here. If required.
const increment = document.getElementById("counter");
const button = document.getElementById("incrementBtn");
let counter=0;
const listener= function(){
	alert(counter);
	counter++;
	/*if(counter===3){
		alert(counter);
		button.removeEventListener("click",listener);
	}*/
}
button.addEventListener("click", listener);


