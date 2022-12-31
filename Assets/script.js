const quizData = [
  {
    question:"Which of these data types dont belong?",
    a:"Nll",
    b:"Boolean",
    c:"Number",
    d:"Letter",
    correct:"d"
  },
  {
    question:"You can get elements out of arrays if you know their ___.",
    a:"Heart",
    b:"Index",
    c:"Element",
    d:"Literals",
    correct:"b",
  },
  {
    question: "Loops: Perform specific tasks _____ under applied conditions.",
    a: "Repeatedly",
    b: "Once",
    c: "Twice",
    d: "Null",
    correct: "a",
    },
    {
    question: "An if statement executes the ____ within brackets as long as the condition in parentheses is true.?",
    a: "Sentece",
    b: "Code",
    c: "Variable",
    d: "Index",
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
      if (answerElement.checked) {
        answer = answerElement.id;
      }
      });
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
    ;
    document.getElementById("time").textContent = timer;
    if (timer <= 0) {
      clearInterval(interval);
      quiz.innerHTML = `
        <h2>Time's up! You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="history.go(0)">Play Again</button>
      `;
    }
  }, 1000);
};

function stop() {
  clearInterval(check);
  check = null;
  document.getElementById("time").innerHTML = '0';
}

startTimer();



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
<ul id="scoes"></ul
<br>
  Enter your initials: <input type="text" id="initials"></input>
<button id="submitInitials">Submit</button>
` // location.reload() won't work in CodePen for security reasons;

const submitInitialsButton = document.getElementById("submitInitials");
submitInitialsButton.addEventListener("click", submitI);

LeaderB();

}
}
);

submitI();


// need to pull data from local storage and dislay it on the screen.


function LeaderB() {

  const item1 = localStorage.getItem("initials");
  const item2 = localStorage.getItem("score");
  // Check if data is returned, if not exit out of the function
  if (item1 && item2) {
    // Create a new list item element with the initials and score as text
    const listItem = document.createElement("li");
    listItem.textContent = `${item1}: ${item2}`;
    // Append the new list item to the ul element
    const scoresList = document.getElementById("scoes");
    scoresList.appendChild(listItem);
  } 
}







