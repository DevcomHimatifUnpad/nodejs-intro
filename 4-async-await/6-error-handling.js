function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1);

    // ternary operator that resolves if val is 1
    // and rejects if val is 0
    val ? resolve("Lucky!!") : reject("Nope 😠");
  });
}

async function msg() {
  try {
    const msg = await yayOrNay();

    // executes if msg resolves
    console.log(msg);
  } catch (err) {
    // goes to catch if msg rejects
    console.log(err);
  }
}

async function msg2() {
  const msg = await yayOrNay();
  console.log(msg);
}

msg();
msg();

// catches rejection if there is any
msg2().catch(x => console.log(x));
msg2().catch(x => console.log(x));
