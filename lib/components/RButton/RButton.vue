<script setup>
import RBaseButton from './RBaseButton.vue';

defineProps({
  size: { type: String, default: 'md' }
});

const SIZES = {
  md: 'px-3',
  lg: 'px-4'
};
</script>

<template>
  <RBaseButton :class="SIZES[size]" :size="size">
    <slot></slot>
  </RBaseButton>
</template>
