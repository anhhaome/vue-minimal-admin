<script setup>
import { computed, inject, reactive } from "vue";

import MPanel from "../../components/MPanel.vue";
import MTable from "../../components/MTable.vue";
import MCheckbox from "../../components/MCheckbox.vue";
import MDropdown from "../../components/MDropdown.vue";
import MList from "../../components/MList.vue";
import MListItem from "../../components/MListItem.vue";

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

const selected = reactive(new Set());
const toggleAll = (checked) => {
  if (!checked) {
    for (let v of selected) selected.delete(v);
  } else {
    for (let item of data) selected.add(item.name);
  }
};
const toggleSelect = (row, checked) => {
  if (checked) {
    selected.add(row.name);
  } else {
    selected.delete(row.name);
  }
};
const isSelected = (row) => selected.has(row.name);
const isSelectedAll = computed(() => selected.size === data.length);
const isAnySelectedAndNotAll = computed(
  () => selected.size !== 0 && selected.size !== data.length
);
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Table</h1>

  <MPanel>
    <p class="mb-2">
      Value: <code>{{ selected }}</code>
    </p>

    <MTable class="my-table" :data="data">
      <template #beforerow="{ row }">
        <MCheckbox
          v-if="row"
          :modelValue="isSelected(row)"
          @update:modelValue="toggleSelect(row, $event)"
        />
        <MCheckbox
          v-else
          @update:modelValue="toggleAll($event)"
          :modelValue="isSelectedAll"
          :indeterminate="isAnySelectedAndNotAll"
        />
      </template>

      <template #cell(price)="data">
        {{ mUtils.formatCurrency(data.value) }}
      </template>

      <template #cell()="data">
        {{ data.value }}
      </template>

      <template #afterrow="{ row }">
        <MDropdown v-if="row" variant="none" position="right" :autohide="true">
          <MList>
            <MListItem>Show</MListItem>
            <MListItem>Share</MListItem>
            <MListItem>Remove</MListItem>
          </MList>
        </MDropdown>
      </template>
    </MTable>
  </MPanel>
</template>

<style lang="scss">
.my-table {
  th:first-child,
  td:first-child {
    width: 3em;

    > div {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }

  th:last-child,
  td:last-child {
    width: 3em;

    > div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
