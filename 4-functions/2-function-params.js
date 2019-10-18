function hello(name) {
  console.log("hello " + name);
}

// not adding any value to a function that expects a param will result in undefined for that params
hello();

// adding more values than what the function params expect will result in those values being ignored
hello("CSS", "HTML", "AAA", 4);
