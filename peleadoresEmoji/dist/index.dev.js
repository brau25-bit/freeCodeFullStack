"use strict";

var animalesPelea = ["🦁", "🐯", "🐺", "🐻", "🦅", "🐍", "🐊", "🐃", "🐂", "🦏", "🐘", "🦈", "🐅", "🦍", "🦊", "🐆", "🦇", "🐉"];
var fighter1 = document.getElementById("fighter1");
var fighter2 = document.getElementById("fighter2");
var btnPick = document.getElementById("btn");
btnPick.addEventListener("click", function () {
  var num1 = randomEmoji();
  var num2 = randomEmoji();
  console.log("".concat(num1, " ").concat(num2));
  fighter1.textContent = num1;
  fighter2.textContent = num2;
});

function randomEmoji() {
  var random = Math.floor(Math.random() * animalesPelea.length);
  return animalesPelea[random];
}