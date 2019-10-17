// object definition
const favoriteAuthor = {
  name: "Ken Bruen",
  genre: "Noir"
};

// function that returns an object
function favoriteBook() {
  return { title: "The Guards", author: "Ken Bruen" };
}

// function that returns an array
function getBookRecommendations() {
  return [
    { id: 1, title: "The Guards", author: "Ken Bruen" },
    { id: 2, title: "The Stand", author: "Steven King" },
    { id: 3, title: "The Postman Always Rings Twice", author: "James M. Cain" }
  ];
}

// exporting individual vars with their given attribute name to module.exports object
module.exports.favoriteAuthor = favoriteAuthor;
module.exports.favoriteBook = favoriteBook;
module.exports.getBookRecommendations = getBookRecommendations;

// logging the module object
// console.log(module);
