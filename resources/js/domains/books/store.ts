import axios from 'axios';
import { ref, computed } from 'vue';
import type { Book, NewBookData } from './types/types';

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

export const createBook = async (newBook: NewBookData) => {
    const { data } = await axios.post('/api/books', newBook);
    if (!data) return
    books.value = data;
};


export const updateBook = async (id: Number, updatedBook: Book) => {
    const { data } = await axios.put(`/api/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data;
};

export const deleteBook = async (id: Number) => {
    console.log('Deleting book with ID:', id, typeof id);
    await axios.delete(`/api/books/${id}`);
    books.value = books.value.filter(book => book.id !== id);
}