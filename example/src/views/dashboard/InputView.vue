<script setup>
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
appStore.view = 'Input';
</script>

<template>
  <RHeading>Input</RHeading>

  <RPanel>
    <RHeading type="h2">Simple</RHeading>

    <RInput label="Email" />
  </RPanel>

  <RPanel>
    <RHeading type="h2">Form</RHeading>

    <RInput label="Email" type="email" />
    <RInput label="Password" type="password" />

    <RButton variant="primary">Sign In</RButton>
  </RPanel>
</template>
