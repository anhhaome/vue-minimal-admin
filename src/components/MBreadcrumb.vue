<script setup>
import { RouterLink } from "vue-router";
defineProps(["items"]);
</script>

<template>
  <div class="inline-flex items-center space-x-2">
    <RouterLink
      class="text-sm inline-flex items-center mactive:text-stone-400 dark:mactive:text-stone-500"
      :to="item.href"
      v-for="(item, index) in items"
      :active="item.active || null"
      :key="item.text"
    >
      <ion-icon
        class="mr-2"
        :name="index === 0 ? 'home' : 'chevron-forward'"
      ></ion-icon>
      <span>{{ item.text }}</span>
    </RouterLink>
  </div>
</template>
