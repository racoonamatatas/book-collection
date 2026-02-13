import type { Author } from './types/types';
import { storeModuleFactory } from '../../services/store';


// // state
// const authors = ref<Author[]>([]);

// // getters
// export const getAllAuthors = computed(() => authors.value);

// export const getAuthorById = (id: number) => computed(
//     () => authors.value.find(author => author.id == id));

// // actions
// export const fetchAuthors = async () => {
//     const {data} = await getRequest('/authors');
//     if(!data) return
//     authors.value = data;
// };

// export const createAuthor = async(newAuthor: Author) => {
//     const { data } = await postRequest('/authors', newAuthor);
//     if (!data) return;
//     authors.value = data;
// }

// export const updateAuthor = async (id: Number, updatedAuthor: Author) => {

//     const { data } = await putRequest(`/authors/${id}`, updatedAuthor);
//     if (!data) return;
//     authors.value = data;
// };

// export const deleteAuthor =  async (id: Number) => {
//     await deleteRequest(`/authors/${id}`);
//     authors.value = authors.value.filter(author => author.id !== id);
// }

export const authorStore = storeModuleFactory<Author>('authors');