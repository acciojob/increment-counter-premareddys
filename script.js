//your JS code here. If required.
const totalCount = document.querySelector("#counter");
const button = document.querySelector("#incrementBtn");
var count=1;
var counter=0;
const listener= function(){
	totalCount.innerHTML = count;
	alert(counter++);
	count++;
	/*if(counter===3){
		alert(counter);
		button.removeEventListener("click",listener);
	}*/
};
button.addEventListener("click", listener);


