<script setup>
import { ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import RButton from '../RButton/RButton.vue';
import RHeading from '../RHeading/RHeading.vue';
import { countSlot } from '../../utils.js';

defineProps({
  label: { type: String },
  title: { type: String },
  variant: { type: String },
  closeable: { type: Boolean, default: true }
});

const emit = defineEmits(['close']);

const isOpen = ref(false);
const dialogOverlayRef = ref(null);

const open = () => (isOpen.value = true);

const close = (isEmit = true) => {
  isOpen.value = false;

  if (isEmit) emit('close');
};

const toggle = () => (isOpen.value ? close() : open());

const handleClose = (e) => {
  if (e.target !== dialogOverlayRef.value) return;

  close();
};

defineExpose({
  open,
  close,
  toggle
});
</script>

<template>
  <span>
    <slot name="open" :isOpen="isOpen" :open="open" :close="close" :toggle="toggle">
      <RButton @click="open" :variant="variant">{{ label || 'Open Dialog' }}</RButton>
    </slot>

    <div
      v-if="isOpen"
      class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 overflow-y-auto"
      ref="dialogOverlayRef"
      @click="handleClose"
    >
      <div class="mx-auto my-16 bg-white shadow-xl w-fit rounded-lg relative overflow-hidden">
        <button
          type="button"
          class="px-1.5 hover:text-gray-800 absolute top-7 right-6"
          @click="close"
          tabindex="-1"
          v-if="closeable !== false"
        >
          <XMarkIcon class="w-5 h-5 stroke-[2] pointer-events-none" />
        </button>
        <slot name="header" :isOpen="isOpen" :open="open" :close="close" :toggle="toggle">
          <div v-if="title">
            <RHeading level="5" class="px-6 pt-6 mb-4">{{ title }}</RHeading>
          </div>
        </slot>
        <div
          :class="
            'px-6' +
            (countSlot(['header'], $slots) === 0 && !title ? ' pt-6' : '') +
            (countSlot(['footer'], $slots) === 0 ? ' pb-6' : '')
          "
        >
          <slot :isOpen="isOpen" :open="open" :close="close" :toggle="toggle"></slot>
        </div>
        <slot name="footer" :isOpen="isOpen" :open="open" :close="close" :toggle="toggle"></slot>
      </div>
    </div>
  </span>
</template>
