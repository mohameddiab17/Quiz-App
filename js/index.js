import Question from "./question.js";
import Quiz from "./quiz.js";

export const questionContainer = document.querySelector(".questions-container")
const quizForm = document.getElementById("quizForm");
const categoryMenu = document.getElementById("categoryMenu");
const difficultyOptions = document.getElementById("difficultyOptions");
const questionsNumber = document.getElementById("questionsNumber");
const startQuizBtn = document.getElementById("startQuiz");
export let questions = [];
export let currentQuiz = {};


async function startQuiz(){
    
    const category = categoryMenu.value;
    const difficulty = difficultyOptions.value;
    const amount = questionsNumber.value;
    
    currentQuiz = new Quiz(difficulty , amount , category);
    questions = await currentQuiz.getQuestions();
    console.log(questions);
    quizForm.classList.replace("d-flex" , "d-none");
    const firstQuestion = new Question(0);
    firstQuestion.displayQuestion();
    console.log(firstQuestion);
    
}

document.addEventListener("keydown" , function handleKeyDown(eventInfo){
    if (eventInfo.key === "Enter") {
        eventInfo.preventDefault();
        startQuiz()
        document.removeEventListener("keydown" , handleKeyDown)
    }
})
startQuizBtn.addEventListener("click" , startQuiz);

