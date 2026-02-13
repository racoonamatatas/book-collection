<script setup lang="ts">
import { useRouter } from 'vue-router';
import AuthorForm from '../components/AuthorForm.vue';
import { Author } from '../types/types';
import { ref } from 'vue';
import { authorStore } from '../store';


const router = useRouter();

const author = ref<Author>({
    id: 0,
    name: ''
});

const handleSubmit = async (data: Author) => {
    await authorStore.actions.create(data);
    router.push({name: 'authors.overview'});
}

</script>

<template>
    <div>
        <h2>Add a new author:</h2>
        <AuthorForm :author="author" @submit="handleSubmit" />
    </div>
</template>