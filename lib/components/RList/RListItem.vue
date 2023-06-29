<script setup>
import { countSlot } from '../../utils'
</script>

<template>
  <div class="flex items-center">
    <div v-if="countSlot(['start'], $slots)">
      <slot name="start"> </slot>
    </div>

    <div v-if="countSlot(['default'], $slots)" class="flex-1">
      <slot> </slot>
    </div>

    <div v-if="countSlot(['end'], $slots)">
      <slot name="end"> </slot>
    </div>
  </div>
</template>
