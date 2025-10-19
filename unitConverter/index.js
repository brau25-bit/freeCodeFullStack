let inputEl = document.getElementById("input-number");
const meterP = document.getElementById("meter");
const literP = document.getElementById("liters");
const kilogramP = document.getElementById("kilograms");
const btn = document.getElementById("btn");

const feetValue = 3.281
const gallon = 0.264
const pound = 2.204

btn.addEventListener("click", function(){
    inputEl.textContent = ""
    let input = Number(inputEl.value)

    conversionMeter(input)
    conversionLiter(input)
    conversionKilogram(input)
});

function conversionMeter(numConv){
    let meter = numConv / feetValue
    let feet = numConv * feetValue
    meterP.textContent = `${numConv} meters are ${feet.toFixed(2)} feet | ${numConv} feet are ${meter.toFixed(2)} meters`
}

function conversionLiter(numConv){
    let liters = numConv / gallon
    let gallons = numConv * gallon
    literP.textContent = `${numConv} liters are ${gallons.toFixed(2)} gallon | ${numConv} gallon are ${liters.toFixed(2)} liters`
}

function conversionKilogram(numConv){
    let kilo = numConv * pound
    let pounds = numConv / pound
    kilogramP.textContent = `${numConv} kilograms are ${kilo.toFixed(2)} gallon | ${numConv} pounds are ${pounds.toFixed(2)} liters`
}