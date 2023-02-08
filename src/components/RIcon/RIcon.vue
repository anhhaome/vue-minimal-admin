<script setup>
import { computed, defineAsyncComponent } from 'vue';
import { icons } from './icons';

const props = defineProps(['name']);

const view = computed(() => {
  if (icons.indexOf(props.name) === -1) props.name = 'document';

  const name = (props.name || '')
    .replace(/[^a-z0-9]+/gi, ' ')
    .replace(/(\b[a-z0-9](?!\s))/gi, function (x) {
      return x.toUpperCase();
    })
    .trim()
    .replace(/\s/g, '');

  return defineAsyncComponent(() =>
    import(`../../../node_modules/@rugo-vn/vue/dist/ionicons/${name}Icon.vue`)
  );
});
</script>

<template>
  <component :is="view"></component>
</template>
