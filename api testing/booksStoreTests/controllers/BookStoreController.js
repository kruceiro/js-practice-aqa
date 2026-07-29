const axios = require('axios');


class BookStoreController {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://demoqa.com',
            validateStatus: () => true
        });
    }
    async getBooks() {
        return this.axiosInstance.get('/BookStore/v1/Books');
    }
    async getBookByIsbn(isbn) {
        return this.axiosInstance.get('/BookStore/v1/Book', {
            params: {
                ISBN: isbn
            }
        });
    }
    async addBook(userId, isbn, token) {
        return this.axiosInstance.post('BookStore/v1/Books',
            {
                userId,
                collectionOfIsbns: [
                    {
                        isbn
                    }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    }
    async deleteBook(userId, isbn, token) {
        return this.axiosInstance.delete('BookStore/v1/Book',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    userId,
                    isbn
                }
            }
        );
    }
}

module.exports = new BookStoreController();