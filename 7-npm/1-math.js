const {
  atan2,
  chain,
  derivative,
  e,
  evaluate,
  log,
  pi,
  pow,
  round,
  sqrt
} = require("mathjs");

// functions and constants
console.log("1.");
console.log(round(e, 3)); // 2.718

console.log("2.");
console.log(atan2(3, -3) / pi); // 0.75

console.log("3.");
console.log(log(10000, 10)); // 4

console.log("4.");
console.log(sqrt(-4)); // 2i
console.log(pow([[-1, 2], [3, 1]], 2)); // [[7, 0], [0, 7]]

console.log("5.");
console.log(derivative("x^2 + x", "x")); // 2 * x + 1

// expressions
console.log("6.");
console.log(evaluate("12 / (2.3 + 0.7)")); // 4

console.log("7.");
console.log(evaluate("12.7 cm to inch")); // 5 inch

console.log("8.");
console.log(evaluate("sin(45 deg) ^ 2")); // 0.5

console.log("9.");
console.log(evaluate("9 / 3 + 2i")); // 3 + 2i

// chaining
console.log("10.");
console.log(
  chain(3)
    .add(4)
    .multiply(2)
    .done()
); // 14
