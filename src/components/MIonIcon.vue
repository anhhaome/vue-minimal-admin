<script setup>
import { computed, defineAsyncComponent, watch } from 'vue';

const props = defineProps(['name']);

const dynamicComponent = computed(() => {
  const name = props.name;
  return defineAsyncComponent(() => import(`../assets/icons/ion-icon/${name}.svg`));
});

watch(() => props.name, () => {
  // console.log(props.name);
});

// console.log(props.name);

</script>

<template>
  <div class="ionicon" :name="name">
    <div class="ion-inner">
      <component
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
        :is="dynamicComponent"
      />
    </div>
  </div>
</template>

<style lang="scss">
.ionicon {
  .ion-inner {
    width: 1em;
    height: 1em;

    svg {
      fill: currentColor;
      stroke: currentColor;

      path {
        stroke: currentColor;
      }
    }
  }
}
</style>