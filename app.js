/*global $*/
$(function() {
    var state ={
        score: 0,
        number: 1,
        questions: [{
            answers: ["02","03","21","12"],
            correct: 0
        },{
            answers: ["02","22","04","20"],
            correct: 2
        },{
            answers: ["02","03","23","06"],
            correct: 3
        },{
            answers: ["06","08","16","24"],
            correct: 1
        },{
            answers: ["10","02","05","25"],
            correct: 0
        },{
            answers: ["02","12","06","26"],
            correct: 1
        },{
            answers: ["02","07","14","27"],
            correct: 2
        },{
            answers: ["02","08","16","28"],
            correct: 2
        },{
            answers: ["02","09","29","18"],
            correct: 3
        },{
            answers: ["20","02","10","12"],
            correct: 0
        }]
    };
   $('.start').click(function() {
    document.location.href="question.html";
}); 
   $('ul').on("click", "li.correct", function() {
    alert("Correct!");
    state.number +=1;
    state.score +=1;
    loadQuestion(state);
});
   $('ul').on("click", "li.incorrect", function() {
    alert("Incorrect. The correct answer was " + state.questions[state.number-1].answers[state.questions[state.number-1].correct]);
      state.number +=1;
      loadQuestion(state);
});
$(".stats").on("click", function(){
   state.number=1;
   state.score=0;
   loadQuestion(state);
});
loadQuestion(state);
});
function loadQuestion(state){
    if(state.number<11){
        $("ul.answers").removeClass("hidden");
   $(".question").text("What is 2*"+state.number+"?"); 
   renderAnswers(state.questions[state.number-1].answers);
   $("li").eq(state.questions[state.number-1].correct).removeClass("incorrect").addClass("correct");
   $(".stats").text("Question " + state.number + " of 10 ................. Score: " + state.score + "/" + (state.number-1));
   $(".stats").removeClass("button");}
   else{
       $(".question").text("You scored " + state.score + "/ 10");
       $("ul.answers").addClass("hidden");
       $(".stats").text("Play again?");
       $(".stats").addClass("button");
   }
}
function renderAnswers(array){
    var answerList = array.map(function(item){return "<li class='incorrect button'>"+item+"</li>"});
    $("ul.answers").html(answerList);
} 
