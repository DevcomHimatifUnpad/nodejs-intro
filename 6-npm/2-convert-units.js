var convert = require("convert-units");

const lToMl = convert(1)
  .from("l")
  .to("ml");

const lbToKg = convert(1)
  .from("lb")
  .to("kg");

const lPossibilities = convert()
  .from("l")
  .possibilities();

const kgPossibilities = convert()
  .from("kg")
  .possibilities();

console.log("1l = " + lToMl + "ml");
console.log("1lb = " + lbToKg + "kg");
console.log("litre conversion possibilities = " + lPossibilities);
console.log("kilogram conversion possibilities = " + kgPossibilities);
