// importing the functions in module.exports object through object destructuring
const { PI, addition, subtraction, multiplication } = require("./3-export");

// calling the functions that were imported
console.log("3 + 4 = " + addition(3, 4));
console.log("3 - 4 = " + subtraction(3, 4));
console.log("3 * 4 = " + multiplication(3, 4));
console.log("Area of a circle with the radius of 2 is " + PI * 2 * 2);
