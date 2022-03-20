<script setup>
import MListItem from "./MListItem.vue";
const props = defineProps(["items"]);
</script>

<template>
  <ul
    class="w-48 bg-white border rounded dark:bg-gray-800 dark:border-gray-700"
  >
    <slot>
      <MListItem v-for="item in props.items">
        {{ item }}
      </MListItem>
    </slot>
  </ul>
</template>
