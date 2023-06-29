<script setup>
import { computed, reactive } from 'vue'
import { generateId } from '../../utils'
import RTreeLoader from './RTreeLoader.vue'

/**
 * data structure:
 * ```js
 * data = [
 *   { id: "", active: true|false, children: []}
 * ]
 * ```
 */

const props = defineProps(['data'])

const isAnyActive = (data = []) => {
  return data.some((item) => item.active || isAnyActive(item.children))
}

const identifiedData = computed(() => {
  return props.data.map((node) =>
    reactive({
      id: node.id || generateId(),
      node,
      active: node.active || isAnyActive(node.children),
      children: node.children
    })
  )
})

// const isAnyActive = data => {
//   return data.some(item => item.active || isAnyActive(item.children || []))
// }

// const currentData = computed(
//   () =>
//     props.data
//       ?.filter((node) => node.parent === props.parent)
//       ?.map((node) => {
//         const children = props.data.filter((childNode) => node.id === childNode.parent)
//         return reactive({
//           id: node.id,
//           node,
//           active: node.active || isChildrenActive(children),
//           children
//         })
//       }) || []
// )
</script>

<template>
  <div class="r-tree" v-for="item of identifiedData" :key="item.id">
    <slot
      :node="item.node"
      :isOpened="item.active"
      :open="() => (item.active = true)"
      :close="() => (item.active = false)"
      :toggle="() => (item.active = !item.active)"
    ></slot>

    <RTreeLoader
      v-if="item.children?.length && item.active"
      :data="item.children"
      v-slot="slotData"
    >
      <slot v-bind="slotData"></slot>
    </RTreeLoader>
  </div>
</template>
