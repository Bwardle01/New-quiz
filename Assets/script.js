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
const leaderBoard = document.getElementById("leaderBoard");

let currentQuiz = 0;
let score = 0;
let timer = 30;
let interval;


// Pull each answer element and when checked it deselects.
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
  };

  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
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

const startTimer = () => {
  interval = setInterval(() => {
    timer--;
    document.getElementById("time").innerText = timer;
    if (timer <= 0) {
      clearInterval(interval);
      quiz.innerHTML = `
        <h2>Time's up! You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="history.go(0)">Play Again</button>
      `;
    }
  }, 1000);
};

const submitI = () => {
  // Retrieve the value of the initials input field
  const initials = document.getElementById("initials").value;

  // Save the score and initials to local storage
  localStorage.setItem("score", score);
  localStorage.setItem("initials", initials);

  // Display a message to confirm that the score and initials have been saved
  alert(`Your score of ${score} and initials "${initials}" have been saved!`);
};

submitButton.addEventListener("click", () => {
const answer = getSelected();
if (answer) {
if (answer === quizData[currentQuiz].correct) 
{score++; 
} else{timer = timer - 5 }
} 

currentQuiz++;
if (currentQuiz < quizData.length) loadQuiz();
else {
quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="history.go(0)">Play Again</button> 
<br>
  Enter your initials: <input type="text" id="initials"></input>
<button id="submitInitials">Submit</button>
` // location.reload() won't work in CodePen for security reasons;

const submitInitialsButton = document.getElementById("submitInitials");
submitInitialsButton.addEventListener("click", submitI);
}
}
);



startTimer();


