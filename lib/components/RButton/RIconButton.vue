<script setup>
import * as Icons from '@heroicons/vue/24/outline';
import RBaseButton from './RBaseButton.vue';

defineProps({
  icon: true,
  size: { type: String, default: 'md' }
});

const SIZES = {
  md: 'w-9',
  lg: 'w-12'
};

const ICON_SIZES = {
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
};
</script>

<template>
  <RBaseButton :class="`${SIZES[size]}`" :size="size">
    <component
      v-if="icon"
      :is="typeof icon === 'string' ? Icons[icon] : icon"
      :class="`${ICON_SIZES[size]} stroke-2`"
    />
  </RBaseButton>
</template>
