<script setup>
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
appStore.view = 'Introduction';
</script>

<template>
  <RHeading>Introduction</RHeading>
  <RHeading type="h2">@rugo-vn/vue</RHeading>
  <p class="mt-2">A Vue Component Library with TailwindCSS.</p>
</template>
