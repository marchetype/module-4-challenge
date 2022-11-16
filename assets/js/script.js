let mainEl = document.getElementById("quiz-block");
let timerEl = document.getElementById("timer");
let startBtnEl = document.getElementById("start");

let secondsLeft;

//function below meant to display the remaining time
function displayTimer() {
    timerEl.textContent = "You have " + secondsLeft + " seconds left";
    if (secondsLeft === 1) {
        timerEl.textContent = "You have " + secondsLeft + " second left";
    }
}   

//function below sets timer to 60 seconds, starts counting down using timerInterval
function quizTimer() {
    secondsLeft = 60;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        displayTimer();

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }


    }, 1000)
}

//adding event listener for click, so that timer starts and quiz questions are displayed
startBtnEl.addEventListener('click', quizTimer);

