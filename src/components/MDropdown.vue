<script setup>
import { ref } from "vue";

import MButton from "./MButton.vue";

const props = defineProps(["label", "variant", "autohide"]);
defineEmits(["close"]);

const isOpened = ref(false);

const handleBlur = () => {
  if (!props.autohide) return;

  isOpened.value = false;
};

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
      @blur="handleBlur"
      v-if="props.label !== false"
      >{{ props.label || "Open Dropdown"
      }}<ion-icon class="ml-3" name="caret-down"></ion-icon
    ></MButton>
  </slot>

  <div class="rounded absolute mt-2 shadow-lg" v-if="isOpened">
    <slot></slot>
  </div>
</template>
