const celsius = document.getElementById("celsius")
const fahrenheit = document.getElementById("fahrenheit")
const kelvin = document.getElementById("kelvin")

celsius.addEventListener("input", function(){
    fahrenheit.value = (celsius.value * (9/5) + 32)
    kelvin.value = Number(celsius.value) + 273.15
})

fahrenheit.addEventListener("input", function(){
    celsius.value = (fahrenheit.value - 32) * 5/9
    kelvin.value = ((fahrenheit.value - 32) * 5/9) + 273.15
})

kelvin.addEventListener("input", function(){
    fahrenheit.value = (kelvin.value - 273.15) * 5/9 + 32
    celsius.value = kelvin.value
})