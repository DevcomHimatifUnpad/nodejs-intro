// importing the module.exports object as a var named 'books'
const books = require("./1-export");

// calling functions in 'books' object
const favoriteBook = books.favoriteBook();
const bookRecommendations = books.getBookRecommendations();

// logging the values returned by the functions
console.log(
  "My favorite author is " +
    books.favoriteAuthor.name +
    " and my favorite genre is " +
    books.favoriteAuthor.genre
);
console.log(
  "My favorite book is " + favoriteBook.title + " by " + favoriteBook.author
);
console.log(
  "I recommend " +
    bookRecommendations[1].title +
    " by " +
    bookRecommendations[1].author
);
