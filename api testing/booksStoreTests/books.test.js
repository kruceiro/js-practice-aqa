const axios = require('axios');
describe('Auth', () => {
    test('Login to the system', async () => {
        const response = await axios.post('https://demoqa.com/Account/v1/login',
            {
                "userName": 'krc',
                "password": 'QqWwEe1!'
            });
        console.log(response.data);
        expect(response.status).toBe(200);
        expect(response.data.token).not.toBeNull();
        expect(response.data.username).toBe('krc');

    });
});
describe('Books list', () => {
    test('Get books', async () => {
        const response = await axios.get('https://demoqa.com/BookStore/v1/Books');
        expect(response.status).toBe(200);
        expect(response.data.books).toHaveLength(8);
    });

    test('Get Learning JavaScript Design Patterns book', async () => {
        const response = await axios.get('https://demoqa.com/BookStore/v1/Book?ISBN=9781449331818');
        expect(response.status).toBe(200);
        expect(response.data.isbn).toBe('9781449331818');
        expect(response.data.title).toBe('Learning JavaScript Design Patterns');

    });
});

describe('Add books', () =>
    test('Add book', async () => {
        const responseAuth = await axios.post('https://demoqa.com/Account/v1/login',
            {
                'userName': 'krc',
                'password': 'QqWwEe1!'
            });

        const responseBook = await axios.post('https://demoqa.com/BookStore/v1/Books',
            {
                'userId': responseAuth.data.userId,
                'collectionOfIsbns': [{
                    'isbn': '9781449331818'
                }
                ]
            }, {
            headers: {
                'Authorization': `Bearer ${responseAuth.data.token}`
            }
        }
        );
        console.log(responseBook.data);
        expect(responseBook.status).toBe(201);
        expect(responseBook.data.books[0].isbn).toBe('9781449331818');
    }));

describe('Delete books', () => {
    test('Delete book', async () => {
        const responseAuth = await axios.post('https://demoqa.com/Account/v1/login',
            {
                userName: 'krc',
                password: 'QqWwEe1!'
            }
        );

        const responseBook = await axios.delete('https://demoqa.com/BookStore/v1/Book',
            {
                headers: {
                    Authorization: `Bearer ${responseAuth.data.token}`
                },
                data: {
                    userId: responseAuth.data.userId,
                    isbn: '9781449331818'
                }
            }
        );
        expect(responseBook.status).toBe(204);
    });
});