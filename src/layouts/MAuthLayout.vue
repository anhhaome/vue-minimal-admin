<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div
    class="w-screen min-h-screen flex items-center justify-center p-4 bg-gray-50 group ml-auto dark:bg-gray-900"
  >
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
  </div>
</template>
