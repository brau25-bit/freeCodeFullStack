"use strict";

var firstCard;
var secondCard;
var cards;
var sum;
var hasBlackJack = false;
var isAlive = false;
var message = "";
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("cards-el");
var credits = document.getElementById("player");
var player = {
  userName: "Braulio",
  playerChips: 145
};

function startGame() {
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  isAlive = true;
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  credits.textContent = "".concat(player.userName, ": $").concat(player.playerChips);
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (var i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    var card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  } else if (hasBlackJack || !isAlive) {
    alert("You can't draw anymore cards");
  }
}

function getRandomCard() {
  var num = Math.floor(Math.random() * 13) + 1;

  if (num === 1) {
    return 11;
  } else if (num >= 11) {
    return 10;
  } else {
    return num;
  }
}