<script setup lang="ts">

import {ref, watch} from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';
import type { NewBookData } from '../types/types';
// import { watch } from 'node:fs';

// fetch authors when component is mounted
fetchAuthors();

const props = defineProps<{book: NewBookData}>();

const emit = defineEmits(['submit']);

const form = ref({...props.book});

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