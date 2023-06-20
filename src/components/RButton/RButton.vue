<script setup>
defineProps({
  variant: { type: String, default: 'default' }
})
</script>

<template>
  <button :class="'r-button ' + variant">
    <slot></slot>
  </button>
</template>

<style>
.r-button {
  @apply rounded-md px-8 py-2 text-sm font-semibold h-11;
}

.r-button.default {
  @apply border border-gray-300 text-gray-600 bg-white hover:bg-gray-50;
}

.r-button.primary {
  @apply bg-primary-600 hover:bg-primary-500 text-white;
}

.r-button.secondary {
  @apply bg-secondary-600 hover:bg-secondary-500 text-white;
}

.r-button.success {
  @apply bg-success-600 hover:bg-success-500 text-white;
}

.r-button.danger {
  @apply bg-danger-600 hover:bg-danger-500 text-white;
}

.r-button.info {
  @apply bg-info-600 hover:bg-info-500 text-white;
}

.r-button.warn {
  @apply bg-warn-600 hover:bg-warn-500 text-white;
}
</style>
