const triviaQuestions = [
{
	question: "What is the DOM?",
	correctAnswer: "a programming interface that uses HTML and XML documents",
	alternative1: "champagne",
	alternative2: "the matrix"
},
{
	question: "What is a great treat for cats?",
	correctAnswer: "liver",
	alternative1: "milk",
	alternative2: "wine"
},
 {
 	question: "Which of these empires is fictional?",
	correctAnswer: "Klingon Empire",
	alternative1: "British Empire",
	alternative2: "Holy Roman Empire"	
},
{
	question: "What is the correct command to commit your files to GitHub",
	correctAnswer: "git commit -m",
	alternative1: "commit -a",
	alternative2: "command save"
},
{
	question: "A group of statements that performs a task or calculates a value is a",
	correctAnswer: "method",
	alternative1: "lot to unpack",
	alternative2: "meth"
},
{
	question: "Originally from Quebec, what dish comes from the local french slang for 'mess?'",
	correctAnswer: "poutine",
	alternative1: "green beans",
	alternative2: "hash browns"
},
{
	question: "The Asian delicacy known as bird's nest soup is made primarily from what?",
	correctAnswer: "bird's nests",
	alternative1: "fried noodles",
	alternative2: "shredded cabbage"
},
{
	question: "Which of these is a neighborhood in both London and New York City?",
	correctAnswer: "Chelsea",
	alternative1: "Williamsburg",
	alternative2: "Shoreditch"
},
{
	question: "'Up, up, down, down, left, right, left, right, B, A' is a sequence first associated with what video game company?",
	correctAnswer: "Konami",
	alternative1: "Atari",
	alternative2: "Capcom"
},
{
	question: "Who directed the romantic comedy adventure film 'The Princess Bride?'",
	correctAnswer: "Rob Reiner",
	alternative1: "Taylor Hackford",
	alternative2: "Steven Spielberg"
},
{
	question: "CBGB, the former infamous New York City music club, stands for what?",
	correctAnswer: "Country, Blue Grass and Blues",
	alternative1: "Call Back, Good Bye",
	alternative2: "Comic Book Guy's Bar"
},
{
	question: "What does HTML stand for?",
	correctAnswer: "Hyper Text Markup Language",
	alternative1: "Hyper Text Meta Language",
	alternative2: "High Technology Master Level"
}
];

const gameDiv = document.querySelector('.game');

const handleClick = () => {

	gameDiv.addEventListener('click', (evt) => {
		if (evt.target.className === 'radioBtns') {
			triviaQuestions.forEach((question) => {
				if (evt.target.value === question.correctAnswer) {
					document.getElementById('gifs').innerHTML = "<img src=./images/best-correct.gif> PRESS THE NEXT BUTTON";
				} else if (evt.target.value === question.alternative1) {
					document.getElementById('gifs').innerHTML = "<img src=./images/nope.gif> TRY AGAIN";
				} else if(evt.target.value === question.alternative2) {
					document.getElementById('gifs').innerHTML = "<img src=./images/erroneous.gif> TRY AGAIN";
				}

			});
		}
	})
}
 handleClick();

let newArr = [];
 newArr = ['ansCorrect', 'ansAlt1', 'ansAlt2'];

const pushAns = (ans) => {
	newArr.push(ans)
}

for (let i = 0; i < triviaQuestions.length; i += 1) {
	if (newArr[i] === triviaQuestions[i].correctAnswer) {

	}
}

let randomIndex = Math.floor(Math.random() * triviaQuestions.length)

const newCreate = () => {
		const questionHeader = document.createElement('h3');
		console.log(questionHeader)
		const ansCorrect = document.createElement('input')
		const ansAlt1 = document.createElement('input');
		const ansAlt2 = document.createElement('input');

		const ansLabelAlt1 = document.createElement('label');
		const ansLabelAlt2 = document.createElement('label');
		const ansLabel = document.createElement('label');

		questionHeader.innerHTML = `${triviaQuestions[randomIndex].question}`;

		ansCorrect.type = 'radio';
		ansCorrect.className = 'radioBtns';
		ansCorrect.name = 'radioBtns';
		ansCorrect.checked = 'checked';
		ansLabel.innerHTML = `${triviaQuestions[randomIndex].correctAnswer}`;
		ansCorrect.value = `${triviaQuestions[randomIndex].correctAnswer}`;

		ansAlt1.type = 'radio';
		ansAlt1.className = 'radioBtns';
		ansAlt1.name = 'radioBtns';
		ansAlt1.checked = 'checked';
		ansLabelAlt1.innerHTML = `${triviaQuestions[randomIndex].alternative1}`;
		ansAlt1.value = `${triviaQuestions[randomIndex].alternative1}`;
		
		ansAlt2.type = 'radio';
		ansAlt2.className = 'radioBtns';
		ansAlt2.name = 'radioBtns';
		ansAlt2.checked = 'checked';
		ansLabelAlt2.innerHTML = `${triviaQuestions[randomIndex].alternative2}`;
		ansAlt2.value = `${triviaQuestions[randomIndex].alternative2}`;
		
		gameDiv.appendChild(questionHeader);
		gameDiv.appendChild(ansLabel);
		gameDiv.appendChild(ansCorrect);
		gameDiv.appendChild(ansLabelAlt1);
		gameDiv.appendChild(ansAlt1);
		gameDiv.appendChild(ansLabelAlt2);
		gameDiv.appendChild(ansAlt2);

};

newCreate();
