<script setup lang="ts">
import { ComputedRef, onMounted } from 'vue';
import { bookStore } from '../store';
import type { Book } from '../types/types';

// get all the books
// bookStore.actions.getAll();
// onMounted(async () => {
//     await bookStore.actions.getAll();
// });

// const books = bookStore.getters.all;

// // Debug logging
// console.log('Books value:', books.value);
// console.log('Books length:', books.value?.length);
// books.value?.forEach((book, index) => {
//     console.log(`Index ${index}:`, book);
// });

const books = bookStore.getters.all;

// Debug logging - will show empty array initially
// console.log('Books value (before mount):', books.value);
// console.log('Books length (before mount):', books.value?.length);

onMounted(async () => {
    await bookStore.actions.getAll();
    
    // Debug logging - will show loaded data
    // console.log('Books value (after load):', books.value);
    // console.log('Books length (after load):', books.value?.length);
    // books.value?.forEach((book, index) => {
    //     console.log(`Index ${index}:`, book);
    // });
});

</script>

<template>
    <table>
        <tbody>
            <tr>
                <th>Title</th>
                <th>Summary</th>
            </tr>
            <!--Vue automatically unwraps the top level of template scope binding-->
            <tr v-for="book in books" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.summary }}</td>
                <td>
                    <router-link :to="{name: 'books.edit', params: {id: book.id}}">Edit</router-link>
                </td>
                <td>
                    <button @click="bookStore.actions.delete(book.id)">Delete</button>
                </td>
                    
            </tr>
        </tbody>
    </table>
</template>