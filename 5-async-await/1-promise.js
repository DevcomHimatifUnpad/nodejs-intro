function scaryClown() {
  // returns a Promise
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("🤡");
    }, 2000);
  });
}

async function msg() {
  // waits till the Promise is done resolving
  const msg = await scaryClown();
  console.log("Message:", msg);
}

msg();
