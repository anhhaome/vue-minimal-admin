<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import { RButton, RHeading, RPanel } from '@rugo-vn/vue';
</script>
<template>
  <div>
    <div class="flex justify-between">
      <div>
        <RHeading class="mb-2">Welcome to Rugoe</RHeading>
        <p class="mb-4">Essential UI for web development</p>
      </div>

      <RButton is="a" variant="primary" href="https://github.com/rugo-vn/vue" target="_blank">
        Go to Github Repository
        <ArrowRightIcon class="w-4 stroke-2 ml-2" />
      </RButton>
    </div>

    <RPanel></RPanel>
  </div>
</template>
