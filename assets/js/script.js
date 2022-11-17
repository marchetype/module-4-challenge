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
//same with rightAnswer
let rightAnswer;
//questions will be displayed one after the other as their own objects in an array.
let quizArr = [
    {
        question: 'Which programming language creates the structure of a web application?',
        answers: ['JavaScript', 'GitHub', 'HTML', 'CSS'],
        rightAnswer: 'C'
    }, {
        question: 'Which git command will import a GitHub repository on your local hard drive for the first time?',
        answers: ['git pull origin main','git clone', 'git stash', 'git checkout -b'],
        rightAnswer: 'B'
    }, {
        question: 'What index number does an array start with by default?',
        answers: ['-1', 'undefined', '0','1'],
        rightAnswer: 'C'
    }, {
        question: 'Which method is used to reference HTML elements for use in JavaScript?',
        answers: ['.getElementById', '.appendChild', '.textContent', '.addEventListener'],
        rightAnswer: 'A'
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


//function below meant to display the remaining time
function displayTimer() {
    timerEl.textContent = "You have " + secondsLeft + " seconds left";
    if (secondsLeft === 1) {
        timerEl.textContent = "You have " + secondsLeft + " second left";
    }
};


//function below sets timer to 60 seconds, starts counting down using timerInterval (and will display questions). Master function that will be called upon click.
function quizTimer() {
    let i = 0;
    let score = 0;
    secondsLeft = 60;
    //display all quiz UI
    function displayQuiz() {
        questionEl.textContent = quizArr[i].question;
        answerA.textContent = quizArr[i].answers[0];
        answerB.textContent = quizArr[i].answers[1];
        answerC.textContent = quizArr[i].answers[2];
        answerD.textContent = quizArr[i].answers[3];
    }

    //remove start button once quiz timer counts down
    startBtnRemove();

    displayQuiz();

    displayTimer();

    quizBlockEl.addEventListener('click', (event)=> {
        console.dir(event.target);
        //if selection is correct, index goes up by one and so does score.
        if (event.target.id === quizArr[i].rightAnswer) {
            console.log("right answer!");
            i++;
            score ++;
            displayQuiz();    
        //if selection is correct and i is greater than the array's length, seconds left is set to zero.
        } else if (event.target.id === quizArr[i].rightAnswer && i === quizArr.length) {
            secondsLeft = 0;
        //if selection is incorrect, index goes up but score does not. secondsLeft is decreased as well.
        } else if (event.target.id !== quizArr[i].rightAnswer) {
            i++;
            displayQuiz();
            secondsLeft--;
        }
    })

    var timerInterval = setInterval(function() {
        secondsLeft--;

        displayTimer();

        
        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Quiz Over! Score:  " + i;
        }


    }, 1000)
    
};


    


//adding event listener for click, so that timer starts and quiz questions are displayed
startBtnEl.addEventListener('click', quizTimer);
startBtnEl.addEventListener('mousedown', startBtnClick);

 