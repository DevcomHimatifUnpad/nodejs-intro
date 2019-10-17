// constant value definition
const PI = 3.14159;

// first-class function for adding two numbers
const addition = (num1, num2) => {
  return num1 + num2;
};

// first-class function for subtracting two numbers
const subtraction = (num1, num2) => {
  return num1 - num2;
};

// first-class function for multiplying two numbers
const multiplication = (num1, num2) => {
  return num1 * num2;
};

// exporting the vars to module.exports object using object structuring
module.exports = { PI, addition, subtraction, multiplication };

// logging the module object
// console.log(module);
