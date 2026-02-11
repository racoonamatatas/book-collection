<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BookForm from '../components/BookForm.vue';
import { fetchBooks, getBookById, updateBook } from '../store';
import type { Book, BookData } from '../types/types';

const route = useRoute();
const router = useRouter();

fetchBooks();

const bookId = Number(route.params.id);

const book = getBookById(bookId);

const handleSubmit = async (data: BookData) => {
    await updateBook(bookId, data);
    router.push({ name: 'books.overview' });
};
</script>

<template>
    <div>
        <h2>Edit book</h2>
        <BookForm v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>
