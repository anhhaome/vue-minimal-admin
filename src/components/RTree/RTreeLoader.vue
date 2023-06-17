<script setup>
import RTree from './RTree.vue'
</script>

<template>
  <RTree v-slot="slotData">
    <slot v-bind="slotData"></slot>
  </RTree>
</template>
