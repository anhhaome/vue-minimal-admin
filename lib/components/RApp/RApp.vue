<script setup>
import { provide, ref } from 'vue';

import RConfirmDialog from '../RDialog/RConfirmDialog.vue';
import RAlertDialog from '../RDialog/RAlertDialog.vue';
import { R_DIALOG } from '../../constants.js';

const rConfirmDialogRef = ref(null);
const rAlertDialogRef = ref(null);
const dialogMessage = ref('');

let confirmSubcriber = null;
let alertSubcriber = null;

provide(R_DIALOG, {
  confirm(msg) {
    return new Promise((resolve) => {
      dialogMessage.value = msg;
      rConfirmDialogRef.value.dialog.open();

      if (confirmSubcriber) confirmSubcriber(false);

      confirmSubcriber = resolve;
    });
  },

  alert(msg) {
    return new Promise((resolve) => {
      dialogMessage.value = msg;
      rAlertDialogRef.value.dialog.open();

      if (alertSubcriber) alertSubcriber(false);

      alertSubcriber = resolve;
    });
  }
});
</script>

<template>
  <div class="bg-gray-100 text-gray-500 antialiased min-w-screen min-h-screen">
    <div class="flex items-start">
      <slot name="left"></slot>

      <div class="w-full">
        <slot name="top"></slot>
        <div class="pb-64">
          <slot></slot>
        </div>
        <slot name="bottom"></slot>
      </div>

      <slot name="right"></slot>
    </div>

    <RConfirmDialog ref="rConfirmDialogRef" @confirm="(value) => confirmSubcriber(value)">
      <template #open><span class="hidden"></span></template>

      <div class="text-center">{{ dialogMessage }}</div>
    </RConfirmDialog>

    <RAlertDialog ref="rAlertDialogRef" @close="alertSubcriber(true)">
      <template #open><span class="hidden"></span></template>

      <div class="text-center">{{ dialogMessage }}</div>
    </RAlertDialog>
  </div>
</template>
