<script setup>
import { RouterLink } from 'vue-router';
import RButton from '../RButton/RButton.vue';
import RLogo from '../RLogo/RLogo.vue';

defineProps({
  navs: { type: Array, default: [] } // ex: { title, action, active }
});
</script>

<template>
  <div class="w-full h-[54px] bg-white shadow-md px-3 flex items-center">
    <div class="p-2">
      <slot name="logo"><RLogo class="h-6" /></slot>
    </div>

    <div class="px-2">
      <RButton
        v-for="nav in navs"
        :key="nav.title"
        :class="`ml-1 first:ml-0 px-4 rounded-full ${
          nav.active ? 'bg-[black!important] text-white hover:bg-black' : ''
        }`"
        :is="typeof nav.action === 'string' ? RouterLink : undefined"
        :to="nav.action"
        variant="none"
      >
        {{ nav.title }}
      </RButton>
    </div>
  </div>
</template>
