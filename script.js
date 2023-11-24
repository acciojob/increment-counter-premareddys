//your JS code here. If required.
const totalCount = document.querySelector("#counter");
const button = document.querySelector("#incrementBtn");
var count=1;
var counter=0;
const listener= incrementBtn(){
	alert(counter);
	totalCount.innerHTML = count;
	count++;
};
button.addEventListener("click", listener);


