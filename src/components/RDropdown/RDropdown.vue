<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue';

const props = defineProps([
  'label',
  'variant',
  'disableAutoHide',
  'enableHover',
  'margin',
  'boxAlign',
]);

const isOpened = ref(false);
const dropdown = ref(null);
const baseDropdown = ref(null);
const floatDropdown = ref(null);

const dropdownStyle = computed(() => {
  const defReturn = {
    display: isOpened.value ? 'block' : 'none',
  };

  if (!baseDropdown.value) return defReturn;

  const rootBox = dropdown.value.getBoundingClientRect();
  const baseBox = baseDropdown.value.getBoundingClientRect();

  const top = baseBox.top - rootBox.top + (parseInt(props.margin) || 0);

  if (props.boxAlign === 'auto') {
    nextTick(() => {
      const floatBox = floatDropdown.value.getBoundingClientRect();
      const left = window.innerWidth - baseBox.left - floatBox.width;
      floatDropdown.value.style.left = `${Math.min(left, 0)}px`;
    });
  }

  return {
    top: `${top}px`,
    ...(props.boxAlign === 'right' ? { right: 0 } : {}),
    ...defReturn,
  };
});

const toggleOpen = () => {
  isOpened.value = !isOpened.value;
};

const isInside = (node, target) => {
  if (!node) return false;

  if (node === target) return true;

  return isInside(node.parentNode, target);
};

const autoHideDropdown = (e) => {
  if (isInside(e.target, dropdown.value)) {
    return;
  }

  isOpened.value = false;
};

const enableHoverDropdown = (e) => {
  if (isInside(e.target, dropdown.value)) {
    isOpened.value = true;
  } else {
    isOpened.value = false;
  }
};

onMounted(() => {
  if (!props.disableAutoHide)
    window.addEventListener('click', autoHideDropdown);

  if (props.enableHover)
    window.addEventListener('mousemove', enableHoverDropdown);
});

onUnmounted(() => {
  if (!props.disableAutoHide)
    window.removeEventListener('click', autoHideDropdown);

  if (props.enableHover)
    window.removeEventListener('mousemove', enableHoverDropdown);
});
</script>

<template>
  <div ref="dropdown" class="inline-block relative">
    <slot name="open" :click="toggleOpen" :isOpened="isOpened">
      <RButton
        :variant="props.variant || 'primary'"
        @click="toggleOpen"
        v-if="props.label !== false"
        >{{ props.label || 'Open Dropdown' }}</RButton
      >
    </slot>

    <div
      ref="baseDropdown"
      :style="{ width: '100%', height: (margin || 0) + 'px' }"
    ></div>

    <div
      ref="floatDropdown"
      class="bg-white drop-shadow rounded absolute z-10 overflow-hidden w-fit"
      :style="dropdownStyle"
    >
      <slot :click="toggleOpen" :isOpened="isOpened"></slot>
    </div>
  </div>
</template>
