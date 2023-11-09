// global variables

const heading = document.getElementById("heading");
const menu = document.getElementById("menu");
const rulesSection = document.getElementById("rules");
const quizArea = document.getElementById("quiz-area");
const answerArea = document.getElementById("answer-area");
const timeDisplay = document.getElementById("timer");
const nextButton = document.getElementById("next-button");

// variables to be defined 
 let shuffledQuestions;
 let currentQuestionIndex;
 let correctAnswers;
 let score;
 let timeLeft;
 let timerInterval;

 /* Waits for DOM to be loaded */
 document.addEventListener("DOMContentLoaded", function()
 {
    const menuButtons = this.querySelectorAll(".menu-btn");
    menuButtons.forEach((menuButton) => {
        menuButton.addEventListener("click", function() {
            if (this.getAttribute("id") ===  "rules-button") {
                displayRules();
            } else if (this.getAttribute("id") === "quiz-button"){
                Questions();
            }
        });
    });
 });
 /**
  * hides main menu while the rules section is displayed.
  */

 function displayRules() {
    rulesSection.classList.remove("hide");
    heading.classList.add("hide");
    menu.classList.add("hide");
    const closeRulesButton = document.getElementById("close-rules");
    closeRulesButton.addEventListener("click", closeRules);
 }

 /**
  *   Hide rules section and display back main menu. 
   */
 function closeRules() {
    rulesSection.classList.add("hide");
    heading.classList.remove("hide");
    menu.classList.remove("hide");
 }

 /**
  * hide the quiz area,reset the quiz and display menu
  */
 
 function closeQuiz() {
    currentQuestionIndex = 0;
    clearInterval(timerInterval);
    resetScore();
    quizArea.classList.add("hide");
    heading.classList.remove("hide");
    menu.classList.remove("hide");
 }
  /**
   * Displays quiz area and get 10 random questions.
   */

  function startQuiz() {
    quizArea.classList.remove("hide");
    shuffledQuestions = Questions.sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    nextQuestion();
  }

  /**
   * function to reset and display the quiz content
   */

  function nextQuestion() {
    clearInterval(timerInterval); // stop timer from continuing
    if (currentQuestionIndex < 10) {
        resetQuizContent();
        displayQuizContent(shuffledQuestions[currentQuestionIndex]);
        currentQuestionIndex++;
        timer();
    } else {
        finalResult();
    }
  }