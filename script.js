console.log("welcom to the world of quiz");

const questions = [
    {
        question: "Which of the following is NOT a type of algorithm?",
        answers: [
            {text: "Radio ButtonProgram", correct: false},
            {text: "Radio ButtonFlowchart", correct: true},
            {text: "Radio ButtonDecision Table", correct: false},
            {text: " Radio ButtonPseudocode", correct: false},
        ]
    },
    {
        question: "The type name/reserved word short is ___?",
        answers: [
            {text: "Short long", correct: false},
            {text: "short char", correct: false},
            {text: "short float", correct: false},
            {text: "short int", correct: true},
        ]
    },
    {
        question: " What actually get pass when you pass an array as a function argument?",
        answers: [
            {text: "First value of elements in array", correct: false},
            {text: "Base address of the array", correct: true},
            {text: " All value of element in array", correct: false},
            {text: "Address of the last element of array", correct: false},
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "The correct order of evaluation for the expression z = x + y * z / 4 % 2 - 1?",
        answers: [
            {text: "* / % = + -", correct: false},
            {text: "/ * % - + =", correct: false},
            {text: "- + = * % /", correct: false},
            {text: "* / % + - =?", correct: true},
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: " Who is the father of C language?",
        answers: [
            {text: " Steve Jobs", correct: false},
            {text: " James Gosling", correct: false},
            {text: " Dennis Ritchie", correct: true},
            {text: "Rasmus Lerdorf", correct: false},
        ]
    },
    {
        question: "Which of the following is not a valid C variable name?",
        answers: [
            {text: " int number", correct: false},
            {text: " float rate", correct: false},
            {text: " int variable_count", correct: false},
            {text: "int $main", correct: true},
        ]
    }
];

const questionElement = document.getElementById("Question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}




function resetState(){
    nextbutton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";

}

function  showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextbutton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();