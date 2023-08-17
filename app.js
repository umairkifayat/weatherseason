// question no 3 start
const monthDropdown = document.getElementById("monthDropdown");
const seasonOutput = document.getElementById("seasonOutput");

monthDropdown.addEventListener("change", function () {
  const selectedMonth = monthDropdown.value;
  let season = "";

  switch (selectedMonth) {
    case "December":
    case "January":
    case "February":
      season = "Winter";
      break;
    case "March":
    case "April":
    case "May":
      season = "Spring";
      break;
    case "June":
    case "July":
    case "August":
      season = "Summer";
      break;
    case "September":
    case "October":
    case "November":
      season = "Fall";
      break;
  }

  seasonOutput.textContent = season;
});
// question no 3 end
function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;
    var resultElement = document.getElementById("result");
    var result;

    switch (operator) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero!";
            }
            break;
        default:
            result = "Invalid operator";
    }

    resultElement.textContent = "Result: " + result;
}