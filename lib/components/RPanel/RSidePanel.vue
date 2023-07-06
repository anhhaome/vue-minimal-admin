<script setup>
import { RouterLink } from 'vue-router';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';
import * as Icons from '@heroicons/vue/24/outline';
import RListItem from '../RList/RListItem.vue';
import RTree from '../RTree/RTree.vue';

defineProps({
  navs: { type: Array, default: [] } // { title, icon, action, children }
});

const handleAction = (action, node) => {
  if (typeof action !== 'function') return;

  action(node);
};
</script>

<template>
  <div class="r-side-panel bg-white w-full h-full border py-4">
    <RTree :data="navs" v-slot="{ node, toggle, isOpened, level }">
      <component
        :is="
          typeof node.action === 'function' || node.children
            ? 'button'
            : typeof node.action === 'string'
            ? RouterLink
            : 'div'
        "
        :to="node.action"
        @click="handleAction(node.children ? toggle : node.action, node)"
        class="w-full text-left"
      >
        <RListItem
          :class="
            (!node.action && !node.children
              ? 'text-sm font-bold tracking-wider uppercase text-gray-500'
              : 'hover:bg-gray-200') +
            ' ' +
            (node.active ? 'bg-gray-100' : '') +
            ' px-4'
          "
        >
          <template #start>
            <div
              v-if="level"
              :style="{ width: level * 16 + 8 + 'px' }"
              class="h-9 relative after:bg-gray-300 after:w-[2px] after:h-9 after:absolute after:right-3.5"
            ></div>
            <component v-if="node.icon" :is="Icons[node.icon]" class="w-4 h-4 stroke-2 mr-2" />
          </template>

          <template v-if="node.children" #end>
            <ChevronUpIcon v-if="isOpened" class="w-3.5 h-3.5 stroke-2" />
            <ChevronDownIcon v-else class="w-3.5 h-3.5 stroke-2" />
          </template>

          {{ node.title }}
        </RListItem>
      </component>
    </RTree>
  </div>
</template>
