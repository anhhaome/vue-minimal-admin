<script setup>
import { ref } from 'vue';
import { RHeading, RPanel, RSingleSelect } from '../../../lib/index.js';
import { SAMPLE } from '../../constants.js';

const singleSelectRef = ref('');
const showAlert = alert;
</script>

<template>
  <RPanel>
    <RHeading class="mb-10" level="2">Select</RHeading>

    <RHeading class="mb-7" level="4">Single Select</RHeading>

    <RSingleSelect v-model="singleSelectRef" :options="SAMPLE.countries" @input="showAlert" />

    <div class="mt-3 mb-7">You are selecting: {{ singleSelectRef }}</div>
  </RPanel>
</template>
