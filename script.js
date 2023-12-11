"use strict";
////////////////////////////////////
// quiz data for the questions
const quizData = [
  {
    question: "When is April Fools?",
    a: "3rd April",
    b: "5th April",
    c: "1st April",
    d: "2nd April",
    answer: "c",
  },
  {
    question: "What is the best programming language?",
    a: "JS",
    b: "C++",
    c: "C#",
    d: "JAVA",
    answer: "a",
  },
];
// an array containing the the answer keys for the object
const keysArr = ["a", "b", "c", "d"];

// variables for the DOM
const mainContainer = document.querySelector(".main-container");
const ansSelectionLabels = document.querySelectorAll("label");
const ansSelInputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("button");
const mainHeading = document.querySelector("h1");
const questionHeading = document.querySelector("h2");

// global variable to keep track of the question of the quizData
let qNum = 0;

///////////////////////////
// functions creation
const loadQuiz = function () {
  const questionObj = quizData[qNum];
  questionHeading.textContent = questionObj.question;
  mainHeading.textContent = `QUIZ NUMBER ${qNum + 1}`;
  mainHeading.style.display = mainContainer.style.display = "block";

  ansSelectionLabels.forEach((item, i) => {
    item.textContent = questionObj[keysArr[i]];
  });
};

loadQuiz();

submitBtn.addEventListener("click", function () {
  ansSelInputs.forEach((item) => {
    if (item.checked && item.value == quizData[qNum].answer) {
        qNum++;
        item.checked = false;
    }
  });

  if (qNum < quizData.length) {
    loadQuiz();
  } else {
    alert("You have finished all the Questions!!");
    mainContainer.style.display = "none";
    mainHeading.style.display = "none";
  }
});
