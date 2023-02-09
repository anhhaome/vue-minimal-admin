<script setup>
import { lorem } from '../../utils';
import { useAppStore } from '../../stores/app';
import { reactive } from 'vue';

const appStore = useAppStore();
const notices = reactive([]);

const generateNotice = () => {
  notices.push({
    id: notices.length + 1,
    type: ['success', 'danger', 'primary', 'secondary', 'info', 'warn'][
      Math.floor(Math.random() * 6)
    ],
    title: lorem.generateWords(5),
    detail: lorem.generateSentences(2),
  });
};

appStore.view = 'RNotification';
</script>

<template>
  <RPanel>
    <RNotification :notices="notices" />

    <RButton variant="primary" @click="generateNotice"
      >Push random notice</RButton
    >
  </RPanel>
</template>
