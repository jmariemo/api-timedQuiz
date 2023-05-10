// variables
var startButton = document.querySelector("#start-button");

//start quiz: hide start page, show quiz page, run quiz function
startButton.addEventListener("click", function() {
    document.getElementById("start-page").style.display="none";
    document.getElementById("quiz-page").style.display="flex";
    quiz ();
})