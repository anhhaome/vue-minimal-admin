<script setup>
import MButton from "../../components/MButton.vue";
import MPanel from "../../components/MPanel.vue";
</script>

<template>
  <h1 class="mt-4 text-3xl font-semibold">Button</h1>

  <MPanel>
    <h2 class="text-xl mb-2">Simple</h2>

    <div class="mb-4">
      <MButton variant="primary" class="mr-4">Primary</MButton>
      <MButton variant="secondary" class="mr-4">Secondary</MButton>
    </div>

    <div class="mb-4">
      <MButton variant="success" class="mr-4">Success</MButton>
      <MButton variant="danger" class="mr-4">Danger</MButton>
    </div>

    <div class="mb-4">
      <MButton variant="info" class="mr-4">Info</MButton>
      <MButton variant="warn" class="mr-4">Warn</MButton>
    </div>
  </MPanel>
</template>
