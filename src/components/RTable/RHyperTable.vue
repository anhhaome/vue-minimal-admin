<script setup>
import { computed } from 'vue'

/**
 * Slot syntax:
 * - head(<field>)
 * - cell(<field>) = { value, row }
 * - top(<field>) = { values, rows }
 * - bot(<field>) = { values, rows }
 */
defineProps(['data'])
const slots = defineSlots()

const parseName = (name) => {
  const rel = /^(.*?)\((.*?)\)$/gm.exec(name)

  if (!rel) return null

  return { key: rel[1], value: rel[2] }
}

const slotNames = computed(() => {
  const result = []
  for (const name in slots) result.push(parseName(name))
  return result
})

const fields = computed(() => {
  return slotNames.value.filter(({ key }) => key === 'head').map(({ value }) => value)
})

const isAnyTop = computed(() => {
  return slotNames.value.some(({ key }) => key === 'top')
})

const isAnyBot = computed(() => {
  return slotNames.value.some(({ key }) => key === 'bot')
})
</script>

<template>
  <table class="table table-auto w-full">
    <thead class="bg-gray-50">
      <!-- head -->

      <tr>
        <th
          :class="`border border-gray-200 text-gray-500 uppercase text-xs px-3 py-2 tracking-wider text-left font-semibold head(${name})`"
          v-for="name in fields"
          :key="`head(${name})`"
        >
          <slot :name="`head(${name})`"></slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- top -->

      <tr class="hover:bg-gray-50" v-if="isAnyTop">
        <td
          :class="`border border-b-2 border-gray-200 text-gray-700 px-3 py-2 text-sm top(${name})`"
          v-for="name in fields"
          :key="`top(${name})`"
        >
          <slot :name="`top(${name})`" :values="data.map((row) => row[name])" :rows="data"></slot>
        </td>
      </tr>

      <!-- cell -->

      <tr class="hover:bg-gray-50" v-for="row in data" :key="`row(${row.id})`">
        <td
          :class="`border border-gray-200 text-gray-700 px-3 py-2 text-sm cell(${name})`"
          v-for="name in fields"
          :key="`cell(${name})`"
        >
          <slot :name="`cell(${name})`" :value="row[name]" :row="row">{{ row[name] }}</slot>
        </td>
      </tr>

      <!-- bot -->

      <tr class="hover:bg-gray-50" v-if="isAnyBot">
        <td
          :class="`border border-t-2 border-gray-200 text-gray-700 px-3 py-2 text-sm bot(${name})`"
          v-for="name in fields"
          :key="`bot(${name})`"
        >
          <slot :name="`bot(${name})`" :values="data.map((row) => row[name])" :rows="data"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
