<script setup lang="ts">

import { useRouter } from 'vue-router';
import type { NewBookData } from '../types/types';
import { ref } from 'vue';
import { createBook } from '../store';
import BookForm from '../components/BookForm.vue';

const router = useRouter();

const book = ref<NewBookData>({
    title: '',
    summary: '',
    author_id: null
});

const handleSubmit = async (data: NewBookData) => {
    await createBook(data);
    router.push({name: 'books.overview'});
}
</script>

<template>
    <div>
        <h2>Add a new book</h2>
        <BookForm :book="book" @submit="handleSubmit" />
    </div>
</template>
