// Create a function to display book details
function displayBook(book) {
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Year Published: ".concat(book.yearPublished));
}
// Create a couple of book objects
var book1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    yearPublished: 1960
};
var book2 = {
    title: '1984',
    author: 'George Orwell',
    yearPublished: 1949
};
// Call the display function for each book
displayBook(book1);
displayBook(book2);
//# sourceMappingURL=main.js.map