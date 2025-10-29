const labelText = document.querySelector(".label-container");

const text = "Thank you for all your hard work throughout the year";
const sender = "Tom";
const names = [
  { name: "Sally" },
  { name: "Mike" },
  { name: "Rob" },
  { name: "Harriet" }
];

let list = (text, sender, names) => {
  return names
    .map(
      (element) => `
      <div class="label-card">
        <p>Dear ${element.name}</p> 
        <p>${text}</p> 
        <p>Best wishes</p> 
        <p>${sender}</p> 
      </div>`
    )
    .join(""); // Une todas las tarjetas en un solo string
};

// 👇 Llama la función y coloca el HTML resultante en el contenedor
labelText.innerHTML = list(text, sender, names);

console.log(list(text, sender, names));
