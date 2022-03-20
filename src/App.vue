<script setup>
import { inject, ref } from "vue";
import { RouterView } from "vue-router";

import MConfirmDialog from "./components/MConfirmDialog.vue";
import MInputDialog from "./components/MInputDialog.vue";

import MNotification from "./components/MNotification.vue";

// dialog
const confirmDialog = ref(null);
const inputDialog = ref(null);

const mDialog = inject("mdialog");

mDialog.register({
  confirm: confirmDialog,
  input: inputDialog,
});

// notification
const notification = ref(null);
const mNoti = inject("mnoti");
mNoti.register(notification);
</script>

<template>
  <RouterView />

  <MConfirmDialog ref="confirmDialog" />
  <MInputDialog ref="inputDialog" />

  <MNotification ref="notification" />
</template>
