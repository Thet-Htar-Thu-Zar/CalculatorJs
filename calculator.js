const input = document.getElementById("input");

let firstNum = "",
  secondNum = "",
  operator = "";

const EnterNumber = (num) => {
  if (operator) {
    secondNum = secondNum + num;
    Input.value += num;
  } else {
    firstNum = firstNum + num;
    Input.value += num;
  }
};

const EnterOperator = (operatorInput) => {
  if (firstNum) {
    operator = operatorInput;
    Input.value += operatorInput;
  } else {
    alert("Please enter first Num");
  }
};

const Calculate = () => {
  let num1 = Number(firstNum),
    num2 = Number(secondNum);
  Input.value += "=";
  if (operator === "+") {
    Input.value += num1 + num2;
  } else if (operator === "-") {
    Input.value += num1 - num2;
  } else if (operator === "*") {
    Input.value += num1 * num2;
  } else {
    Input.value += num1 / num2;
  }
};

const Clear = () => {
  firstNum = "";
  secondNum = "";
  operator = "";
  Input.value = "";
};
