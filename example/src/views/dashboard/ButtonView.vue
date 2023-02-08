<script setup>
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
appStore.view = 'Button';
</script>

<template>
  <RPanel>
    <RHeading type="h2">Simple</RHeading>

    <div class="mb-4">
      <RButton variant="primary" class="mr-4">Primary</RButton>
      <RButton variant="secondary" class="mr-4">Secondary</RButton>
    </div>

    <div class="mb-4">
      <RButton variant="success" class="mr-4">Success</RButton>
      <RButton variant="danger" class="mr-4">Danger</RButton>
    </div>

    <div class="mb-4">
      <RButton variant="info" class="mr-4">Info</RButton>
      <RButton variant="warn" class="mr-4">Warn</RButton>
    </div>
  </RPanel>
</template>
