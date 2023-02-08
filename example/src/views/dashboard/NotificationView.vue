<script setup>
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();

appStore.view = 'Notification';
</script>

<template>
  <RHeading>Notification</RHeading>

  <RPanel> </RPanel>
</template>
