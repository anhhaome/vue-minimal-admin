<script setup>
import { provide, ref } from 'vue';

import RConfirmDialog from '../RDialog/RConfirmDialog.vue';
import RAlertDialog from '../RDialog/RAlertDialog.vue';
import { R_DIALOG } from '../../constants.js';
import { countSlot } from '../../utils.js';
import RJson from '../RTree/RJson.vue';

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
  <div class="text-base bg-gray-50 antialiased min-w-screen min-h-screen">
    <div v-if="countSlot(['top'], $slots) > 0" class="w-full sticky top-0 z-40">
      <slot name="top"></slot>
    </div>

    <div class="flex items-start">
      <div
        v-if="countSlot(['left'], $slots) > 0"
        class="w-60 h-[calc(100vh-54px)] top-[54px] sticky z-30"
      >
        <slot name="left"></slot>
      </div>

      <div class="w-full">
        <div class="p-8 pb-64">
          <slot></slot>
        </div>
      </div>

      <slot name="right"></slot>
    </div>

    <RConfirmDialog ref="rConfirmDialogRef" @confirm="(value) => confirmSubcriber(value)">
      <template #open><span class="hidden"></span></template>

      <RJson v-if="typeof dialogMessage === 'object'" :data="dialogMessage" />
      <div v-else class="text-center">{{ dialogMessage }}</div>
    </RConfirmDialog>

    <RAlertDialog ref="rAlertDialogRef" @close="alertSubcriber(true)">
      <template #open><span class="hidden"></span></template>

      <RJson v-if="typeof dialogMessage === 'object'" :data="dialogMessage" />
      <div v-else class="text-center">{{ dialogMessage }}</div>
    </RAlertDialog>
  </div>
</template>

<style>
code,
kbd,
samp,
pre {
  font-size: 0.95em;
}
</style>
