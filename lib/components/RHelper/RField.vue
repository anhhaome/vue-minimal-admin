<script setup>
import { useField } from 'vee-validate';
import { ref, toRef } from 'vue';
import { generateId } from '../../utils';
import RLabel from './RLabel.vue';

const props = defineProps({
  name: { type: String },
  label: { type: String },
  modelValue: {},
  value: {},

  // RSelect
  options: {
    type: Array
  }
});
const emit = defineEmits(['input', 'update:modelValue']);

const labelRef = generateId().toString();
const name = props.name ? toRef(props, 'name') : ref(labelRef);
const {
  value: inputValue,
  handleChange,
  handleBlur
} = useField(name, [], {
  initialValue: props.modelValue || props.value
});

const onInput = (value) => {
  handleChange(value);
  emit('input', value);
  emit('update:modelValue', value);
};
</script>

<template>
  <div>
    <RLabel :name="labelRef" :label="label" />

    <slot
      v-bind="{
        ...props,
        name,
        value: inputValue,
        labelRef,
        onInput,
        onBlur: handleBlur
      }"
    ></slot>
  </div>
</template>
