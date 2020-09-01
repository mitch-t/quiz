
const startbtn= document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var counter = document.getElementById("counter");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var scoreContainer = document.getElementById("scoreContainer");

let questions =[
        {
        question: "What do you use to style a webpage?",
        choiceA: "pencil",
        choiceB: "CSS",
        choiceC: "printer",
        choiceD: "CEA",
        correct: "A"
        },
        { 
        question: "Which of the following are your most likely to use to animate a webpage?",
        
        choiceA: "javascript",
        choiceB: "CSS",
        choiceC: "pencils",
        choiceD: "paint",
        correct: "A"
        },
        {   
        question: "What does html stand for?",
            
        choiceA: "javascript",
        choiceB: "websites",
        choiceC: "Hypertext Markup Langauge",
        choiceD: "Hiddentext Magic Langauge",
        correct: "C"
        },
        {
        question: 'How do you create a function in Javascript?',
            
        choiceA: "function = myFunction() ",
        choiceB: "function myFunction",
        choiceC: "function: myFunction",
        choiceD: "$={}",
        correct: "B"
        },
        {
        question: 'How do you write a comment in Javascript?',
            
        choiceA: "//this is a comment",
        choiceB: "<!--this is a comment-->",
        choiceC: "(this is a comment)",
        choiceD: "just write it bro",
        correct: "A"
        },
        {
        question: 'Which event occurs when the user clicks on an HTML element?',
            
        choiceA: "alert",
        choiceB: "onmouseClick",
        choiceC: "hover",
        choiceD: "onclick",
        correct: "D"
        }
];
 questions[0].question
 questions[0].choiceA
 questions[0].choiceB
 questions[0].choiceC
 questions[0].choiceD
 questions[0].correct

 let endQuestionIndex = questions.length-1;
 let currentQuestionIndex = 0;


 function renderQuestion(){
     let q = questions[currentQuestionIndex];
     question.innerHTML = "<p>" + q.question + "<p>";
     choiceA.innerHTML = q.choiceA;
     choiceB.innerHTML = q.choiceB;
     choiceC.innerHTML = q.choiceC;
     choiceD.innerHTML = q.choiceD;
 }

 currentQuestionIndex = 0;
 renderQuestion()

 currentQuestionIndex++
 renderQuestion()


 //timer
 var questionTime = 10;
 let count = 0;
function timerRender(){
    if(count <= questionTime){
        counter.innerHTML = count;
    }else{
        count = 0;
        if(currentQuestionIndex < endQuestionIndex){
            currentQuestionIndex++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
          //  scoreRender();}
    }
}
let TIMER = setInterval(timerRender,1000);


//check answer
let score = 0;
function checkAnswer(answer){
    if(questions[currentQuestionIndex].correct == answer) {
        score++;
    }if(currentQuestionIndex < endQuestionIndex){
        count = 0;
        currentQuestionIndex++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
    }
}
//calling start button to function start quiz
startbtn.addEventListener('click',startQuiz)

// start quiz function
function startQuiz() {
console.log('Quiz')}
//Intro.innerHTML = "";




}