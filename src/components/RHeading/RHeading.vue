<script setup>
defineProps(['type'])
</script>

<template>
  <h2 v-if="type === 'h2'" class="text-xl">
    <slot></slot>
  </h2>

  <h3 v-else-if="type === 'h3'" class="text-base">
    <slot></slot>
  </h3>

  <h3 v-else-if="type === 'h4'" class="text-base">
    <slot></slot>
  </h3>

  <h3 v-else-if="type === 'h5'" class="text-base">
    <slot></slot>
  </h3>

  <h3 v-else-if="type === 'h6'" class="text-base">
    <slot></slot>
  </h3>

  <h1 class="text-2xl font-semibold" v-else>
    <slot></slot>
  </h1>
</template>
