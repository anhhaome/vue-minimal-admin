<script setup>
import { ref, onUnmounted } from "vue";

import MButton from "./MButton.vue";

const props = defineProps(["label", "variant", "autohide", "position"]);
defineEmits(["close"]);
const dropdownWrapper = ref(null);
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

const isCurrent = (node) => {
  if (node === dropdownWrapper.value)
    return true;

  if (node.parentElement)
    return isCurrent(node.parentElement);

  return false;
}

const handleWindowClick = (e) => {
  if (!isCurrent(e.target))
    handleBlur();
}
window.addEventListener('click', handleWindowClick);

onUnmounted(() => {
  window.removeEventListener('click', handleWindowClick);
});

</script>

<template>
  <div class="inline-block relative w-fit" ref="dropdownWrapper">
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
        @click="isOpened = !isOpened"
        v-if="props.label !== false"
      >
        {{ props.label }}
        <ion-icon :class="`${props.label ? 'ml-3' : ''}`" name="caret-down"></ion-icon
      ></MButton>
    </slot>

    <div
      :class="`rounded absolute mt-2 shadow-lg ${position === 'left' ? 'left-0' : 'right-0'} z-10`"
      @click="handleBlur"
      v-if="isOpened"
    >
      <slot></slot>
    </div>
  </div>
</template>
