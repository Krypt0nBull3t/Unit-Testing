<script setup lang="ts">
defineProps<{
    name: string;
    emoji: string;
}>();
</script>

<template>
    <h1>Hello, {{ name }}!</h1>
    <p v-if="name === 'Vitest'">{{ emoji }}</p>
</template>