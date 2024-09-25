// Define an interface for a Book
interface Book {
    title: string;
    author: string;
    yearPublished: number;
}

// Create a function to display book details
function displayBook(book: Book): void {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Year Published: ${book.yearPublished}`);
}

// Create a couple of book objects
const book1: Book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    yearPublished: 1960
};

const book2: Book = {
    title: '1984',
    author: 'George Orwell',
    yearPublished: 1949
};

// Call the display function for each book
displayBook(book1);
displayBook(book2);
