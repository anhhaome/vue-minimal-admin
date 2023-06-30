<script setup>
import { ref } from 'vue';
import {
  RHeading,
  RPanel,
  RDialog,
  RButton,
  RConfirmDialog,
  RAlertDialog,
  useDialog
} from '../../lib/index.js';
import LoremIpsum from '../components/LoremIpsum.vue';

const { confirm, alert } = useDialog();
const dialogStatus = ref(null);

const openCommonDialog = async (fn, msg) => {
  dialogStatus.value = await fn(msg);
};
</script>

<template>
  <RPanel>
    <RHeading class="mb-10" level="2">Dialog</RHeading>

    <RHeading class="mb-7" level="4">Basic</RHeading>

    <RDialog class="inline-block mb-4 mr-4" :closeable="false">
      <LoremIpsum class="max-w-[560px]" :quantity="3" />
    </RDialog>

    <RDialog
      class="inline-block mb-4 mr-4"
      variant="primary"
      label="Custom Open Label"
      title="Lorem Ipsum"
    >
      <LoremIpsum class="max-w-[560px]" :quantity="10" />
    </RDialog>

    <RHeading class="mt-7 mb-7" level="4">Common</RHeading>

    <RConfirmDialog class="mr-4" label="Confirm">
      <LoremIpsum :quantity="1" />
    </RConfirmDialog>

    <RAlertDialog label="Alert">
      <LoremIpsum :quantity="1" />
    </RAlertDialog>

    <RHeading class="mt-7 mb-7" level="4">Global</RHeading>

    <RButton
      variant="primary"
      class="mr-4"
      @click="() => openCommonDialog(confirm, 'Do you want to confirm?')"
    >
      Confirm
    </RButton>

    <RButton variant="primary" @click="() => openCommonDialog(alert, 'This is an alert string.')">
      Alert
    </RButton>

    <div class="mt-4">Dialog Status: {{ dialogStatus }}</div>

    <RHeading class="mt-7 mb-7" level="4">Custom</RHeading>

    <RDialog
      class="inline-block mb-4 mr-4"
      variant="primary"
      label="Custom Open Label"
      title="Lorem Ipsum"
      :closeable="false"
    >
      <template #open="{ open }">
        <a @click="open" class="text-primary-600 underline cursor-pointer">Open by custom link</a>
      </template>

      <template #header>
        <RHeading level="5">
          <div class="bg-primary-500 text-white p-6 mb-6">Lorem Ipsum Custom Header</div>
        </RHeading>
      </template>

      <template #footer="{ close }">
        <div class="bg-gray-100 p-6 mt-6 flex justify-end">
          <RButton variant="none" class="ml-4" @click="close">Close</RButton>
          <RButton variant="primary" class="ml-4" @click="close">Okay</RButton>
        </div>
      </template>

      <div class="max-h-[300px] overflow-y-auto">
        <LoremIpsum class="max-w-[960px]" :quantity="10" />
      </div>
    </RDialog>
  </RPanel>
</template>
