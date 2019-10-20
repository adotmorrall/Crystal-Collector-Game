var matchThisNumber
var totalScore = 0;
var blueCrystal = $("#blue-crystal");
var orangeCrystal = $("#orange-crystal");
var purpleCrystal = $("#purple-crystal");
var redCrystal = $("#red-crystal");
var userWins = 0;
var userLosses = 0;

var crystalValues = function () {
    blueCrystal.attr("data-num", Math.floor(Math.random() * 15) + 1);
    orangeCrystal.attr("data-num", Math.floor(Math.random() * 15) + 1);
    purpleCrystal.attr("data-num", Math.floor(Math.random() * 15) + 1);
    redCrystal.attr("data-num", Math.floor(Math.random() * 15) + 1);
    console.log(blueCrystal.data("num"));
    console.log(orangeCrystal.data("num"));
    console.log(purpleCrystal.data("num"));
    console.log(redCrystal.data("num"));
}

// Resets the game
var startGame = function () {
    matchThisNumber = Math.floor(Math.random() * 101);
    $("#random-number").text(matchThisNumber);
    crystalValues();
    $("#user-total-score").text(0);
    totalScore = 0;
}

startGame()

$(".btn").on("click", function () {
    totalScore = totalScore + $(this).data("num");
    $("#user-total-score").text(totalScore);

    if (totalScore === matchThisNumber) {
        alert("Congrats, you are smarter than a 5th grader!");
        userWins++
        $("#win-counter").text(userWins)
        startGame()
    } else if (totalScore > matchThisNumber) {
            alert("Better luck next time champ!");
            userLosses++
            $("#loss-counter").text(userLosses)
            startGame()
        }
    })
