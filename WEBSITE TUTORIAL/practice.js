// function changeWidth(){
//     document.getElementById("wait").style.width="500px";
// }


// function returnWidth(){
//     document.getElementById("wait").style.width="200px";
  
// }



// function showMessage(f,g){

     
//     console.log(f+g)
// }
// showMessage(10, 10);


// let food = "ginger"
// function showMessage(){
//     let Rice = "Garri";
//     console.log (Rice)

// }
// console.log(food)
// showMessage()
 
// let meat= "nama";
// console.log(meat)



const questions = [{
question: "which part of Nigeria is Kaduna state located?",
answers:[
    {Text: "South-South", correct: false},
    {Text: "North-West", correct: true},
    {Text: "South-West", correct: false},
    {Text: "North-East", correct: false}




]
},

{
question: "which part of Nigeria is Kaduna state located?",
    answers:[
        {Text: "South-South", correct: false},
        {Text: "North-West", correct: false},
        {Text: "South-West", correct: true},
        {Text: "North-East", correct: false}
    
    
    
    
    ]  





},

{
    question: "which part of Nigeria is Kaduna state located?",
    answers:[
        {Text: "South-South", correct: true},
        {Text: "North-West", correct: false},
        {Text: "South-West", correct: false},
        {Text: "North-East", correct: false}
    
    
    
    
    ]

}

];

const questionElement= document.getElementById("question");
const ansbtn= document.getElementById("ansbtn");
const next= document.getElementById("next");

let currentQuestionIndex= 0;
let score= 0;

function  startQuiz(){
 currentQuestionIndex = 0;
 score = 0;
 nextButton.innerHTML = "Next";

 showQuestion();
}


 function showQuestion(){
     restState(); 
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML= questionNo + ". " + currentQuestion.question;


  currentQuestion.answers.foreEach(answer => {
    
    const  button = document.createElement ("button")
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBottun.appendChild(bottun); 
      if (answer.correct){
          button.dataset.correct = answer.correct;
      }
     button.addEventListener("click", selectAnswer);


    });

  }


function resetState() {
  nextButton.style.disply = "none"
  while (ansBtns.firstChild){
   ansBtns.removeChild(ansbtns.firstChild);
  }
    
}

startQuiz();


