//questions in seperate class
//answers in separate class
//class Questions; constructors (quest a, b, c, d)
//let q1 = newQuestion()
// something.innerHTML= "q1.a"
//event listener for when they click a then domA.innerHTML 
//in the if statement, if the answer is correct, grab the video and mark it to auto play
//just comparing what they clicked to the correct answer
//call answers 
//text based game with ques and answers and track which key is which answer and add/subtract points and then think about visualizing. make it visual and then think about loops about what happens, decision tree 
//no scrolling chat
//focus on storing data later
//have one function to decrement 10 seconds and then call that function each time
//pick out elements of the game that are mvp for me to do by thursday
//let userAnswer =  document.getElementById('questionForm').value;

// let userAnswer = document.querySelector('.checkedAns:checked');

// userAnswer.innerHTML = `A: ${triviaQuestions[2].correctAnswer}`;

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
//  {
//  	question: "What was the name of the London theatre built by Shakespeare's playing company in
//  	1599?",
// 	correctAnswer: "The Globe Theatre",
// 	alternative1: "Broadway",
// 	alternative2: "National Theatre"	
// },
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
console.log(triviaQuestions[0])
// function displayQuestion() {

// document.getElementById('questionHeader').innerHTML = 
// 'Question: ' + triviaQuestions[0].question;
// }

// displayQuestion();

//document.getElementById('prompt').innerText = prompt;
// // for (let i = 0; i<triviaQuestions.length; i++) {
//  	questionHeader.textContent = `Question: ${triviaQuestions[i].question}`;
	// let gameCorrectAns.innerHTML = `${triviaQuestions[i].correctAnswer}`;
	// let gameAlternativeAns1.innerHTML = xc`${triviaQuestions[i].alternative1}`;
	// let gameAlternativeAns2.innerHTML = `${triviaQuestions[i].alternative2}`;
// }

// console.log(triviaQuestions[0].correctAnswer);
//document.getElementById('questionHeader').innerHTML = 'test';
//
const gameDiv = document.querySelector('.game');

const create = () => {
	for (let i = 0; i < triviaQuestions.length; i += 1) {
		const questionHeader = document.createElement('h3');
		const ansCorrect = document.createElement('input')
		const ansAlt1 = document.createElement('input');
		const ansAlt2 = document.createElement('input');

		const ansLabelAlt1 = document.createElement('label');
		const ansLabelAlt2 = document.createElement('label');
		const ansLabel = document.createElement('label');

		questionHeader.innerHTML = `${triviaQuestions[i].question}`;

		ansCorrect.type = 'radio';
		ansCorrect.className = 'radioBtns';
		ansCorrect.name = 'radioBtns';
		ansCorrect.checked = 'checked';
		ansLabel.innerHTML = `${triviaQuestions[i].correctAnswer}`;
		ansCorrect.value = `${triviaQuestions[i].correctAnswer}`;

		ansAlt1.type = 'radio';
		ansAlt1.className = 'radioBtns';
		ansAlt1.name = 'radioBtns';
		ansAlt1.checked = 'checked';
		ansLabelAlt1.innerHTML = `${triviaQuestions[i].alternative1}`;
		ansAlt1.value = `${triviaQuestions[i].alternative1}`;
		
		ansAlt2.type = 'radio';
		ansAlt2.className = 'radioBtns';
		ansAlt2.name = 'radioBtns';
		ansAlt2.checked = 'checked';
		ansLabelAlt2.innerHTML = `${triviaQuestions[i].alternative2}`;
		ansAlt2.value = `${triviaQuestions[i].alternative2}`;
		
		gameDiv.appendChild(questionHeader);
		gameDiv.appendChild(ansLabel);
		gameDiv.appendChild(ansCorrect);
		gameDiv.appendChild(ansLabelAlt1);
		gameDiv.appendChild(ansAlt1);
		gameDiv.appendChild(ansLabelAlt2);
		gameDiv.appendChild(ansAlt2);
	}
}
// create();


//math random and math floor to randomly select questions

const handleClick = () => {
	let correctGif = "./images/best-correct.gif";
	let wrongGif = "./images/nope.gif";

	gameDiv.addEventListener('click', (evt) => {
		let score = 0;
		if (evt.target.className === 'radioBtns') {
			triviaQuestions.forEach((question) => {
				if (evt.target.value === question.correctAnswer) {
					document.getElementById('gifs').innerHTML = "<img src=./images/best-correct.gif>";
					// pushAns(question.correctAnswer)
				} else if (evt.target.value !== question.correctAnswer) {
					document.getElementById('gifs').innerHTML = "<img src=./images/nope.gif>";
					// console.log('incorrect');
				}
			})
		} else {
			document.getElementById('gifs').innerHTML = "<img src=./images/quiz-garbage.gif>";
		}
	})
};

 handleClick();



let newArr = [];
 newArr = ['ansCorrect', 'ansAlt1', 'ansAlt2'];

const pushAns = (ans) => {
	newArr.push(ans)
}

for (let i = 0; i < triviaQuestions.length; i += 1) {
	if (newArr[i] === triviaQuestions[i].correctAnswer) {
		//do something
	}
}

let randomIndex = Math.floor(Math.random() * triviaQuestions.length)

const newCreate = () => {
	// triviaQuestions[randomIndex].whatever
		const questionHeader = document.createElement('h3');
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
//start over or end game


//check answer
// const checkAnswer = () => {
// 	let wrongAnswer = document.getElementById('wrongAnswer');
// 	let wrongGif = "./images/nope.gif";
// 	let correctAnswer = document.getElementById('gif');
// 	let correctGif = "./images/nope.gif";
// 	let userAnswer = document.querySelector('.checkedAns:checked');
// 	if(userAnswer === ansCorrect.value) {
// 		document.getElementById('gifs').innerHTML = "<img src=" + correctGif;
// 		//go to next question
// 	} else {
// 		document.getElementById('gifs').innerHTML = "<img src=" + wrongGif;
//start over or end game
// 	}
// }