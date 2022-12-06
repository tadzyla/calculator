
let userNumber = document.getElementById("input")
let outputResult = document.getElementById("output")
let oneButton = document.getElementById("one")
let twoButton = document.getElementById("two")
let threeButton = document.getElementById("three")
let fourButton = document.getElementById("four")
let fiveButton = document.getElementById("five")
let sixButton = document.getElementById("six")
let sevenButton = document.getElementById("seven")
let eightButton = document.getElementById("eight")
let nineButton = document.getElementById("nine")
let zeroButton = document.getElementById("zero")


let sumButton = document.getElementById("sum")
let substractButton = document.getElementById("substract")
let multiplyButton = document.getElementById("multiply")
let dividebutton = document.getElementById("divide")

sumButton.addEventListener("click", updateOutput)
substractButton.addEventListener("click", updateOutput)
multiplyButton.addEventListener("click", updateOutput)
dividebutton.addEventListener("click", updateOutput)
oneButton.addEventListener("click", updateOutput )
twoButton.addEventListener("click", updateOutput )
threeButton.addEventListener("click", updateOutput )
fourButton.addEventListener("click", updateOutput )
fiveButton.addEventListener("click", updateOutput )
sixButton.addEventListener("click", updateOutput )
sevenButton.addEventListener("click", updateOutput )
eightButton.addEventListener("click", updateOutput )
nineButton.addEventListener("click", updateOutput )
zeroButton.addEventListener("click", updateOutput )


function updateOutput(output) {
    console.log(output.target.value)
    outputResult.textContent += output.target.value
}



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


