<script setup lang="ts">
import { ref } from 'vue';
import type { AuthorData } from '../types/types';


const props = defineProps<{author: AuthorData}>();

const emit = defineEmits<{
    submit: [data: AuthorData]
}>();

const form = ref<AuthorData>({...props.author});

const handleSubmit = () => emit('submit', form.value);
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <label>Name:</label>
        <input v-model="form.name" type="text" required />

    </form>
</template>