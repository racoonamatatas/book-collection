
<script setup lang="ts">
import { ref } from 'vue';
import BookForm from '../components/BookForm.vue';
import { createBook } from '../store';
import { useRouter } from 'vue-router';
import type { Book } from '../types/types';

const router = useRouter();

const book = ref<Book>({
    id: 0,
    title: '',
    summary: '',
    author_id: null
});

const handleSubmit = async (data: Book) => {
    await createBook(data);
    router.push({name: 'books.overview'});
};
</script>

<template>
    <div>
        <h2>Add a new book</h2>
        <BookForm :book="book" @submit="handleSubmit" />
    </div>
</template>
