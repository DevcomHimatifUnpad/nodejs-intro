const constVar = "constVar";
let letVar = "letVar",
  varVar = "varVar";

console.log("constVar: " + constVar);
console.log("letVar: " + letVar);
console.log("varVar: " + varVar);

// this would result in an error
// constVar = "newConstVar"

letVar = "newLetVar";
varVar = "newVarVar";

console.log("\nletVar: " + letVar);
console.log("varVar: " + varVar);

console.log("\nvar di dalam loop");
for (var i = 0; i < 2; ++i) {
  console.log("Nilai i: " + i);
}

console.log("var di luar loop, i: " + i);

console.log("\nlet di dalam loop");
for (let j = 0; j < 2; ++j) {
  console.log("Nilai j: " + j);
}

console.log("let di luar loop, j: " + j);
