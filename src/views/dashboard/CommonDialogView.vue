<script setup>
import { inject } from "vue";
import MButton from "../../components/MButton.vue";
import MPanel from "../../components/MPanel.vue";

const mDialog = inject("mdialog");

const showConfirmDialog = async () => {
  console.log(`Confirm dialog result: ${await mDialog.show("confirm")}`);
};

const showInputDialog = async () => {
  console.log(`Input dialog result: ${await mDialog.show("input")}`);
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
