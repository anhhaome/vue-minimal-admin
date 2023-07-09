<script setup>
import RField from '../RHelper/RField.vue';
import RBaseSelect from './RBaseSelect.vue';
</script>

<template>
  <RField v-slot="slotData">
    <RBaseSelect
      v-bind="{
        ...slotData,
        value: [slotData.value],
        onInput: (arr) => slotData.onInput(arr[0])
      }"
    />
  </RField>
</template>
