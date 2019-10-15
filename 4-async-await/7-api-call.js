// import an async npm package
const fetch = require("node-fetch");

async function fetchUsers(endpoint) {
  // waits for the data is done fetching
  const res = await fetch(endpoint);

  // wait for the data to be converted to json
  let data = await res.json();

  data = data.map(user => user.username);

  console.log(data);
}

fetchUsers("https://jsonplaceholder.typicode.com/users");
