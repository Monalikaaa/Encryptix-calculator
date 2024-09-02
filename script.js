// Get the display element
const display = document.querySelector('.display');

// Get all the button elements
const buttons = document.querySelectorAll('button');

// Initialize the display value
let displayValue = '0';

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;

    // Handle number buttons
    if (button.classList.contains('number')) {
      if (displayValue === '0') {
        displayValue = buttonText;
      } else {
        displayValue += buttonText;
      }
    }
    // Handle operator buttons
    else if (button.classList.contains('operator')) {
      displayValue += buttonText;
    }
    // Handle clear button
    else if (button.classList.contains('clear')) {
      displayValue = '0';
    }
    // Handle equal button
    else if (button.classList.contains('equal')) {
      try {
        const result = eval(displayValue);
        displayValue = result.toString();
      } catch (e) {
        displayValue = 'Error';
      }
    }

    display.textContent = displayValue;
  });
});