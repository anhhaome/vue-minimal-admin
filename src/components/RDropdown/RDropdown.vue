<script setup>
/**
 * Slot syntax:
 * - activator = { isOpened, open, close, toggle }
 * - default = { isOpened, open, close, toggle }
 */

import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import RButton from '../RButton/RButton.vue'

const props = defineProps({
  disableAutoHide: Boolean,
  enableHover: Boolean,
  margin: Number,
  boxAlign: String
})

const isOpened = ref(false)
const dropdown = ref(null)
const baseDropdown = ref(null)
const floatDropdown = ref(null)

const dropdownStyle = computed(() => {
  const defReturn = {
    display: isOpened.value ? 'block' : 'none'
  }

  if (!baseDropdown.value) return defReturn

  const rootBox = dropdown.value.getBoundingClientRect()
  const baseBox = baseDropdown.value.getBoundingClientRect()

  const top = baseBox.top - rootBox.top + (parseInt(props.margin) || 0)

  if (props.boxAlign === 'auto') {
    nextTick(() => {
      const floatBox = floatDropdown.value.getBoundingClientRect()
      const left = window.innerWidth - baseBox.left - floatBox.width
      floatDropdown.value.style.left = `${Math.min(left, 0)}px`
    })
  }

  return {
    top: `${top}px`,
    ...(props.boxAlign === 'right' ? { right: 0 } : {}),
    ...defReturn
  }
})

const toggle = () => {
  isOpened.value = !isOpened.value
}

const open = () => {
  console.log('do open')
  isOpened.value = true
}

const close = () => {
  isOpened.value = false
}

const isInside = (node, target) => {
  if (!node) return false

  if (node === target) return true

  return isInside(node.parentNode, target)
}

const autoHideDropdown = (e) => {
  if (isInside(e.target, dropdown.value)) {
    return
  }

  isOpened.value = false
}

const enableHoverDropdown = (e) => {
  if (isInside(e.target, dropdown.value)) {
    isOpened.value = true
  } else {
    isOpened.value = false
  }
}

onMounted(() => {
  if (!props.disableAutoHide) window.addEventListener('click', autoHideDropdown)

  if (props.enableHover) window.addEventListener('mousemove', enableHoverDropdown)
})

onUnmounted(() => {
  if (!props.disableAutoHide) window.removeEventListener('click', autoHideDropdown)

  if (props.enableHover) window.removeEventListener('mousemove', enableHoverDropdown)
})

defineExpose({
  isOpened,
  open,
  close,
  toggle
})
</script>

<template>
  <div ref="dropdown" class="r-dropdown inline-block relative text-sm">
    <slot
      name="activator"
      :isOpened="isOpened"
      :open="() => (isOpened = true)"
      :close="() => (isOpened = false)"
      :toggle="toggle"
    >
      <RButton type="button" @click="toggle">Toggle Dropdown</RButton>
    </slot>

    <div
      ref="baseDropdown"
      class="absolute"
      :style="{ width: '100%', height: (margin || 0) + 'px' }"
    ></div>

    <div
      ref="floatDropdown"
      class="content bg-white drop-shadow-md border border-gray-300 rounded-md absolute z-10 overflow-hidden w-fit"
      :style="dropdownStyle"
    >
      <slot
        :isOpened="isOpened"
        :open="() => (isOpened = true)"
        :close="() => (isOpened = false)"
        :toggle="toggle"
      ></slot>
    </div>
  </div>
</template>

<style></style>
