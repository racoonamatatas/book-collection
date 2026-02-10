import axios from 'axios';
import { ref, computed } from 'vue';
import type { Book, BookData } from './types/types';

// state
const books = ref<Book[]>([]);

// getters
export const getAllBooks = computed(() => books.value);

export const getBookById = (id: number) => computed(
    () => books.value.find(book => book.id == id));

// actions
export const fetchBooks = async () => {
    const { data } = await axios.get('/api/books');
    if (!data) return
    books.value = data;
};

export const createBook = async (newBook: BookData) => {
    const { data } = await axios.post('/api/books', newBook);
    if (!data) return
    books.value = data;
};

// Checks the existance of  the'optional' properties of BookData,
// and that author_id has been set.
const isBook = (data: BookData): data is Book => {
    return (
        typeof data.id === 'number' &&
        typeof data.author_id === 'number' &&
        typeof data.created_at === 'string' &&
        typeof data.updated_at === 'string'
    );
}
export const updateBook = async (id: Number, updatedBook: BookData) => {
    if (!isBook(updatedBook)) return;
    const { data } = await axios.put(`/api/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data;
};

export const deleteBook = async (id: Number) => {
    await axios.delete(`/api/books/${id}`);
    books.value = books.value.filter(book => book.id !== id);
}