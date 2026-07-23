const bookStoreController = require('./controllers/BookStoreController');
const accountController = require('./controllers/AccountController');

describe('Auth', () => {
    test('Login to the system', async () => {
        const response = await accountController.login(
            'krc',
            'QqWwEe1!'
        );

        expect(response.status).toBe(200);
        expect(response.data.token).not.toBeNull();
        expect(response.data.username).toBe('krc');
    });
});

describe('Books list', () => {
    test('Get books', async () => {
        const response = await bookStoreController.getBooks();

        expect(response.status).toBe(200);
        expect(response.data.books.length).toBeGreaterThan(0);
    });

    test('Get Learning JavaScript Design Patterns book', async () => {
        const isbn = '9781449331818';
        const response = await bookStoreController.getBookByIsbn(isbn);

        expect(response.status).toBe(200);
        expect(response.data.isbn).toBe(isbn);
        expect(response.data.title).toBe('Learning JavaScript Design Patterns');

    });
});

describe('Add books', () =>
    test('Add book', async () => {
        const isbn = '9781449331818';
        const responseAuth = await accountController.login(
            'krc',
            'QqWwEe1!'
        );

        const responseBook = await bookStoreController.addBook(
            responseAuth.data.userId,
            isbn,
            responseAuth.data.token
        );
        expect(responseBook.status).toBe(201);
        expect(responseBook.data.books[0].isbn).toBe(isbn);
    }));

describe('Delete books', () => {
    test('Delete book', async () => {
        const isbn = '9781449331818';
        const responseAuth = await accountController.login(
            'krc',
            'QqWwEe1!'
        );

        const responseBook = await bookStoreController.deleteBook(
            responseAuth.data.userId,
            isbn,
            responseAuth.data.token
        );
        expect(responseBook.status).toBe(204);
    });
});