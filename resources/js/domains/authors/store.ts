import axios from 'axios';
import { ref, computed } from 'vue';
import type { Author, AuthorData } from './types/types';


// state
const authors = ref<Author[]>([]);

// getters
export const getAllAuthors = computed(() => authors.value);

// actions
export const fetchAuthors = async () => {
    const {data} = await axios.get('/api/authors');
    if(!data) return
    authors.value = data;
};

export const createAuthor = async(newAuthor: AuthorData) => {
    const { data } = await axios.post('/api/authors', newAuthor);
    if (!data) return;
    authors.value = data;
}