<script setup>
import RField from '../RHelper/RField.vue';
import RBaseInput from './RBaseInput.vue';
</script>

<template>
  <RField v-slot="slotData">
    <RBaseInput v-bind="slotData">
      <template v-for="name in Object.keys($slots)" #[name]="childSlotData">
        <slot :name="name" v-bind="childSlotData"></slot>
      </template>
    </RBaseInput>
  </RField>
</template>
