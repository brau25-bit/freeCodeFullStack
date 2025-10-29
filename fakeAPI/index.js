import { getStockData } from "./fakeApi.js";

const p1 = document.getElementById("uno")
const p2 = document.getElementById("dos")
const p3 = document.getElementById("tres")
const p4 = document.getElementById("cuatro")
const p5 = document.getElementById("cinco")

let oldPrice = null

function repetir(){
    
    let data = getStockData();
    render(data)
    
    setTimeout(repetir, 1500)
}

function render(data){
    let num = data.price

    p1.textContent = `Name: ${data.name}`
    p2.textContent = `Sym: ${data.sym}`
    p3.textContent = `Price : ${data.price}`
    p4.textContent = `Time: ${data.time}`

    if(oldPrice !== null){
        if(num > oldPrice){
            p3.textContent += ` 🟢`
        } else if(num < oldPrice){
            p3.textContent += ` 🔴`
        } else {
            p3.textContent += ` ⚪`
        }
    }

    oldPrice = num
}

setTimeout(repetir, 1500)