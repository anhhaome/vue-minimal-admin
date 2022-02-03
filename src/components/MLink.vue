<script setup>
import { RouterLink } from "vue-router";

defineProps(["to"]);
defineEmits(["click"]);
</script>

<template>
  <RouterLink
    :to="to"
    class="text-primary-500 font-medium hover:underline cursor-pointer"
    v-if="to"
  >
    <slot></slot>
  </RouterLink>
  <a
    class="text-primary-500 font-medium hover:underline cursor-pointer"
    v-if="!to"
    @click="$emit('click')"
  >
    <slot></slot>
  </a>
</template>
