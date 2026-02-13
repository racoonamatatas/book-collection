<script setup lang="ts">
import { onMounted } from 'vue';
import { bookStore } from '../store';

// get all the books
bookStore.actions.getAll();

</script>

<template>
    <table>
        <tbody>
            <tr>
                <th>Title</th>
                <th>Summary</th>
            </tr>
            <!--Vue automatically unwraps the top level of template scope binding-->
            <tr v-for="book in bookStore.getters.all.value" :key="book.id">
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