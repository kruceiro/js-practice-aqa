import { Book } from './book.js';
import { EBook } from './ebook.js';

const bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', 1937);

const bookTwo = new Book('1984', 'George Orwell', 1949);

const bookThree = new Book('Dune', 'Frank Herbert', 1965);

bookOne.printInfo();
bookTwo.printInfo();
bookThree.printInfo();

const eBookOne = new EBook('The Hobbit', 'J.R.R. Tolkien', 1937, 'PDF');

eBookOne.printInfo();

const books = [
    bookOne,
    bookTwo,
    bookThree,
    eBookOne
];

const oldestBook = Book.getOldestBook(books);
console.log(`-------------OLDEST BOOK ---------------------`);
oldestBook.printInfo();
console.log(`----------------------------------------------`);



// Setter
bookOne.title = 'Alchemist';
bookOne.author = 'John Doe';
bookOne.releaseYear = 2026;

console.log(`${bookOne.title} is updated book with author ${bookOne.author}, released in ${bookOne.releaseYear}`);

// Validation errors
// bookOne.title = '';
// bookOne.author = '';
// bookOne.releaseYear = -100;
// eBookOne.format = '';

const eBookFromBook = EBook.createEBook(bookTwo, 'EPUB');

eBookFromBook.printInfo();