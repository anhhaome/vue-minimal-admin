<script setup>
import { INPUT_SIZES } from '../../constants.js';

defineProps({
  variant: { type: String, default: 'default' },
  size: { type: String, default: 'md' },
  is: true
});

const VARIANTS = {
  default: 'border-gray-500 hover:bg-gray-200',
  none: 'border-transparent hover:bg-gray-200',
  primary: 'border-primary-300 bg-primary-300 hover:border-primary-200 hover:bg-primary-200',
  secondary:
    'border-secondary-300 bg-secondary-300 hover:border-secondary-200 hover:bg-secondary-200',
  success: 'border-success-300 bg-success-300 hover:border-success-200 hover:bg-success-200',
  danger: 'border-danger-300 bg-danger-300 hover:border-danger-200 hover:bg-danger-200',
  info: 'border-info-300 bg-info-300 hover:border-info-200 hover:bg-info-200',
  warn: 'border-warn-300 bg-warn-300 hover:border-warn-200 hover:bg-warn-200'
};
</script>

<template>
  <component
    :is="is ? is : 'button'"
    :class="`r-button border-2 rounded inline-flex items-center justify-center font-bold ${VARIANTS[variant]} ${INPUT_SIZES[size]}`"
  >
    <slot></slot>
  </component>
</template>
