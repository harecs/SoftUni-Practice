import * as api from './api.js';

const endpoints = {
    allBooks: '/jsonstore/collections/books',
    book: '/jsonstore/collections/books/'
}

export async function getAllBooks() {
    return api.get(endpoints.allBooks);
}

export async function getBook(id) {
    return api.get(endpoints.book + id);
}

export async function createBook(data) {
    return api.post(endpoints.allBooks, data);
}

export async function updateBook(id, data) {
    return api.put(endpoints.book + id, data);
}

export async function deleteBook(id) {
    return api.delete(endpoints.book + id);
}