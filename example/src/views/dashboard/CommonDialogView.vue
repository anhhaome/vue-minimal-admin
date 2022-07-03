<script setup>
import { inject } from "vue";
import { MButton, MPanel } from '@rugo-vn/vue';

const mDialog = inject("mdialog");
const mNoti = inject('mnoti');

const showConfirmDialog = async () => {
  mNoti.push('info', `Confirm dialog result: ${await mDialog.show("confirm")}`);
};

const showInputDialog = async () => {
  mNoti.push('info', `Input dialog result: ${await mDialog.show("input")}`);
};
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Common Dialog</h1>

  <MPanel>
    <MButton class="mr-2" variant="primary" @click="showConfirmDialog"
      >Show confirm</MButton
    >
    <MButton class="mr-2" variant="primary" @click="showInputDialog"
      >Show input</MButton
    >
  </MPanel>
</template>
