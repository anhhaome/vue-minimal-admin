<script setup>
import RField from '../RHelper/RField.vue'
import RSelectBase from './RSelectBase.vue'
</script>

<template>
  <RField v-slot="{ labelRef, name, options, value, onInput }">
    <RSelectBase
      :labelRef="labelRef"
      :name="name"
      :options="options"
      :value="[value]"
      @input="(list) => onInput(list[0])"
    />
  </RField>
</template>
