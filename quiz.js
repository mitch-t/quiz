var totalCorrect = 0;
var totalIncorrect = 0;
var startBtn = document.getElementById('start')
var Intro = document.getElementById('header')
var questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var questions =[
    {
        question: 'What do you use to style a webpage?',
        answers: [
            {text: 'paper', correct: false},
            {text: 'CSS', correct: true},
            {text: 'pencils', correct: false},
            {text: 'paint', correct: false},
        ]
        ,
        question: 'Which of the following are your most likely to use to animate a webpage?',
        answers: [
            {text: 'javasxript', correct: true},
            {text: 'CSS', correct: false},
            {text: 'pencils', correct: false},
            {text: 'paint', correct: false},
        ]
        ,
        
            question: 'What does html stand for?',
            answers: [
                {text: 'paper', correct: false},
                {text: 'CSS', correct: true},
                {text: 'pencils', correct: false},
                {text: 'paint', correct: false},
            ]
    }
]
 

//calling start button to function start quiz
startBtn.addEventListener('click',startQuiz)

// start quiz function
function startQuiz() {
console.log('Quiz')
//Intro.innerHTML = "";
//var quesions = document.createElement.innerHTML.questionContainerElement;

//timer
//var counter = 10
//var countdown = function(){
    //counter--;
    //if (counter === 0){
       // clearInterval(startCountdown);
   // };
//};
//var startCountdown = setInterval(countdown, 1000);
var questionsSize = questions.length;
for (var i = 0; i < questionsSize; i++);

//var questionContainerElement = document.createElement("question");
//startBtn.classList.add('hide')
//Intro.classList.add('hide')



    
    



  

//questionContainerElement.classList.remove('hide')


//for(var i = 0; i < 10; i++)
    //var question = questions [Math.floor(Math.random()
    //* questions .length)]; }

//function createNextQuestion() {
   
//function showQuestion()

//function chosenAnswer()


    

//resetState()
//function resetState (){
   // while (answerButtonsElement.firstChild) {
     //   answerButtonsElement.removeChild
     //   (answerButtonsElement.firstChild)}}
}