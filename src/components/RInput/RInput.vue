<script setup>
import { useField } from 'vee-validate'
import { toRef } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String }
})

const name = toRef(props, 'name')

const { value: inputValue, errorMessage, handleBlur, handleChange } = useField(name)
</script>

<template>
  <div class="text-sm">
    <label v-if="label" :for="name" class="mb-2 font-semibold leading-5 flex">
      {{ label }}
    </label>

    <input
      :name="name"
      :id="name"
      type="text"
      :value="inputValue"
      @input="handleChange"
      @blur="handleBlur"
      class="border border-gray-300 rounded-md px-3 py-2 w-full leading-5 h-11 focus:outline-primary-600 focus-within:outline-primary-600 focus-within:border-primary-600 focus:border-primary-600"
    />

    <div v-if="errorMessage" class="text-danger-500 h-5 -bottom-5 mt-1">{{ errorMessage }}</div>
  </div>
</template>
