<script setup lang="ts">

import {ref} from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';
import type { BookData } from '../types/types';

// fetch authors when component is mounted
fetchAuthors();

const props = defineProps<{book: BookData}>();

const emit = defineEmits<{
    submit: [data: BookData]
}>();

const form = ref<BookData>({...props.book});

const handleSubmit = () => emit('submit', form.value);

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input v-model="form.title" type="text" required />

        <label>Summary:</label>
        <textarea v-model="form.summary" required></textarea>

        <label>Author:</label>
        
        <select v-model="form.author_id" required>
            <option v-for="author in getAllAuthors" :key="author.id" :value="author.id">
                {{ author.name }}
            </option>
        </select>

        <button type="submit">Submit</button>
    </form>
</template>