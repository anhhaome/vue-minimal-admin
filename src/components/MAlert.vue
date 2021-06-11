<script setup>
defineProps(["variant", "icon"]);
</script>

<template>
  <div
    :class="`m-alert ${
      variant || 'secondary'
    } p-4 rounded mb-4 flex items-center`"
  >
    <ion-icon v-if="icon" class="text-lg mr-3" :name="icon"></ion-icon>
    <span><slot></slot></span>
    <span class="ml-auto"></span>
    <ion-icon
      v-if="$attrs.onClose"
      class="text-lg cursor-pointer select-none"
      name="close"
      @click="$emit('close')"
    ></ion-icon>
  </div>
</template>
