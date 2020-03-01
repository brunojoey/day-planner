var todayDate = moment(String).date(Number);
$(".date-text").append(todayDate);
console.log(todayDate);

var futureDate = moment(String).add(7, "days");
console.log(futureDate);
$(".future-row").append(futureDate);

var pastDate = moment(String).subtract(7, "days");
console.log(pastDate);
$(".past-row").append(pastDate);


