// 1. Color-Changing Button
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
  // Generate a random color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colorButton.style.backgroundColor = randomColor;
  colorButton.style.color = "#fff"; // Ensure text is visible against the background
});

// 2. Greeting Based on Time
const greetButton = document.getElementById("greetButton");
greetButton.addEventListener("click", () => {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting);
});

// 3. Calculator with Add, Subtract, Multiply, and Divide Operations
const calcResult = document.getElementById("calcResult");

// Helper function to perform calculations
function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    calcResult.textContent = "Please enter valid numbers!";
    calcResult.style.color = "red";
    return;
  }

  let result;
  switch (operation) {
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
      if (num2 === 0) {
        calcResult.textContent = "Division by zero is not allowed!";
        calcResult.style.color = "red";
        return;
      }
      result = num1 / num2;
      break;
  }

  calcResult.textContent = `Result: ${result}`;
  calcResult.style.color = "#4caf50"; // Green for success
}

// Event listeners for each calculator button
document
  .getElementById("addButton")
  .addEventListener("click", () => calculate("add"));
document
  .getElementById("subButton")
  .addEventListener("click", () => calculate("subtract"));
document
  .getElementById("mulButton")
  .addEventListener("click", () => calculate("multiply"));
document
  .getElementById("divButton")
  .addEventListener("click", () => calculate("divide"));
