let currentNumber = "0";
let previousNumber = "";
let operator = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");
const previousDisplay = document.getElementById("previous");



function updateDisplay() {
    display.textContent = currentNumber;
    previousDisplay.textContent = previousNumber;
}


function appendNumber(number) {

    if (currentNumber === "0" || shouldResetDisplay) {
        currentNumber = number;
        shouldResetDisplay = false;
    } else {
        currentNumber += number;
    }

    updateDisplay();
}

function appendDecimal() {

    if (shouldResetDisplay) {
        currentNumber = "0";
        shouldResetDisplay = false;
    }

    if (!currentNumber.includes(".")) {
        currentNumber += ".";
    }

    updateDisplay();
}


function chooseOperator(selectedOperator) {

    if (operator !== null && !shouldResetDisplay) {
        calculate();
    }

    previousNumber = currentNumber;

    operator = selectedOperator;

    shouldResetDisplay = true;

    updateDisplay();
}

function calculate() {

    if (operator === null || shouldResetDisplay) {
        return;
    }

    const firstNumber = parseFloat(previousNumber);
    const secondNumber = parseFloat(currentNumber);

    let result;

    switch (operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":
            if (secondNumber === 0) {
                currentNumber = "Error";
                previousNumber = "";
                operator = null;
                updateDisplay();
                return;
            }

            result = firstNumber / secondNumber;
            break;
    }

    currentNumber = String(
        Math.round(result * 100000000) / 100000000
    );

    previousNumber = "";
    operator = null;
    shouldResetDisplay = true;

    updateDisplay();
}


function clearCalculator() {

    currentNumber = "0";
    previousNumber = "";
    operator = null;
    shouldResetDisplay = false;

    updateDisplay();
}


function toggleSign() {

    if (currentNumber === "0" || currentNumber === "Error") {
        return;
    }

    currentNumber = String(parseFloat(currentNumber) * -1);

    updateDisplay();
}


function percentage() {

    if (currentNumber === "Error") {
        return;
    }

    currentNumber = String(parseFloat(currentNumber) / 100);

    updateDisplay();
}

updateDisplay();