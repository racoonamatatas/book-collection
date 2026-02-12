import { ref, computed } from 'vue';
import type { Book } from './types/types';
import { deleteRequest, getRequest, postRequest, putRequest } from '../../services/http';
import { storeModuleFactory } from '../../services/store';
import { onMounted } from 'vue';

// // state
// const books = ref<Book[]>([]);

// // getters
// export const getAllBooks = computed(() => books.value);

// export const getBookById = (id: number) => computed(
//     () => books.value.find(book => book.id == id));

// // actions
// export const fetchBooks = async () => {
//     const { data } = await getRequest('/books');
//     if (!data) return
//     books.value = data;
// };

// export const createBook = async (newBook: Book) => {
//     const { data } = await postRequest('/books', newBook);
//     if (!data) return
//     books.value = data;
// };


// export const updateBook = async (id: Number, updatedBook: Book) => {

//     const { data } = await putRequest(`/books/${id}`, updatedBook);
//     if (!data) return;
//     books.value = data;
// };

// export const deleteBook = async (id: Number) => {
//     await deleteRequest(`/books/${id}`);
//     books.value = books.value.filter(book => book.id !== id);
// }

export const bookStore = storeModuleFactory<Book>('books');
