<script setup lang="ts">
import { ref } from 'vue';
import { authorStore } from '../../authors/store';
import type { Book } from '../types/types'
 
// Fetch authors when component is mounted
// fetchAuthors();
authorStore.actions.getAll();

const props = defineProps<{ 
    book: Book 
}>();

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

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
            <option v-for="author in authorStore.getters.all.value" :key="author.id" :value="author.id">
                {{ author.name }}
            </option>
        </select>

        <button type="submit">Save</button>
    </form>
</template>

