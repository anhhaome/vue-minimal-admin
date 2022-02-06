<script setup>
import { inject, reactive } from "vue";
import MButton from "../../components/MButton.vue";
import MPanel from "../../components/MPanel.vue";

const mNoti = inject("mnoti");
const pushNotification = (type, message) => mNoti.push(type, message);
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Notification</h1>

  <MPanel>
    <MButton class="mb-3 mr-3" variant="success" @click="pushNotification('success', 'This is a success message!')">Push success</MButton>
    <MButton class="mb-3 mr-3" variant="danger" @click="pushNotification('danger', 'This is a danger, very danger message!')">Push danger</MButton>
    <MButton class="mb-3 mr-3" variant="info" @click="pushNotification('info', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere est eget nunc sodales, pretium dignissim nibh vestibulum. Nam aliquet interdum faucibus. ')">Push info</MButton>
    <MButton class="mb-3 mr-3" variant="warn" @click="pushNotification('warn', 'This is a warn message!')">Push warn</MButton>
    <MButton class="mb-3 mr-3" variant="primary" @click="pushNotification('primary', 'This is a primary message!')">Push primary</MButton>
    <MButton class="mb-3 mr-3" variant="secondary" @click="pushNotification('secondary', 'This is a secondary message!')">Push secondary</MButton>
  </MPanel>
</template>
