<script setup>
import { useAppStore } from '../../stores/app';
import Docs from '../../components/docs';

const appStore = useAppStore();
appStore.view = 'Others';
</script>

<template>
  <RPanel class="doc-preview">
    <RHeading type="h2">RSideNav</RHeading>
    <Docs.RSideNav />
  </RPanel>

  <RPanel class="doc-preview">
    <RHeading type="h2">RTopBar</RHeading>
    <Docs.RTopBar />
  </RPanel>
</template>
