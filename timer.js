//declare time
let counter = setInterval(countdown, 1000);
let startTime = 11;

//timer function
function countdown() {
	if(startTime === 0) {
		clearInterval(counter);
		document.getElementById('display').innerHTML = 'TIME IS UP!!';
		document.getElementById('host').innerHTML = "<img src=./images/hurry-aubrey.gif>";
	} else {
		startTime -= 1;
		document.getElementById('display').innerHTML = 'You have ' + startTime + ' sec left!';
	}
}


