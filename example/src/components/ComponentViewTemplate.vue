<script setup>
import { RHeading, RPanel } from '@rugo-vn/vue';

defineProps({
  title: { type: String },
  components: { type: Array }
});
</script>

<template>
  <div>
    <RHeading class="mb-2">{{ title }}</RHeading>
    <p class="mb-4">
      <code v-for="component in components" :key="component">&lt;{{ component }}&gt;&nbsp;</code>
    </p>

    <RPanel
      v-for="slot in Object.keys($slots).filter((name) => name.indexOf('row') === 0)"
      :key="slot"
      class="mb-4"
    >
      <slot :name="slot"></slot>
    </RPanel>
  </div>
</template>
