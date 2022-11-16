//grabbing elements from html
let mainEl = document.getElementById("quiz-block");
let timerEl = document.getElementById("timer");
let startBtnEl = document.getElementById("start");
let questionEl = document.getElementById("quiz-question");
let answerA = document.getElementById("A");
let answerB = document.getElementById("B");
let answerC = document.getElementById("C");
let answerD = document.getElementById("D");
//declaring secondsLeft variable, but not assigning value yet
let secondsLeft;
//function below stylizes the start button to contrasting colors, indication of click
function startBtnClick() {
    startBtnEl.style.background = "linear-gradient(var(--darkinverse), var(--inverse))";
    startBtnEl.style.borderBlockColor = "var(--white)";
    startBtnEl.style.color = "var(--white)";
};
//function below removes the start button from the heading once timer starts
function startBtnRemove() {
    startBtnEl.style.display = "none";
}
//function below meant to display the remaining time
function displayTimer() {
    timerEl.textContent = "You have " + secondsLeft + " seconds left";
    if (secondsLeft === 1) {
        timerEl.textContent = "You have " + secondsLeft + " second left";
    }
};
//questions will be displayed one after the other as their own functions
function qOne() {
    questionEl.textContent = "What is considered to be the backbone (or structure) of web applications?";
    answerA.textContent = "JavaScript";
    answerB.textContent = "GitHub";
    answerC.textContent = "HTML";
    answerD.textContent = "CSS";

}
//the array below will be used to cycle through questions on screen.
let quizArr = [qOne]

//function below sets timer to 60 seconds, starts counting down using timerInterval (and will display questions). Master function that will be called upon click.
function quizTimer() {
    //remove start button once quiz timer counts down
    startBtnRemove();
    qOne();

    secondsLeft = 60;
    displayTimer();
    var timerInterval = setInterval(function() {
        secondsLeft--;
        displayTimer();

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Quiz Over!"
        }


    }, 1000)
    
};
//adding event listener for click, so that timer starts and quiz questions are displayed
startBtnEl.addEventListener('click', quizTimer);
startBtnEl.addEventListener('mousedown', startBtnClick);

 