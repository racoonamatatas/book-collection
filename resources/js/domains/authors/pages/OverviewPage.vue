<script setup lang="ts">
import { onMounted } from 'vue';
import { authorStore } from '../store';
import { Author } from '../types/types';

const authors= authorStore.getters.all;

// Debug logging - will show empty array initially
console.log('Authors value (before mount):', authors.value);
console.log('Authors length (before mount):', authors.value?.length);

onMounted(async () => {
    await authorStore.actions.getAll();
    
    // Debug logging - will show loaded data
    console.log('Authors value (after load):', authors.value);
    console.log('Authors length (after load):', authors.value?.length);
    authors.value?.forEach((author, index) => {
        console.log(`Index ${index}:`, author);
    });
});
</script>

<template>
    <table>
        <tbody>
            <tr>
                <th>Author</th>
            </tr>
            <tr v-for="author in authors" :key="author.id">
                <td>{{ author.name }}</td>
                <td>
                    <router-link :to="{name: 'authors.edit', params: {id: author.id}}">Edit</router-link>
                </td>
                <td>
                    <button @click="authorStore.actions.delete(author.id)">Delete</button>
                </td>
            </tr>
                            
        </tbody>
    </table>
</template>