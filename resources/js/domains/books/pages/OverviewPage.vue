<script setup lang="ts">
import { onMounted } from 'vue';
import { deleteBook, fetchBooks, getAllBooks } from '../store';

fetchBooks();
</script>

<template>
    <table>
        <tbody>
            <tr>
                <th>Title</th>
                <th>Summary</th>
            </tr>
            <tr v-for="book in getAllBooks" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.summary }}</td>
                <td>
                    <router-link :to="{name: 'books.edit', params: {id: book.id}}">Edit</router-link>
                </td>
                <td>
                    <button @click="deleteBook(book.id)">Delete</button>
                </td>
                    
            </tr>
        </tbody>
    </table>
</template>