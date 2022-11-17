//grabbing elements from html
let mainEl = document.getElementById("quiz-block");
let timerEl = document.getElementById("timer");
let startBtnEl = document.getElementById("start");
let quizBlockEl = document.getElementById("multi-choice");
let questionEl = document.getElementById("quiz-question");
let answerA = document.getElementById("A");
let answerB = document.getElementById("B");
let answerC = document.getElementById("C");
let answerD = document.getElementById("D");
let optionArr = [answerA, answerB, answerC, answerD];
//declaring secondsLeft variable, but not assigning value yet.
let secondsLeft;
//questions will be displayed one after the other as their own objects in an array.
let quizArr = [
    {
        question: 'Which programming language creates the structure of a web application?',
        answers: ['JavaScript', 'GitHub', 'HTML', 'CSS'],
        rightAnswer: 2
    }, {
        question: 'Which git command will import a GitHub repository on your local hard drive for the first time?',
        answers: ['git pull origin main','git clone', 'git stash', 'git checkout -b'],
        rightAnswer: 1
    }, {
        question: 'What index number does an array start with by default?',
        answers: ['-1', 'undefined', '0','1'],
        rightAnswer: 2
    }, {
        question: 'Which method is used to reference HTML elements for use in JavaScript?',
        answers: ['.getElementById', '.appendChild', '.textContent', '.addEventListener'],
        rightAnswer: 0
    }]
//function below stylizes the start button to contrasting colors, indication of click.
function startBtnClick() {
    startBtnEl.style.background = "linear-gradient(var(--darkinverse), var(--inverse))";
    startBtnEl.style.borderBlockColor = "var(--white)";
    startBtnEl.style.color = "var(--white)";
};
//function below removes the start button from the heading once the timer starts.
function startBtnRemove() {
    startBtnEl.style.display = "none";
}

//function below will display the quiz material
function displayQuiz() {
    let i = 0;
    let rightAnswer;
    
    //function below is called to set value of question to whatever position the array is in.
    function displayNext() {
        rightAnswer = quizArr[i].rightAnswer;
        questionEl.textContent = quizArr[i].question;
        answerA.textContent = quizArr[i].answers[0];
        answerB.textContent = quizArr[i].answers[1];
        answerC.textContent = quizArr[i].answers[2];
        answerD.textContent = quizArr[i].answers[3];
    }
    
    displayNext();
    //event listener below will determine validity of answer, if correct, it will go to next question using displayNext(). 
    quizBlockEl.addEventListener('click', (event)=> {
        if (event.target.textContent === quizArr[i].answers[rightAnswer]) {
            console.log("right answer!");
            i++;
            if (i > quizArr.length) {
                displayScore();
            } else {
                displayNext();
            }
        } else if (event.target.textContent !== quizArr[i].answers[rightAnswer]) {
            event.target.textContent = "incorrect";
        } 
    })
        

    

}


//function below meant to display the remaining time
function displayTimer() {
    timerEl.textContent = "You have " + secondsLeft + " seconds left";
    if (secondsLeft === 1) {
        timerEl.textContent = "You have " + secondsLeft + " second left";
    }
};
//function below sets timer to 60 seconds, starts counting down using timerInterval (and will display questions). Master function that will be called upon click.
function quizTimer() {
    //remove start button once quiz timer counts down
    startBtnRemove();
    //display all quiz UI
    displayQuiz();

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

 