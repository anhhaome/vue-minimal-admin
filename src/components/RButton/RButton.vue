<script setup>
defineProps(["variant", "disabled"]);
</script>

<template>
  <button
    :class="`r-button ${
      variant || 'secondary'
    } px-4 py-2 rounded-lg inline-flex items-center text-white`"
    :disabled="disabled ? true : null"
  >
    <slot></slot>
  </button>
</template>
