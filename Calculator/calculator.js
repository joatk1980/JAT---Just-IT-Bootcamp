//!Create a Simple Calculator: Implement a command-line application that can perform basic arithmetic operations: addition, subtraction, multiplication, and division

//To be run in LiveServer

//Ask user to input the type of calculation they want to perform
function performCalc() {
  let userInput;
  const validInputs = ["add", "subtract", "divide", "multiply"];

  // Loop until a valid input is provided
  while (!validInputs.includes(userInput)) {
    userInput = prompt(
      "Enter which calculation you want to perform (either: add, subtract, divide, multiply (use lower case please)):"
    );

    if (!userInput) {
      alert("You must type in which type of calculation you want to perform.");
      return; // Exit function
    }

    if (!validInputs.includes(userInput)) {
      alert(
        "Invalid input. Please enter 'add', 'subtract', 'divide', or 'multiply'." // alerts if invalid input
      );
    }
  }

  let num1 = parseFloat(prompt("Enter your first number")); //parseFloat changes string to floating point number
  let num2 = parseFloat(prompt("Enter your second number"));

  if (isNaN(num1) || isNaN(num2)) {
    //checks if valid number
    alert("Please enter valid numbers.");
    return;
  }

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function divide(a, b) {
    return a / b;
  }

  function multiply(a, b) {
    return a * b;
  }

  let result; //simplify calculations by using switch statement to handle calculations more efficiently
  switch (userInput) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
  }

  alert(`Your answer is: ${result}`);
  console.log(result);
}

function restartCalculator() {
  //restart calculator if user wants to do another calculation
  let continueCalc = "yes";

  while (continueCalc.toLowerCase() === "yes") {
    performCalc();
    continueCalc = prompt(
      "Would you like to make another calculation? yes/no (use lower case)"
    );
  }
  alert("Thank you for using this calculator");
}

restartCalculator();
