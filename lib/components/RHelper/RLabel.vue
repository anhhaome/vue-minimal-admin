<script setup>
defineProps({
  name: { type: String, required: true },
  label: { type: String }
});
</script>

<template>
  <label v-if="label" :for="name" class="mb-2 font-bold flex select-none">{{ label }}</label>
</template>
