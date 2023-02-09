<script setup>
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
appStore.view = 'RHeading';
</script>

<template>
  <RPanel>
    <RHeading type="h1">Heading 1</RHeading>
    <RHeading type="h2">Heading 2</RHeading>
    <RHeading type="h3">Heading 3</RHeading>
    <RHeading type="h4">Heading 4</RHeading>
    <RHeading type="h5">Heading 5</RHeading>
    <RHeading type="h6">Heading 6</RHeading>
  </RPanel>
</template>
