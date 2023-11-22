//your JS code here. If required.
const totalCount = document.querySelector("#counter");
const button = document.querySelector("#incrementBtn");
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


