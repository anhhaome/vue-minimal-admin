<script setup>
import { inject, ref } from "vue";
import { RouterView } from "vue-router";
import { MConfirmDialog, MInputDialog, MNotification } from "@rugo-vn/vue";

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
