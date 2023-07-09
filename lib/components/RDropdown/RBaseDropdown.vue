<script setup>
defineProps({
  size: { type: String, default: 'md' }
});

const PADDINGS = {
  md: 'top-1',
  lg: 'top-1.5'
};
const preventDefault = (e) => e.preventDefault();
</script>

<template>
  <div class="relative" @mousedown="preventDefault">
    <div
      :class="`bg-white shadow rounded absolute left-0 w-full max-h-64 overflow-y-auto ${PADDINGS[size]}`"
    >
      <slot></slot>
    </div>
  </div>
</template>
