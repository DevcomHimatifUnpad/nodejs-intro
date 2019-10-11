const height = 5;
const radius = 3;
let volume;

(() => {
  const pir2 = Math.PI * radius * radius;

  volume = (pir2 * height) / 3;
})();

console.log(volume);
