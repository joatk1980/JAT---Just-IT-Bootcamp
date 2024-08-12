//! - Develop a Cash Machine Simulator: Build a terminal-based application that simulates basic functionalities of an ATM (Automatic Teller Machine), including checking account balance, depositing cash, and withdrawing cash.

//to be run in LiveServer

(function () {
  let balance = 2000; // Hardcode bank balance

  // Alert to advise the current balance
  function checkBalance() {
    alert(`Your current balance is £${balance}`);
  }

  // Asks user how much they want to deposit - parseFloat changes string to floating point number
  function deposit() {
    let amount = parseFloat(
      prompt("Please enter the amount you would like to deposit:")
    );
    // Checks if valid number - if not shows an alert
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }
    balance += amount; // Adds the deposit amount to the balance and shows in an alert
    alert(
      `You have successfully deposited £${amount}. Your new balance is £${balance}.`
    );
  }

  // Similar to above but asks user for amount to withdraw
  function withdraw() {
    let amount = parseFloat(prompt("Enter amount to withdraw:"));
    if (isNaN(amount) || amount <= 0) {
      alert("Invalid withdrawal amount.");
      return;
    }
    // Checks if withdrawal amount exceeds balance and sends alert
    if (amount > balance) {
      alert("Insufficient funds. Withdrawal cannot exceed account balance.");
      return;
    }
    balance -= amount; // Deducts the amount from the balance and shows alert
    alert(
      `You have successfully withdrawn £${amount}. Your new balance is £${balance}.`
    );
  }

  // Function takes the user's input and puts it into lower case and calls the corresponding function
  function usersChoice(choice) {
    choice = choice.toLowerCase(); // Convert choice to lowercase

    switch (
      choice //using switch statement instead of if else to tidy up code and make more readable
    ) {
      case "balance":
        checkBalance();
        break;
      case "deposit":
        deposit();
        break;
      case "withdraw":
        withdraw();
        break;
      case "exit":
        alert("Thank you for using my cash machine");
        return false; // Exits the loop and shows alert
      default:
        alert(
          "Invalid entry. Please enter 'balance', 'withdraw', 'deposit', or 'exit'."
        );
    }

    return true; // Continues the loop
  }

  // Runs an infinite loop whilst the user does not choose exit
  function restartCashMachine() {
    while (true) {
      let userInput = prompt(
        "What operation would you like to perform or would you like to exit? (Please enter balance, deposit, withdraw, exit):"
      );
      if (!usersChoice(userInput)) {
        break; // Exit the loop if usersChoice returns false
      }
    }
  }

  restartCashMachine();
})();
