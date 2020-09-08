var startbtn= document.querySelector('#start');
var quiz = document.getElementById("quiz");
var questionELement = document.getElementById("question");
var choiceBtnsElement = document.querySelector('#choiceBtns');
var answerbtnsElement = document.getElementsByClassName('btns')
var questionIndex = 0;
var answerIndex = 0;

var questionsArray = [
    {
    question: 'Which of the following are you must likely to use to style a webpage?',
    answer: ['pencil','CSS','printer','PowerPoint'],
    correct:'CSS',
    },
    { 
    question: 'Which of the following are you most likely to use to animate a webpage?',
    answer:['javascript','CSS','pencil','documents'], 
    correct: 'javascript',        
    },
    {   
    question: 'What does html stand for?',    
    answer: ['javascript','Hypertext Markup Langauge','Hypertech Linguistics',"Hiddentext Magic Langauge"],
    correct: 'Hypertext Markup Langauge',
    },
    {
    question: 'How do you create a function in Javascript?',     
    answer:['function = myFunction()','function myFunction', 'function: myFunction',"$={}"],
    correct:'function myFunction',
    },
    {
    question: 'How do you write a comment in Javascript?',    
    answer:['//this is a comment', '<!--this is a comment-->','(this is a comment)',"just write it bro!"],
    correct:'//this is a comment'
    },
    {
    question: 'Which event occurs when the user clicks on an HTML element?',
    answer:['alert','mouseClick', 'hover', 'click'], 
    correct: 'click'
    },
];

//Timer
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

function selectAnswer(e){}
//Questions


function generateQuestion(){
    document.querySelector('#question').textContent =
    questionsArray[questionIndex].question;
    //document.querySelector('#choiceBtns').textContent =
   // questionsArray[answerIndex].answer;


    questionsArray[answerIndex].answer.forEach(answer=>{
    var button = document.createElement('button')
    button.textContent = answer
    button.classList.add('btn')

   
     button.addEventListener('click',selectAnswer)
 ChoiceBtnsElement.appendChild(button)
   
} )
}

function NextQuestion(){
    questionIndex++;
    answerIndex++;
    generateQuestion();
}


//Choices
//function answerChoices(){}


//Where it all starts and ends
startbtn.addEventListener('click', function(event){
    setTime();
    generateQuestion();
    NextQuestion();
    selectAnswer();
    removeStart(); 
});

//choiceBtns.addEventListener('click',function(){
//NextQuestion();
//generateQuestion();
//});

};
//start button disapear
function removeStart() {
    var myobj = document.getElementById("start");
    myobj.remove();

}