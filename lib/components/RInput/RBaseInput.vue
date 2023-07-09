<script setup>
import { ref } from 'vue';
import { INPUT_SIZES } from '../../constants.js';

const props = defineProps({
  name: { type: String },
  labelRef: { type: String },
  type: { type: String },
  size: { type: String, default: 'md' },
  placeholder: { type: String },
  value: true,
  onInput: { type: Function },
  onBlur: { type: Function }
});

const isFocus = ref(false);
const inputRef = ref(null);

const STYLE_SIZES = {
  md: 'p-1.5 text-base focus-within:ring-1 focus-within:ring-primary-600',
  lg: 'p-2 text-lg border-2'
};

const PADDING_SIZES = {
  md: 'w-1.5',
  lg: 'w-2'
};

const toggleFocus = (e) => {
  if (e.target === inputRef.value) return;

  e.preventDefault();

  if (e.target.getAttribute('disable-toggle-focus') !== null) return;

  if (isFocus.value) {
    inputRef.value.blur();
  } else {
    inputRef.value.focus();
  }
};

defineExpose({
  blur() {
    inputRef.value.blur();
  }
});
</script>

<template>
  <div
    :class="`w-full rounded border border-gray-300 flex items-center focus-within:outline-none focus-within:border-primary-600 ${INPUT_SIZES[size]} ${STYLE_SIZES[size]}`"
    @mousedown="toggleFocus"
  >
    <slot name="start"></slot>

    <div :class="`shrink-0 ${PADDING_SIZES[size]}`"></div>

    <input
      ref="inputRef"
      :name="name"
      :id="labelRef"
      :type="type || 'text'"
      autocomplete="false"
      spellcheck="false"
      :value="value"
      :placeholder="placeholder"
      @input="(e) => onInput && onInput(e.target.value)"
      @blur="() => onBlur && onBlur()"
      class="w-full outline-none leading-5 min-w-[120px]"
    />

    <div :class="`shrink-0 ${PADDING_SIZES[size]}`"></div>

    <slot name="end"></slot>
  </div>
</template>
