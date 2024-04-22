let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function ClrToDisplay() {
  displayValue = displayValue.slice(0, -1,);
  document.getElementById('display').value = displayValue;
}

function calculateDisplay() {
  try {
    displayValue = eval(displayValue.replace('÷', '/').replace('x', '*').replace('√', 'Math.sqrt'))
    document.getElementById('display').value = displayValue;
  
  } catch (Error) {
    display.Value = "Invalid Expression";
  }
}