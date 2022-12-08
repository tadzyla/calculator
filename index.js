const mainButtons = document.querySelectorAll(".main_button")
let totalButton = document.getElementById("total")
let outputResult = document.querySelector(".output")
let clearButton = document.getElementById("clear")
let toggleButton = document.querySelector(".toggle")
let buttons = document.querySelectorAll("button")
let title = document.getElementsByTagName("h1")

mainButtons.forEach(button => {
  button.addEventListener("click", updateOutput)
})

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
      output.target.value === "/") && 
      (lastInput === "+" ||
      lastInput === "-" ||
      lastInput === "*" ||
      lastInput === "/")
    ) {
      return; 
    } else {
        outputResult.textContent += output.target.value
    }
}

toggleButton.addEventListener("click", toggleMode )

function toggleMode() {
  document.body.classList.toggle("dark_mode")
  title[0].classList.toggle("dark_text")
  outputResult.classList.toggle("output_dark")

  buttons.forEach(button => {
    button.classList.toggle("dark_mode")
  })

  toggleButton.children[0].src.includes("/icons/moon.png") ? 
    toggleButton.children[0].src = "/icons/sun.png" : 
    toggleButton.children[0].src = "/icons/moon.png" 
}
 