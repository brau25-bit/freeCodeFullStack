const homeScoreTxt = document.getElementById("home-score-value");
const guestScoreTxt = document.getElementById("guest-score-value");
let homeScore = 0;
let guestScore = 0;

document.addEventListener("click", (e) => {
  if (e.target.matches("button[data-team]")) {
    const team = e.target.dataset.team;
    const points = parseInt(e.target.dataset.points);

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
