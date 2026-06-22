import { Book } from "./book.js";

class EBook extends Book {
    constructor(title, author, releaseYear, format) {
        super(title, author, releaseYear)
        this.format = format;
    }

    get format() {
        return this._format;
    }
    set format(value) {
        if (value.trim() === '') {
            throw new Error('Format cannot be empty');
        }

        this._format = value;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Release year: ${this.releaseYear}, Format: ${this.format}`);
    }

    static createEBook(book, format) {
        return new EBook(
            book.title,
            book.author,
            book.releaseYear,
            format
        );
    }
}
export { EBook };