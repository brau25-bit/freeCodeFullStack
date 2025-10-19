let firstCard
let secondCard
let cards 
let sum
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let credits = document.getElementById("player")


let player = {
    userName: "Braulio",
    playerChips: 145,
}

function startGame() {
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    isAlive = true
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    credits.textContent = `${player.userName}: $${player.playerChips}`

    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "

    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card
        cards.push(card)
        renderGame()
    } else if(hasBlackJack || !isAlive){
        alert("You can't draw anymore cards")
    }
}

function getRandomCard(){
    let num = Math.floor(Math.random() * 13) + 1;

    if(num === 1){
        return 11;
    }else if(num >= 11){
        return 10;
    } else{
        return num;
    }
}