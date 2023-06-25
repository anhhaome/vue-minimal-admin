<script setup>
defineProps({
  name: { type: String, required: true },
  label: { type: String }
})
</script>

<template>
  <label v-if="label" :for="name" class="mb-2 font-semibold leading-5 flex text-sm select-none">{{
    label
  }}</label>
</template>
