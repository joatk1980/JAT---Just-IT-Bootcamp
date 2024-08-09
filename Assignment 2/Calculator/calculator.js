//!Create a Simple Calculator: Implement a command-line application that can perform basic arithmetic operations: addition, subtraction, multiplication, and division
//Ask user to input the type of calculation they want to perform
function performCalc() {
  let userInput = prompt(
    "Enter which calculation you want to perform (either: add, subtract, divide, multiply (use lower case please)):"
  );

  // Check if user input is empty
  if (!userInput) {
    alert("You must type in which type of calculation you want to perform.");
    return; //return used to exit function
  }

  //user prompted to enter 2 numbers and they are converted from string to floating point numbers
  let num1 = parseFloat(prompt("Enter your first number"));
  let num2 = parseFloat(prompt("Enter your second number"));

  //checks if num1 or num2 is not a number and alert shown
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  //returns the sum of the two numbers
  function add(a, b) {
    return a + b;
  }
  //if user input add then add function is called with the 2 numbers //result displayed as alert and console log
  if (userInput === "add") {
    let result = add(num1, num2);
    alert(`Your answer is; ${result}`);
    console.log(result);
  } else {
    alert(
      "Invalid calculation type. Please enter 'add', 'subtract', 'divide', or 'multiply'."
    );
    return;
  }

  //returns the difference between the 2 numbers
  function subtract(a, b) {
    return a - b;
  }
  if (userInput === "subtract") {
    let result = subtract(num1, num2);
    alert(`Your answer is; ${result}`);
    console.log(result);
  } else {
    alert(
      "Invalid calculation type. Please enter 'add', 'subtract', 'divide', or 'multiply'."
    );
    return;
  }

  //returns division of the 2 numbers
  function divide(a, b) {
    return a / b;
  }
  if (userInput === "divide") {
    let result = divide(num1, num2);
    alert(`Your answer is; ${result}`);
    console.log(result);
  } else {
    alert(
      "Invalid calculation type. Please enter 'add', 'subtract', 'divide', or 'multiply'."
    );
    return; // Exit function
  }

  // returns multiplication of both numbers
  function multiply(a, b) {
    return a * b;
  }
  if (userInput === "multiply") {
    let result = multiply(num1, num2);
    alert(`Your answer is; ${result}`);
    console.log(result);

    //if user input is not valid then alert is shown and exited
  } else {
    alert(
      "Invalid calculation type. Please enter 'add', 'subtract', 'divide', or 'multiply'."
    );
    return;
  }
}

//'while' loop to reuse the calc as long as the user inputs yes, they can exit and a thank you message is displayed
function restartCalculator() {
  let continueCalc = "Yes";

  while (continueCalc.toLowerCase() === "yes") {
    performCalc();
    continueCalc = prompt(
      "Would you like to make another calculation? yes/no (use lower case)"
    );
  }
  alert("Thank you for using this calculator");
}

restartCalculator();
