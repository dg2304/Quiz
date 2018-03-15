function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice"+i); 
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    console.log(button);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    };
}


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  
     
}

// create questions
var questions = [
    new Question("23+23?", ["44", "45","47", "46"], "46"),
    new Question("89-44?", ["45", "44", "47", "46"], "45"),
    new Question("87%3", ["0", "1","2", "4"], "0"),
    new Question("87*3?", ["261", "260", "263", "262"], "261"),
    new Question("87/3", ["0", "1", "2", "4"], "0")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();