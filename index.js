
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
let totalButton = document.getElementById("total")
let clearButton = document.getElementById("clear")

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

totalButton.addEventListener("click", () => {
    const lastInput = outputResult.textContent[outputResult.textContent.length - 1];
    if (  
      lastInput === "+" ||
      lastInput === "-" ||
      lastInput === "*" ||
      lastInput === "/"
    ) {
      return; 
    }
    outputResult.textContent = eval(outputResult.textContent)
})
clearButton.addEventListener("click", () => {
    outputResult.textContent = ''
})


function updateOutput(output) {

    const lastInput =
      outputResult.textContent[outputResult.textContent.length - 1];
    if (
        (output.target.value === "+" ||
        output.target.value === "-" ||
        output.target.value === "*" ||
        output.target.value === "/" ) &&(  
      lastInput === "+" ||
      lastInput === "-" ||
      lastInput === "*" ||
      lastInput === "/")
    ) {
      return; 
    } else {
        outputResult.textContent += output.target.value
        console.log(outputResult.textContent)
    }
}