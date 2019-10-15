function scaryClown() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("🤡");
    }, 2000);
  });
}

// first class async function
const msg = async function() {
  const msg = await scaryClown();
  console.log("Message:", msg);
};

// first class async function
const msg2 = async () => {
  const msg2 = await scaryClown();
  console.log("Message:", msg2);
};

msg();
msg2();
