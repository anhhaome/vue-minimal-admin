<script setup>
import RField from '../RHelper/RField.vue';
</script>

<template>
  <RField v-slot="{ onInput, onBlur, value, labelRef, name, type }">
    <input
      :name="name"
      :id="labelRef"
      :type="type || 'text'"
      autocomplete="false"
      spellcheck="false"
      :value="value"
      @input="(e) => onInput(e.target.value)"
      @blur="() => onBlur()"
      class="border border-gray-300 rounded-md px-3 py-2 w-full leading-5 h-11 text-sm focus:outline-primary-600 focus-within:outline-primary-600 focus-within:border-primary-600 focus:border-primary-600"
    />
  </RField>
</template>
