<script setup>
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
appStore.view = 'RInput';
</script>

<template>
  <RPanel>
    <RHeading type="h2">Simple</RHeading>

    <RInput label="Email" />
  </RPanel>

  <RPanel>
    <RHeading type="h2">Form</RHeading>

    <div>
      <RInput label="Email" type="email" />
    </div>

    <div>
      <RInput class="mb-0" label="Password" type="password" />
    </div>

    <div class="my-4">
      <RCheckbox label="Remember me" />
    </div>

    <RButton variant="primary">Sign In</RButton>
  </RPanel>
</template>
