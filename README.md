# General Assembly - Project 1

#### Project Name: Jankey-Q Trivia

## Project Overview
This is my first project assignment for General Assembly's Software Engineering Immersive program. The requirements were to Be a working, interactive, non-trivial game, include at least one CSS animation/transition fired by a DOM event, be styled with CSS, and use flexbox or CSS grid for layout and positioning.

### Description
This will be a trivia game where the user will answer 12 multiple choice questions to win the jackpot. The user has 10 seconds to answer the question that the host reads or they are eliminated. If they answer one of the questions wrong, they have a chance to use a life, which brings them back into the game. 

###Project Schedule table

Day | Deliverable
-----------------|----------------------------------------
Day 1: Sunday    | Game Idea, Wireframes, Pseudo Code
Day 2: Monday    | Priority Matrix, Basic Clickable Model
Day 3: Tuesday   | Coding
Day 4: Wednesday | Working Prototype, Editing, Testing
Day 5: Thursday  | Editing, Testing, Game Completed
Day 6: Friday    | Presentation



### Game Components
	*landing page
	*game initialization
	*playing the game
	*timer for each question
	*winning the game
	*random jackpot

### Technologies Being Used:
HTML and CSS for the website and Javascript for question/answer part.  

Implementation Problems: I would have to create a timer that resets after every question. To make it feel like there is a live host, I would need to have a video or image in the background, above the questions and a fake chat group running below the questions. Also, the answers are not in a,b,c format, they are clicked on and the color background changes. And I would need to load random questions, not the same ones in the same order.

Explanation to Solve the Problems:  Using setInterval in javascript to create the timer is the best option. I can place an image or video in the background of a div by using HTML and CSS.  The answer fields can be styled using CSS by having radio buttons and changing the color on hover and click. I could store at least 20 questions in the array and then use Math.random for the array length to churn out random questions. I can create a chat scroll using HTML, CSS and Javascript as well.

### MVP
Submitted a running version of program with no landing page or winning page. The questions, answers, buttons and prompts were all created with Javascript.

### Post MVP

### Wireframes
Wireframe is attached.

### Deployment
This project is available at: http://jankey-q.surge.sh/

