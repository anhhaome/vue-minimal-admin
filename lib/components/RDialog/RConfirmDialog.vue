<script setup>
import { ref } from 'vue';
import RButton from '../RButton/RButton.vue';
import RDialog from './RDialog.vue';

const props = defineProps({
  title: String
});

const emit = defineEmits(['confirm']);

const dialogRef = ref(null);
defineExpose({
  dialog: dialogRef
});

const onConfirm = () => {
  dialogRef.value.close(false);
  emit('confirm', true);
};

const onCancel = () => {
  dialogRef.value.close(false);
  emit('confirm', false);
};
</script>

<template>
  <RDialog :title="title || 'Confirmation'" ref="dialogRef" @close="onCancel">
    <template #open="slotData">
      <slot name="open" v-bind="slotData"></slot>
    </template>

    <template #footer="{ close }">
      <div class="p-6 flex justify-end">
        <RButton variant="none" class="mr-6" @click="close">Cancel</RButton>
        <RButton variant="primary" @click="onConfirm">Okay</RButton>
      </div>
    </template>

    <template v-slot="slotData">
      <div class="max-w-md">
        <slot v-bind="slotData"></slot>
      </div>
    </template>
  </RDialog>
</template>
