function calculate(OnClick) {
  let firstOperand = parseFloat(document.getElementById("firstOperand").value);
  let operator = document.getElementById("operator").value;
  let secondOperand = parseFloat(
    document.getElementById("secondOperand").value
  );
  let result_show = document.getElementById("result");
  let result;

  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    default:
      result = "Invalid";
  }

  console.log(result);

  document.getElementById("result").innerHTML = `Your Result: ${result}`;
}

document.getElementById("btn").addEventListener("click", calculate);
