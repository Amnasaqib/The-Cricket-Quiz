// global variables

const heading = document.getElementById("heading");
const menu = document.getElementById("menu");
const rulesSection = document.getElementById("rules");
const quizArea = document.getElementById("quiz-area");
const answerArea = document.getElementById("answer-area");
const timeDisplay = document.getElementById("timer");
const nextButton = document.getElementById("next-button");

// variables to be defined 
 let shuffledQuestion;
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
 