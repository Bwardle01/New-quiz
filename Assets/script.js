const quizData = [
  {
    question:"what were the owls trained to carry in Harry Potter?",
    a:"books",
    b:"wands",
    c:"paper",
    d:"letters",
    correct:"d"
  },
  {
    question:"What was the shape of Harry Potters scar?",
    a:"Heart",
    b:"Bolt",
    c:"Rain",
    d:"Snowflake",
    correct:"b",
  },
  {
    question: "What curse is known to kill?",
    a: "Avada Kedavra",
    b: "Crucio",
    c: "Imperio",
    d: "Reducto",
    correct: "a",
    },
    {
    question: "What animal is used for the popular chocolate snack?",
    a: "Bunny",
    b: "Frog",
    c: "Cat",
    d: "Dog",
    correct: "b",
    },
    ];

    
// Creating a var for each part of the quiz.

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// Pull each answer element and when checked it deselects.
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
  };

  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement)= => {
      if (answerElement.checked) answer = answerElement.id;});
    
    return answer;
  };

  const loadQuiz = () => {
    deselectAnswers ();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  loadQuiz();
submitButton.addEventListener("click", () => {
const answer = getSelected();
if (answer) {
if (answer === quizData[currentQuiz].correct) score++;
currentQuiz++;
if (currentQuiz < quizData.length) loadQuiz();
else {
quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="history.go(0)">Play Again</button>
` // location.reload() won't work in CodePen for security reasons;
}
}
});