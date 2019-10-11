const height = 5;
const radius = 3;
let volume;

// creating anonymous function
(() => {
  const pir2 = Math.PI * radius * radius;

  volume = (pir2 * height) / 3;

  // calling anonymous function
})();

console.log(volume);
