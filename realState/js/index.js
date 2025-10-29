import { placeHolderPropertyObj } from "../js/placeHolderProperty.js"
import { properties } from "../js/propertyForSale.js"

const container = document.querySelector(".container")
let search

function renderList(list){
    let cont = 0;
    container.innerHTML = list.map(n => {
            return `<section class="card">
                <img src="./img/descarga${cont++}.jpeg" alt="">
                <div class="card-right">
                    <h2>${n.propertyLocation}</h2>
                    <h3>${n.priceGBP}</h3>
                    <p>${n.roomsM2.reduce((total, num) => {return total + num})} m2s</p>
                    <h3>${n.comment}</h3>
                </div>
            </section>`
        }).join("")
}

function findPropertyByLocation(location) {
  return properties.find(p => p.propertyLocation === location);
}

search = findPropertyByLocation('5 Riverbank Close')

console.log(search)

renderList(properties)


