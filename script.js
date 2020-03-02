var todayDate = $(".date-text").text(moment().format("MMMM Do YYYY"));

var welcomeText = $(".time-text").text(moment().format("LT"));
console.log(welcomeText);

var timeBlockClone = $(".time-block");

$(document).ready(function() {
    for (var i = 0; i < 24; i++) {
        timeBlockClone.clone().insertAfter(timeBlockClone);
        timeBlockClone.text(moment.duration(12, "hours"));
    }
});

console.log(timeBlockClone)

// for loop for the generation of seperate hours