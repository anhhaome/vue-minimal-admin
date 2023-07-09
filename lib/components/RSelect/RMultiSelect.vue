<script setup>
import { isEmpty } from 'ramda';
import RField from '../RHelper/RField.vue';
import RBaseSelect from './RBaseSelect.vue';
</script>

<template>
  <RField v-slot="slotData">
    <RBaseSelect
      v-bind="{
        ...slotData,
        onInput: (arr) => (isEmpty(arr) ? slotData.onInput(undefined) : slotData.onInput(arr))
      }"
      :isMultiple="true"
    />
  </RField>
</template>
