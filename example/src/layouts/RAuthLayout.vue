<script setup>
import { RouterView } from "vue-router";
import RCentralLayoutVue from "../components/RCentralLayout.vue";
</script>

<template>
  <RCentralLayoutVue>
    <div class="width-full max-w-2xl">
      <slot name="logo">
        <AppLogo />
      </slot>
      <div
        class="p-6 rounded border bg-white border-gray-100 mt-12 dark:bg-gray-900 dark:border-gray-800"
      >
        <RouterView />
      </div>
    </div>
  </RCentralLayoutVue>
</template>
