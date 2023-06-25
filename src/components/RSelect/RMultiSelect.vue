<script setup>
import { isEmpty } from 'ramda'
import RField from '../RHelper/RField.vue'
import RSelectBase from './RSelectBase.vue'
</script>

<template>
  <RField v-slot="{ name, labelRef, options, value, onInput }">
    <RSelectBase
      :labelRef="labelRef"
      :name="name"
      :options="options"
      :value="value"
      :isMultiple="true"
      @input="(list) => (isEmpty(list) ? onInput(undefined) : onInput(list))"
    />
  </RField>
</template>
