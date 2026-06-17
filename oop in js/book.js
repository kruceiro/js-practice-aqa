class Book {
  constructor(title, author, releaseYear) {
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value.trim() === '') {
      throw new Error('Title cannot be empty');
    }

    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (value.trim() === '') {
      throw new Error('Author cannot be empty');
    }

    this._author = value;
  }

  get releaseYear() {
    return this._releaseYear;
  }

  set releaseYear(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Release year must be a positive number');
    }

    this._releaseYear = value;
  }

  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Release year: ${this.releaseYear}`
    );
  }

  static getOldestBook(books) {
    let oldestBook = books[0];

    for (const book of books) {
      if (book.releaseYear < oldestBook.releaseYear) {
        oldestBook = book;
      }
    }

    return oldestBook;
  }
}

export { Book };