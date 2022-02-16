var buttons = document.getElementsByClassName("button");
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    var display = document.getElementById("currentDisplay");
    var resultDisplay = document.getElementById("resultDisplay");
    if (event.target.innerText == "AC") {
      display.innerText = "";
      resultDisplay.innerText = "";
    } else if (event.target.innerText == "DEL") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (event.target.innerText == "=") {
      resultDisplay.innerText = eval(display.innerText);
      display.innerText = "";
    } else if (event.target.innerText == "Ans") {
      display.innerText = resultDisplay.innerText;
      resultDisplay.innerText = "";
    } else {
      display.innerText = display.innerText + event.target.innerText;
    }
  });
}
