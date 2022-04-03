<script setup>
import { ref, watch } from "vue";

const props = defineProps(["data", "labels"]);
const localLables = ref([]);

const reloadLabels = () => {
  if (props.labels) return (localLables.value = props.labels);

  const s = new Set();
  for (let item of props.data) {
    for (let name in item) {
      s.add(name);
    }
  }

  localLables.value = Array.from(s);
};

const formatLabel = (label) => {
  return label
    .split(/(?=[A-Z])/)
    .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.substr(1) : ""))
    .join(" ");
};

const hasSlot = (name, slots) => {
  for (let slot in slots) {
    if (slot.indexOf(name) === 0) return true;
  }

  return false;
};

watch(() => props.data, reloadLabels);
watch(() => props.labels, reloadLabels);

reloadLabels();
</script>

<template>
  <table class="m-table table-fixed w-full">
    <thead class="bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
      <th v-if="hasSlot('beforerow', $slots)" class="beforerow">
        <slot name="beforerow" v-bind="{ row: null }"></slot>
      </th>

      <th
        :class="`head-${label} py-2 px-4 font-normal text-xs text-left uppercase`"
        v-for="label in localLables"
        :key="`head-${label}`"
      >
        <slot :name="`head(${label})`" v-bind="{ label }">
          <slot :name="`head()`" v-bind="{ label }">
            {{ formatLabel(label) }}
          </slot>
        </slot>
      </th>

      <th v-if="hasSlot('afterrow', $slots)" class="afterrow">
        <slot name="afterrow" v-bind="{ row: null }"></slot>
      </th>
    </thead>
    <tbody>
      <!-- top cell -->
      <tr
        class="border-b dark:border-gray-700"
        v-if="hasSlot('topcell', $slots)"
      >
        <td v-if="hasSlot('beforerow', $slots)" class="beforerow">
          <slot name="beforerow" v-bind="{ row: null }"></slot>
        </td>

        <td
          :class="`topcell-${label} py-2 px-4`"
          v-for="label in localLables"
          :key="`topcell-${label}`"
        >
          <slot :name="`topcell(${label})`" v-bind="{ label }">
            <slot :name="`topcell()`" v-bind="{ label }"></slot>
          </slot>
        </td>

        <td v-if="hasSlot('afterrow', $slots)" class="afterrow">
          <slot name="afterrow" v-bind="{ row: null }"></slot>
        </td>
      </tr>

      <!-- body cell -->
      <tr class="border-b dark:border-gray-700" v-for="row of props.data">
        <td v-if="hasSlot('beforerow', $slots)" class="beforerow">
          <slot name="beforerow" v-bind="{ row }"></slot>
        </td>

        <td :class="`cell-${label} py-2 px-4`" v-for="label in localLables">
          <slot :name="`cell(${label})`" v-bind="{ label, value: row[label], row }">
            <slot :name="`cell()`" v-bind="{ label, value: row[label], row }">
              {{ row[label] }}
            </slot>
          </slot>
        </td>

        <td v-if="hasSlot('afterrow', $slots)" class="afterrow">
          <slot name="afterrow" v-bind="{ row }"></slot>
        </td>
      </tr>

      <!-- bottom cell -->
      <tr
        class="border-b dark:border-gray-700"
        v-if="hasSlot('bottomcell', $slots)"
      >
        <td v-if="hasSlot('beforerow', $slots)" class="beforerow">
          <slot name="beforerow" v-bind="{ row: null }"></slot>
        </td>

        <td
          :class="`bottomcell-${label} py-2 px-4`"
          v-for="label in localLables"
          :key="`bottomcell-${label}`"
        >
          <slot :name="`bottomcell(${label})`" v-bind="{ label }">
            <slot :name="`bottomcell()`" v-bind="{ label }"></slot>
          </slot>
        </td>

        <td v-if="hasSlot('afterrow', $slots)" class="afterrow">
          <slot name="afterrow" v-bind="{ row: null }"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
