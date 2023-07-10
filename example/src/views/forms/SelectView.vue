<script setup>
import { RHeading, RMultiSelect, RSingleSelect } from '@rugo-vn/vue';
import ComponentViewTemplate from '../../components/ComponentViewTemplate.vue';
import { SAMPLE } from '../../constants.js';
</script>

<template>
  <ComponentViewTemplate title="Select" :components="['RSingleSelect', 'RMultiSelect']">
    <template #row-1>
      <RHeading level="4" class="mb-2">Normal Select</RHeading>

      <p class="mb-4">
        <code>(size = "md") - default</code>
      </p>

      <RSingleSelect label="Single Select" class="mb-4" :options="SAMPLE.countries" />

      <RMultiSelect label="Multi Select" :options="SAMPLE.colors" />
    </template>

    <template #row-2>
      <RHeading level="4" class="mb-2">Large Select</RHeading>

      <p class="mb-4">
        <code>(size = "lg")</code>
      </p>

      <RSingleSelect label="Single Select" size="lg" class="mb-4" :options="SAMPLE.countries" />

      <RMultiSelect label="Multi Select" size="lg" :options="SAMPLE.colors" />
    </template>
  </ComponentViewTemplate>
</template>
