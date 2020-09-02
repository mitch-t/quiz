var startbtn= document.querySelector('#start');
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceBtnsElement =document.querySelector('#choiceBtns');
//var choiceA = document.getElementById("btn0");
//var choiceB = document.getElementById("btn1");
//var choiceC = document.getElementById("btn2");
//var choiceD = document.getElementById("btn3");

questionsArray = [
    {
    question: "What do you use to style a webpage?",
    answer: [
        { text:"pencil", correct: false},
        { text:"CSS", correct: true},
        { text:"printer", correct: false},
        { text:"CDA", correct: false},
        ]
    },
    
    { 
    question: "Which of the following are your most likely to use to animate a webpage?",
    
    answer:[
        { text:"javascript", correct: true},
        { text:"CSS", correct: false},
        { text:"pencil", correct: false},
        { text:"documents", correct: false},
        ]
    },

    {   
    question: "What does html stand for?",
        
    answer: [
        { text:"javascript", correct: false},
        { text:"Hypertext Markup Langauge", correct: true},
        { text:"Hypertech Linguistics", correct: false},
        { text:"Hiddentext Magic Langauge", correct: false},
        ]
    },

    {
    question: 'How do you create a function in Javascript?',
        
    answer:[
        { text:"function = myFunction()", correct: false},
        { text:"function myFunction", correct: true},
        { text:"function: myFunction", correct: false},
        { text:"$={}", correct: false},
        ]
    },

    {
    question: 'How do you write a comment in Javascript?',
        
    answer:[
        { text:"this is a comment", correct: true},
        { text:"<!--this is a comment-->", correct: false},
        { text:"(this is a comment)", correct: false},
        { text:"just write it bro!", correct: false},
        ]
    },
    {
    question: 'Which event occurs when the user clicks on an HTML element?',
        
    answer:[
        { text:"alert", correct: false},
        { text:"mouseClick", correct: false},
        { text:"hover", correct: false},
        { text:"onclick", correct: true},
    ]
    }
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
//Questions
var questionIndex = 0;
function generateQuestion(){
    document.querySelector('#question').textContent =
    questionsArray[questionIndex].question;
}
    //document.querySelector('#choiceBtns').textContent =
    //questionsArray[[0]].answer;
    //answer.forEach(answer=>{
      //  var button = document.createElement('button')
    //    button;innerText = answer.text
      //  button.classList.add('btn')
      //  if(answer.correct){
       //     button.dataset.correct=answer.corrrect
      //  }
      //  button.addEventListener('click',selectAnswer)
    //    choicebtnsElement.appendChild(button)
    //})
    
//function selectAnswer(e){}

function NextQuestion(){
    questionIndex++;
    generateQuestion();
}
//Choices
function answerChoices(){

}

//Where it all starts and ends
startbtn.addEventListener('click', function(event){
    setTime();
    generateQuestion();
    removeStart(); 
});

//choiceBtns.addEventListener('click',function(){
//NextQuestion();
//generateQuestion();
//});

//start button disapear
function removeStart() {
    var myobj = document.getElementById("start");
    myobj.remove();

}