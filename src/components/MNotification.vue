<script setup>
import uniqid from "uniqid";
import { reactive } from "vue";

const notifications = reactive([]);

let loopVar = null;
function loop() {
  if (loopVar) return;

  loopVar = setInterval(() => {
    const now = new Date();

    while (
      notifications.length > 0 &&
      now - notifications[0].createdAt > 2000
    ) {
      notifications.shift();
    }

    if (notifications.length === 0) {
      clearInterval(loopVar);
      loopVar = null;
    }
  }, 100);
}

defineExpose({
  push(type, message) {
    notifications.push({
      id: uniqid(),
      type,
      message,
      createdAt: new Date(),
    });

    loop();
  },
});
</script>

<template>
  <div
    class="fixed bottom-6 right-6 z-30 mactive:block text-white w-full max-w-xs pointer-events-none"
    v-if="notifications.length"
  >
    <div
      :class="`m-alert ${noti.type} px-4 py-2 mt-4 w-fit max-w-full ml-auto
    animate__animated animate__fadeInRight animate__faster`"
      v-for="noti in notifications"
      :key="noti.key"
    >
      {{ noti.message }}
    </div>
  </div>
</template>
