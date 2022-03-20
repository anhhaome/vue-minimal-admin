<script setup>
import MPanel from "../../components/MPanel.vue";
import MPagination from "../../components/MPagination.vue";
import { ref } from "vue";

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
