<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'
import * as Icons from '@heroicons/vue/24/outline'
import { countSlot } from '../../utils'
import RTree from '../RTree/RTree.vue'
import RListItem from '../RList/RListItem.vue'
import { reactive, watch } from 'vue'

/**
 * data structure:
 * ```js
 * data = [
 *   { text: "", icon: "", active: true|false, action: "", children: [] }
 * ]
 * ```
 */

const props = defineProps(['data'])

const route = useRoute()
const navs = reactive(props.data)

const handleAction = (action, node) => {
  if (typeof action !== 'function') return

  action(node)
}

const deactive = (data = []) => {
  for (const item of data) {
    item.active = false
    deactive(item.children)
  }
}

const active = (data = []) => {
  for (const item of data) {
    if (item.action === route.path) item.active = true

    active(item.children)
  }
}

const updateActive = () => {
  deactive(navs)
  active(navs)
}

watch(() => route.path, updateActive)
</script>

<template>
  <div class="r-side-nav-panel bg-white border-r h-screen w-80 min-w-[20rem] top-0 sticky">
    <div v-if="countSlot(['header'], $slots)" class="h-16 px-6 flex items-center">
      <slot name="header"></slot>
    </div>

    <div
      :class="
        (countSlot(['header', 'footer'], $slots) === 1
          ? 'h-[calc(100vh-4rem)]'
          : countSlot(['header', 'footer'], $slots) === 2
          ? 'h-[calc(100vh-8rem)]'
          : 'h-screen') + ' overflow-y-scroll pr-4'
      "
    >
      <RTree :data="navs" v-slot="{ node, toggle, isOpened }">
        <component
          :is="
            typeof node.action === 'function' || node.children
              ? 'button'
              : typeof node.action === 'string'
              ? RouterLink
              : 'div'
          "
          :to="typeof node.action === 'string' ? node.action : ''"
          @click="handleAction(node.children ? toggle : node.action, node)"
          class="w-full text-left text-sm font-semibold"
        >
          <RListItem
            :class="
              (!node.action && !node.children
                ? 'uppercase text-gray-500'
                : 'text-gray-600 hover:bg-gray-100') +
              (node.active ? ' bg-gray-200 hover:bg-gray-200' : '') +
              ' px-3 mb-2 h-10 rounded-md'
            "
          >
            <template v-if="node.icon" #start>
              <component :is="Icons[node.icon]" class="w-6 h-6 mr-2" />
            </template>

            <template v-if="node.children" #end>
              <ChevronUpIcon v-if="isOpened" class="w-3.5 h-3.5 stroke-[3]" />
              <ChevronDownIcon v-else class="w-3.5 h-3.5 stroke-[3]" />
            </template>

            {{ node.title }}
          </RListItem>
        </component>
      </RTree>
    </div>

    <div v-if="countSlot(['footer'], $slots)" class="h-16 px-6 flex items-center">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style>
.r-side-nav-panel .r-tree {
  @apply pl-4;
}
</style>
