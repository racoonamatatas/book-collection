<script setup lang="ts">
import { onMounted } from 'vue';
import { deleteAuthor, fetchAuthors, getAllAuthors } from '../store';

fetchAuthors();
</script>

<template>
    <table>
        <tbody>
            <tr>
                <th>Author</th>
            </tr>
            <tr v-for="author in getAllAuthors" :key="author.id">
                <td>{{ author.name }}</td>
                <td>
                    <router-link :to="{name: 'authors.edit', params: {id: author.id}}">Edit</router-link>
                </td>
                <td>
                    <button @click="deleteAuthor(author.id)">Delete</button>
                </td>
            </tr>
                            
        </tbody>
    </table>
</template>