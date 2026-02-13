<script setup lang="ts">
import { ref } from 'vue';
import type { Author } from '../types/types';


const props = defineProps<{author: Author}>();

const emit = defineEmits<{
    submit: [data: Author]
}>();

const form = ref<Author>({...props.author});

const handleSubmit = () => emit('submit', form.value);

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <label>Name:</label>
        <input v-model="form.name" type="text" required />

        <button type="submit">Submit</button> 
    </form>
</template>