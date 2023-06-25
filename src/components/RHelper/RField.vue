<script setup>
import { useField } from 'vee-validate'
import { toRef } from 'vue'
import { generateId } from '../../utils'
import RLabel from './RLabel.vue'

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String },

  // RSelect
  options: {
    type: Array,
    required: true
  }
})

const name = toRef(props, 'name')
const { value: inputValue, handleChange, handleBlur } = useField(name)

const labelRef = generateId().toString()
</script>

<template>
  <div>
    <RLabel :name="labelRef" :label="label" />

    <slot
      v-bind="{
        ...props,
        value: inputValue,
        labelRef,
        onInput: handleChange,
        onBlur: handleBlur
      }"
    ></slot>
  </div>
</template>
