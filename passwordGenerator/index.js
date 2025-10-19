const letras = [
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
];

const arrayNums = [
    ..."0123456789",
];

const arraySymbols = [
    ..."!@#$%^&*()_+[]{}|;:,.<>?/~-=" 
]

let caracteres = [];

const btnPass = document.getElementById("btnPassword");
const p1 = document.getElementById("num1");
const p2 = document.getElementById("num2");
const passwordLength = document.getElementById("passwordLength");
const num = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

btnPass.addEventListener("click", function() {
    let size = parseInt(passwordLength.value)

    caracteres = [];
    caracteres = caracteres.concat(...letras);

    if(size === 0 || isNaN(size)){size = 15}

    p1.textContent = randomPassword(size);
    p2.textContent = randomPassword(size);
})

function randomPassword(value){

    if(num.checked){
        caracteres = caracteres.concat(...arrayNums)
    } 
    if(symbols.checked){
        caracteres = caracteres.concat(...arraySymbols)
    }

    let password = "";

    for(let i = 0; i<value; i++){
        let random = Math.floor(Math.random() * caracteres.length);
        password += caracteres[random]
    }

    return password;
}

p1.addEventListener("click", function() {
    const text = p1.textContent;
    
    navigator.clipboard.writeText(text)
        .then(() => {
            const msg = document.createElement("span");
            msg.textContent = "✔ Copiado";
            msg.style.marginLeft = "10px";
            msg.style.color = "green";
            p1.appendChild(msg);

            setTimeout(() => msg.remove(), 1000); // desaparece después de 1s
        });
});

p2.addEventListener("click", function() {
    const text = p2.textContent;
    
    navigator.clipboard.writeText(text)
        .then(() => {
            const msg = document.createElement("span");
            msg.textContent = "✔ Copiado";
            msg.style.marginLeft = "10px";
            msg.style.color = "green";
            p2.appendChild(msg);

            setTimeout(() => msg.remove(), 1000); // desaparece después de 1s
        });
});