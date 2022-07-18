<script setup>
import { computed, defineAsyncComponent } from 'vue';
import pascalcase from 'pascalcase';

const props = defineProps(['name', 'type']);

const dynamicComponent = computed(() => {
  const name = pascalcase(props.name) + 'Icon';
  return defineAsyncComponent(() => import(`../../dist/ionicons/${name}.vue`));
});
</script>

<template>
  <component :is="dynamicComponent" :name="name" :type="type" />
</template>