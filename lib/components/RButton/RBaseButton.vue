<script setup>
defineProps({
  variant: { type: String, default: 'default' },
  size: { type: String, default: 'md' },
  is: true
});

const SIZES = {
  md: 'h-9'
};

const VARIANTS = {
  default: 'border-gray-500 hover:bg-gray-200',
  none: 'border-transparent hover:bg-gray-200'
};
</script>

<template>
  <component
    :is="is ? is : 'button'"
    :class="`r-button text-base border-2 rounded inline-flex items-center font-bold ${VARIANTS[variant]} ${SIZES[size]}`"
  >
    <slot></slot>
  </component>
</template>
