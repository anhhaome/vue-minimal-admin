<script setup>
import { computed } from 'vue';

const props = defineProps({
  level: { level: Number, default: 1 }
});

const parsedLevel = computed(() => parseInt(props.level));
</script>

<template>
  <h2 v-if="parsedLevel === 2" class="text-3xl font-bold">
    <slot></slot>
  </h2>

  <h3 v-else-if="parsedLevel === 3" class="text-2xl font-semibold">
    <slot></slot>
  </h3>

  <h3 v-else-if="parsedLevel === 4" class="text-xl font-semibold">
    <slot></slot>
  </h3>

  <h3 v-else-if="parsedLevel === 5" class="text-lg font-semibold">
    <slot></slot>
  </h3>

  <h3 v-else-if="parsedLevel === 6" class="text-base font-semibold">
    <slot></slot>
  </h3>

  <h1 v-else class="text-4xl font-bold">
    <slot></slot>
  </h1>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply text-black;
}
</style>
