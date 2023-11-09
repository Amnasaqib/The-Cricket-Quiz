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
 