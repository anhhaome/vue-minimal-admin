<script setup>
import { inject } from "vue";

import MPanel from "../../components/MPanel.vue";
import MTable from "../../components/MTable.vue";

const mUtils = inject("mutils");

const data = [
  {
    name: 'Apple MacBook Pro 17"',
    color: "Sliver",
    category: "Laptop",
    price: "2999",
  },
  {
    name: 'Apple Imac 27"',
    color: "White",
    category: "Desktop Pc",
    price: "1999",
  },
  {
    name: "Apple Magic Mouse 2",
    color: "White",
    category: "Accessories",
    price: "99",
  },
];
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Table</h1>

  <MPanel>
    <MTable :data="data">
      <template #cell(price)="data">
        {{ mUtils.formatCurrency(data.value) }}
      </template>

      <template #cell()="data">
        {{ data.value }}
      </template>
    </MTable>
  </MPanel>
</template>
