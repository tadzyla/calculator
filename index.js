
let userNumber = document.getElementById("input")
let outputResult = document.getElementById("output")
let oneButton = document.getElementById("one").textContent
let twoButton = document.getElementById("two").textContent
let threeButton = document.getElementById("three").textContent
let fourButton = document.getElementById("four").textContent
let fiveButton = document.getElementById("five").textContent
let sixButton = document.getElementById("six").textContent
let sevenButton = document.getElementById("seven").textContent
let eightButton = document.getElementById("eight").textContent
let nineButton = document.getElementById("nine").textContent
let zeroButton = document.getElementById("zero").textContent

let sumButton = document.getElementById("sum")
let substractButton = document.getElementById("substract")
let multiplyButton = document.getElementById("multiply")
let dividebutton = document.getElementById("divide")

console.log(sumButton.textContent)

sumButton.addEventListener("click", add)
substractButton.addEventListener("click", substract)
multiplyButton.addEventListener("click", multiply)
dividebutton.addEventListener("click", divide)

function operate(currentNumber, newNumber, operator) {
    if (operator === sumButton.textContent) {
        console.log("sudeda")
        add(currentNumber, newNumber)
    } else if (operator === "-") {
        substract(currentNumber, newNumber)
    } else if (operator === "*") {
        multiply(currentNumber, newNumber)
    } else if (operator === "/"){
        divide(currentNumber, newNumber)
    } 
    return currentNumber
}

function add(a, b) {
    outputResult.textContent = `${a} + ${b}`
    return a + b   
}

function substract(a, b) {
    outputResult.textContent = `${a} - ${b}`
   return a - b
}

function multiply(a, b) {
    outputResult.textContent = `${a} * ${b}`
    return a * b
}

function divide(a, b) {
    outputResult.textContent = `${a} / ${b}`
    return a / b
}

add(Number(oneButton), Number(twoButton))


