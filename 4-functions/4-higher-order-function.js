// first-class function
const print = () =>
  console.log("2000 milliseconds have passed since this demo started");

// higher-order function
setTimeout(print, 2000);
