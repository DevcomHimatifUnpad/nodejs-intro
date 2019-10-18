const arr = [3, 5, 7];
arr.foo = "hello";

console.log(arr);

console.log("\nfor...in");
for (let i in arr) {
  console.log(i);
}

console.log("\nfor...of");
for (let i of arr) {
  console.log(i);
}
