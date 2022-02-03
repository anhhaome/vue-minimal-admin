<script setup>
const props = defineProps(["items"]);
</script>

<template>
  <ul
    class="w-48 bg-white border rounded dark:bg-gray-800 dark:border-gray-700"
    v-if="props.items"
  >
    <li
      class="py-2 px-4 cursor-pointer first:rounded-t last:rounded-b hover:bg-gray-100 dark:hover:bg-gray-700"
      v-for="item in props.items"
    >
      {{ item }}
    </li>
  </ul>
</template>
