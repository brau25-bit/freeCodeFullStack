const bill = document.getElementById("bill-input")
const tip = document.getElementById("tip-input")
const btnCalculate = document.getElementById("btn-calculate")
const totalAmount = document.getElementById("total")

btnCalculate.addEventListener("click", function(){
    let total = (Number(bill.value) * Number(tip.value)) / 100
    total += Number(bill.value)
    totalAmount.textContent = `Total: ${total}`
})