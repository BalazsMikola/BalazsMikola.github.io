function balazsCounter() {
  var countDownDate = new Date("Jul 25, 2064").getTime();
  var countdownFunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("counter").innerHTML =
      days + " days left until Jul 25, 2064";
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("counter").innerHTML = "You are 78!";
    }
  }, 1000);
}
balazsCounter();

function daniCounter() {
  var startDate = new Date("Apr 8, 2024").getTime();
  var currentDate = new Date().getTime();
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  var totalDays = Math.floor((currentDate - startDate) / millisecondsPerDay);
  var weekdays = 0;
  var allDays = 0;

  for (var i = 0; i <= totalDays; i++) {
    var date = new Date(startDate + i * millisecondsPerDay);
    var dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      allDays++;
    } else {
      weekdays++;
      allDays++;
    }
  }

  document.getElementById("workingDays").innerHTML = weekdays;
  document.getElementById("totalDays").innerHTML = allDays;
}
daniCounter();
