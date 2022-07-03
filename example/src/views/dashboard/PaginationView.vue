<script setup>
import { ref } from "vue";
import { MPanel, MPagination } from '@rugo-vn/vue';

const skip = ref(0);
</script>

<template>
  <h1 class="mt-4 text-3xl font-semibold">Pagination</h1>

  <MPanel>
    <p class="mb-2">
      Position: <code>{{ skip }}</code>
    </p>

    <MPagination :total="86" v-model="skip" />
  </MPanel>
</template>
