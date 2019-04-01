# ga-project-1
General Assembly - Project 1


Proposal: Fake-Q Trivia Game

Description: This will be a trivia game where the user will answer 12 multiple choice questions to win the jackpot. The user has 10 seconds to answer the question that the host reads or they are eliminated. If they answer one of the questions wrong, they have a chance to use a life, which brings them back into the game. 

Technologies Being Used: HTML and CSS for the website and Javascript for question/answer part.  

Implementation Problems: I would have to create a timer that resets after every question. To make it feel like there is a live host, I would need to have a video or image in the background, above the questions and a fake chat group running below the questions. Also, the answers are not in a,b,c format, they are clicked on and the color background changes. And I would need to load random questions, not the same ones in the same order.

Explanation to Solve the Problems:  Using setInterval in javascript to create the timer is the best option. I can place an image or video in the background of a div by using HTML and CSS.  The answer fields can be styled using CSS by having radio buttons and changing the color on hover and click. I could store at least 20 questions in the array and then use Math.random for the array length to churn out random questions. I can create a chat scroll using HTML, CSS and Javascript as well.
 
Here is my wireframe: 
