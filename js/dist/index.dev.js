"use strict";

var homeScoreTxt = document.getElementById("home-score-value");
var guestScoreTxt = document.getElementById("guest-score-value");
var homeScore = 0;
var guestScore = 0;
document.addEventListener("click", function (e) {
  if (e.target.matches("button[data-team]")) {
    var team = e.target.dataset.team;
    var points = parseInt(e.target.dataset.points);

    if (team === "home") {
      homeScore += points;
      homeScoreTxt.textContent = homeScore;
    } else {
      guestScore += points;
      guestScoreTxt.textContent = guestScore;
    }

    updateStyles();
  }
});

function updateStyles() {
  if (homeScore > guestScore) {
    homeScoreTxt.style.color = "var(--highlight)";
    guestScoreTxt.style.color = "var(--main-color)";
  } else if (guestScore > homeScore) {
    guestScoreTxt.style.color = "var(--highlight)";
    homeScoreTxt.style.color = "var(--main-color)";
  } else {
    homeScoreTxt.style.color = "var(--main-color)";
    guestScoreTxt.style.color = "var(--main-color)";
  }
}