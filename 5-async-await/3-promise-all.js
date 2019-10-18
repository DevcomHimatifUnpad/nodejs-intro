function who() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("🤡");
    }, 200);
  });
}

function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("lurks");
    }, 300);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("in the shadows");
    }, 500);
  });
}

async function msg() {
  // the Promises will be resolved in parallel and returned together
  // as an array once all of the Promises are resolved
  const [a, b, c] = await Promise.all([who(), what(), where()]);

  console.log(`${a} ${b} ${c}`);
}

msg();
