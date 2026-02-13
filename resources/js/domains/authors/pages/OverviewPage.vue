<script setup lang="ts">
import { onMounted } from 'vue';
import { authorStore } from '../store';

authorStore.actions.getAll();

</script>

<template>
    <table>
        <tbody>
            <tr>
                <th>Author</th>
            </tr>
            <tr v-for="author in authorStore.getters.all.value" :key="author.id">
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