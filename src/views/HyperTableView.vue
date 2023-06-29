<script setup>
import { RPanel, RHyperTable } from '../../lib/index.js';

const data = [
  {
    id: 1,
    name: 'Alpha',
    age: 12,
    salary: 1000
  },
  {
    id: 2,
    name: 'Beta',
    age: 6,
    salary: 7800
  }
];

function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN', {}).format(value);
}
</script>

<template>
  <RPanel>
    <RHyperTable class="sample-hyper-table" :data="data">
      <!-- head -->
      <template #head(name)> Name </template>

      <template #head(age)>
        <div class="text-center">Age</div>
      </template>

      <template #head(salary)>
        <div class="text-right">Salary</div>
      </template>
      <!-- end head -->

      <!-- cell -->
      <template #cell(age)="{ value }">
        <div class="text-center">{{ value }}</div>
      </template>

      <template #cell(salary)="{ value }">
        <div class="text-right font-mono text-xs">{{ formatCurrency(value) }} đ</div>
      </template>
      <!-- end cell -->

      <!-- top/bot -->
      <template #top(name)>
        <div class="font-semibold">Total</div>
      </template>

      <template #top(salary)="{ values }">
        <div class="text-right font-semibold font-mono text-xs">
          {{ formatCurrency(values.reduce((t, c) => t + c, 0)) }} đ
        </div></template
      >

      <template #bot(name)>
        <div class="font-semibold">Total</div>
      </template>

      <template #bot(salary)="{ values }">
        <div class="text-right font-semibold font-mono text-xs">
          {{ formatCurrency(values.reduce((t, c) => t + c, 0)) }} đ
        </div></template
      >
      <!-- end top/bot -->
    </RHyperTable>
  </RPanel>
</template>

<style>
.sample-hyper-table .head\(age\) {
  width: 120px;
}

.sample-hyper-table .head\(salary\) {
  width: 120px;
}
</style>
