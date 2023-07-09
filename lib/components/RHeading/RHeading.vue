<script setup>
import { computed } from 'vue';

const props = defineProps({
  level: { default: 1 },
  type: { type: String }
});

const parsedLevel = computed(() => parseInt(props.level));

const SIZES = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base'
};
</script>

<template>
  <component :is="type ? type : `h${parsedLevel}`" :class="`font-bold ${SIZES[parsedLevel]}`">
    <slot></slot>
  </component>
</template>
