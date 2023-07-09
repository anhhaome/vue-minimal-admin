<script setup>
import { computed, reactive } from 'vue';
import { generateId } from '../../utils';
import RTreeLoader from './RTreeLoader.vue';

const props = defineProps({
  data: { type: Array, default: [] }, // { id, active, children }
  level: { type: Number, default: 0 }
});

const isAnyActive = (data = []) => {
  return data.some((item) => item.active || isAnyActive(item.children));
};

const identifiedData = computed(() => {
  return props.data.map((node) =>
    reactive({
      id: node.id || generateId(),
      node,
      active: node.active || isAnyActive(node.children),
      children: node.children
    })
  );
});
</script>

<template>
  <div class="r-tree" v-for="item of identifiedData" :key="item.id">
    <slot
      :node="item.node"
      :level="level"
      :isOpened="item.active"
      :open="() => (item.active = true)"
      :close="() => (item.active = false)"
      :toggle="() => (item.active = !item.active)"
    ></slot>

    <RTreeLoader
      v-if="item.children?.length && item.active"
      :data="item.children"
      :level="level + 1"
      v-slot="slotData"
    >
      <slot v-bind="slotData"></slot>
    </RTreeLoader>
  </div>
</template>
