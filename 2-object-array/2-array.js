// vars declaration
let a, b, rest;

// array destructuring
[a, b] = [10, 20];

console.log("a: " + a);
console.log("b: " + b);

// skipping the values in the middle
[a, , b] = [10, 20, 30];

console.log("\na: " + a);
console.log("b: " + b);

// skipping multiple values in the middle
[a, , , b] = [10, 20, 30, 40];

console.log("\na: " + a);
console.log("b: " + b);

// using spread operator to assign the rest of the array values
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log("\na: " + a);
console.log("b: " + b);
console.log("rest: " + rest);
