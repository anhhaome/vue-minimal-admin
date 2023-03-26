<script setup>
import RTree from './RTree.vue';
</script>

<template>
  <RTree>
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData"></slot>
    </template>
  </RTree>
</template>
