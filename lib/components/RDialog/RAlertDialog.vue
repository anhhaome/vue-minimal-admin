<script setup>
import { ref } from 'vue';
import RButton from '../RButton/RButton.vue';
import RDialog from './RDialog.vue';

const props = defineProps({
  title: String
});

const dialogRef = ref(null);
defineExpose({
  dialog: dialogRef
});
</script>

<template>
  <RDialog :title="title || 'Alert'" ref="dialogRef">
    <template #open="slotData">
      <slot name="open" v-bind="slotData"></slot>
    </template>

    <template #footer="{ close }">
      <div class="p-6 flex justify-center">
        <RButton variant="primary" @click="close">Okay</RButton>
      </div>
    </template>

    <template v-slot="slotData">
      <div class="max-w-md">
        <slot v-bind="slotData"></slot>
      </div>
    </template>
  </RDialog>
</template>
