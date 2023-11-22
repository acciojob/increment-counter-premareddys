//your JS code here. If required.
const totalCount = document.getElementById("counter");
const button = document.getElementById("incrementBtn");
var count=0;
const listener= function(){
	totalCount.innerHTML = count;
	alert(count);
	count++;
	/*if(counter===3){
		alert(counter);
		button.removeEventListener("click",listener);
	}*/
};
button.addEventListener("click", listener);


