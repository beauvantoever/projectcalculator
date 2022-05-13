// This function clear all the values
/// The clearScreen() function access the DOM using the id of the result and clear its value by assigning it an empty string.
function clearScreen() {
 document.getElementById("result").value = "";
}

// This function display values
///display() function accesses the DOM using the id of the result and appends the value of the clicked button to the result.
function display(value) {
 document.getElementById("result").value += value;
}
// This function evaluates the expression and return result
///The calculate() function accesses the DOM using the id of the result and evaluates the expression using the eval() function. The evaluated value of the expression is again assigned to the result.
///The eval() function is used in JavaScript to evaluate the expression passed to it as a parameter. It returns the evaluated result of the mathematical expression.
function calculate() {
 var p = document.getElementById("result").value;
 var q = eval(p);
 document.getElementById("result").value = q;
}   