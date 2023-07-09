<script setup>
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { RHeading, RInput } from '../../../lib/index.js';
import ComponentViewTemplate from '../../components/ComponentViewTemplate.vue';
</script>

<template>
  <ComponentViewTemplate title="Input" :components="['RInput']">
    <template #row-1>
      <RHeading level="4" class="mb-2">Normal Input</RHeading>

      <p class="mb-4">
        <code>(size = "md") - default</code>
      </p>

      <RInput class="mb-4" label="Simple Input" placeholder="Enter something" />

      <RInput label="Input with slots" placeholder="Enter something">
        <template #start>
          <MagnifyingGlassIcon class="w-4 h-4 storke-2" />
        </template>

        <template #end>
          <BellIcon class="w-4 h-4 storke-2" />
        </template>
      </RInput>
    </template>

    <template #row-2>
      <RHeading level="4" class="mb-2">Large Input</RHeading>

      <p class="mb-4">
        <code>(size = "lg")</code>
      </p>

      <RInput class="mb-4" label="Simple Input" size="lg" placeholder="Enter something" />

      <RInput label="Input with slots" size="lg" placeholder="Enter something">
        <template #start>
          <MagnifyingGlassIcon class="w-5 h-5 stroke-2" />
        </template>

        <template #end>
          <BellIcon class="w-5 h-5 stroke-2" />
        </template>
      </RInput>
    </template>
  </ComponentViewTemplate>
</template>
