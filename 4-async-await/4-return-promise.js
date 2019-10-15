// async functions always returns a Promise
async function hello() {
  return "Hello Alligator!";
}

// variable 'b' will be a Promise object
const b = hello();

// outputs the Promise object
console.log(b);

// outputs "Hello Alligator!"
b.then(x => console.log(x));
