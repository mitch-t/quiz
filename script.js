var startbtn= document.querySelector('#start');
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceBtns =document.querySelector('#choiceBtns');
//var choiceA = document.getElementById("btn0");
//var choiceB = document.getElementById("btn1");
//var choiceC = document.getElementById("btn2");
//var choiceD = document.getElementById("btn3");

questionsArray = [
    {
    question: "What do you use to style a webpage?",
    answer: ["pencil","CSS","printer","CEA"],
    correct: "CSS"
    },
    { 
    question: "Which of the following are your most likely to use to animate a webpage?",
    
    answer:["javascript","CSS","pencils","paint"],
    correct: "javascript"
    },
    {   
    question: "What does html stand for?",
        
    answer: ["javascript","websites","Hypertext Markup Langauge","Hiddentext Magic Langauge"],
    correct: "Hypertext Markup Langauge"
    },
    {
    question: 'How do you create a function in Javascript?',
        
    answer:["function = myFunction()","function myFunction","function: myFunction","$={}"],
    correct: "function myFunction"
    },
    {
    question: 'How do you write a comment in Javascript?',
        
    answer:[ "//this is a comment","<!--this is a comment-->","(this is a comment)","just write it bro"],
    correct: "//this is a comment"
    },
    {
    question: 'Which event occurs when the user clicks on an HTML element?',
        
    answer:["alert","onmouseClick","hover","onclick"],
    correct: "onclick"
    }
];
var timeElement = document.querySelector(".time");

var secondsLeft = 60;

function setTime() {
var timerInterval = setInterval(function() {
secondsLeft--;
timeElement.textContent = secondsLeft + " seconds left!";

if(secondsLeft === 0) {
  clearInterval(timerInterval);
  showScores();
}
}, 1000);
}

var questionIndex = 0;
function generateQuestion(){
    document.querySelector('#question').textContent =
    questionsArray[questionIndex].question;
} 

function NextQuestion(){
    questionIndex++;
    generateQuestion();
}
generateQuestion();

startbtn.addEventListener('click', function(event){
    setTime();
    EventTarget.remove(startbtn);
});
//choiceBtns.addEventListener('click',function(){
//NextQuestion();
//generateQuestion();
//});


  