const animalesPelea = [
  "🦁",
  "🐯",
  "🐺",
  "🐻",
  "🦅",
  "🐍",
  "🐊",
  "🐃",
  "🐂",
  "🦏",
  "🐘",
  "🦈",
  "🐅",
  "🦍",
  "🦊",
  "🐆",
  "🦇",
  "🐉"
];

const fighter1 = document.getElementById("fighter1");
const fighter2 = document.getElementById("fighter2");
const btnPick = document.getElementById("btn");

btnPick.addEventListener("click", function(){
    let num1 = randomEmoji();
    let num2 = randomEmoji();

    console.log(`${num1} ${num2}`)

    fighter1.textContent = num1;
    fighter2.textContent = num2;
})

function randomEmoji(){
    let random = Math.floor(Math.random() * animalesPelea.length);
    return animalesPelea[random];
}