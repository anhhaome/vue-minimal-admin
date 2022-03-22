<script setup>
import { onMounted, onUnmounted, ref } from "vue";

import MButton from "./MButton.vue";

const props = defineProps(["label", "variant"]);
const emit = defineEmits(["close"]);

const isOpened = ref(false);

defineExpose({
  show() {
    isOpened.value = true;
  },

  hide() {
    isOpened.value = false;
  },

  toggle() {
    isOpened.value = !isOpened.value;
  },
});

const cancelHotKey = e => {
  if (e.key === 'Escape'){
    isOpened.value = false;
    emit('close');
  }
}

onMounted(() => {
  window.addEventListener('keyup', cancelHotKey);
});

onUnmounted(() => {
  window.removeEventListener('keyup', cancelHotKey);
});
</script>

<template>
  <slot
    name="open"
    :click="
      () => {
        isOpened = true;
      }
    "
  >
    <MButton
      :variant="props.variant || 'primary'"
      @click="isOpened = true"
      v-if="props.label !== false"
      >{{ props.label || "Open Dialog" }}</MButton
    >
  </slot>

  <div
    class="fixed h-screen w-screen top-0 left-0 z-30 overflow-auto p-4 myscroll"
    v-if="isOpened"
  >
    <label
      for="m-control-dialog"
      class="h-screen w-screen fixed top-0 left-0 z-10 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-80"
      @click="
        isOpened = false;
        $emit('close');
      "
    ></label>
    <div
      class="bg-white max-w-3xl w-full mx-auto mt-12 p-4 rounded-lg relative z-30 dark:bg-[#1d2432] dark:border dark:border-[#292f3d]"
    >
      <slot></slot>
    </div>
  </div>
</template>
