JavaScript Calculator

This is a simple JavaScript calculator that allows you to perform basic arithmetic operations (+, -, *, /). It provides a user interface where you can input numbers and operators, and it will display the result of the calculation.

Preview

You can see a preview of the pricing section in the "calculator.png" file included in this repository.

Getting Started

To use the calculator, follow these steps:

1. Clone the repository or download the HTML, CSS, and JavaScript files.
2. Open the index.html file in a web browser.

Usage

Once the calculator is loaded in your web browser, you can perform the following actions:

Click on the number buttons (0-9) to input numbers.

Click on the operator buttons (+, -, *, /) to input arithmetic operators.

Click on the decimal point (.) to input decimal numbers.

Click on the CE button to clear the last input or result.

Click on the equals (=) button to calculate and display the result.

Styling

The calculator is styled using CSS. The styles are defined in the styles.css file. You can modify the styles to customize the appearance of the calculator according to your preferences.

JavaScript Functions

The calculator functionality is implemented using JavaScript. The JavaScript functions are defined in the main.js file. Here's a brief explanation of each function:

1. insert(num): This function is called when a number or operator button is clicked. It appends the clicked value to the current value in the calculator's display.

2. calculate(): This function is called when the equals (=) button is clicked. It evaluates the current expression in the calculator's display using the eval() function and displays the result.

3. backspace(): This function is called when the CE button is clicked. It removes the last character from the current value in the calculator's display.
