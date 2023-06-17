<script setup>
defineProps(['variant'])
</script>

<template>
  <button
    :class="`${variant || 'secondary'} uppercase text-white px-3 py-2 rounded-lg font-semibold`"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.primary {
  @apply bg-primary-500;
}

.secondary {
  @apply bg-secondary-500;
}

.success {
  @apply bg-success-500;
}

.danger {
  @apply bg-danger-500;
}

.info {
  @apply bg-info-500;
}

.warn {
  @apply bg-warn-500;
}
</style>
