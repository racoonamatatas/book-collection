<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import AuthorForm from '../components/AuthorForm.vue';
import type { Author } from '../types/types';
import { authorStore} from '../store';
import { onMounted } from 'vue';

const route = useRoute();
const router = useRouter();

// const authorId = Number(route.params.id);

// const author = getAuthorById(authorId);

// const handleSubmit = async (data: Author) => {
//     await updateAuthor(authorId, data);
//     router.push({name: 'authors.overview'});
// }

authorStore.actions.getAll();

const authorId = Number(route.params.id);

const author = authorStore.getters.getById(authorId);

const handleSubmit = async (data: Author) => {
    await authorStore.actions.update(authorId, data);
    router.push({name: 'authors.overview'});
}

</script>

<template>
    <div>
        <h2>Edit Author</h2>
        <AuthorForm v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>