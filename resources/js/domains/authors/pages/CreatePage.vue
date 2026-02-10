<script setup lang="ts">
import { useRouter } from 'vue-router';
import AuthorForm from '../components/AuthorForm.vue';
import { AuthorData } from '../types/types';
import { ref } from 'vue';
import { createAuthor } from '../store';


const router = useRouter();

const author = ref<AuthorData>({
    name: ''
});

const handleSubmit = async (data: AuthorData) => {
    await createAuthor(data);
    router.push({name: 'authors.overview'});
}

</script>

<template>
    <div>
        <h2>Add a new author:</h2>
        <AuthorForm :author="author" @submit="handleSubmit" />
    </div>
</template>