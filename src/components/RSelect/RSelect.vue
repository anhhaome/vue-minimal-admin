<script setup>
import { ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import RAutoWidthInput from '../RInput/RAutoWidthInput.vue'
import RDropdown from '../RDropdown/RDropdown.vue'

const searchRef = ref(null)
const dropdownRef = ref(null)
const isFocus = ref(false)

const onFocus = () => {
  searchRef.value.focus()
  dropdownRef.value.open()
  isFocus.value = true
}

const onBlur = () => {
  isFocus.value = false
}
</script>

<template>
  <div
    @click="onFocus"
    :class="
      'r-select border border-gray-300 rounded-md w-full leading-5 text-sm' +
      (isFocus ? 'outline outline-1 outline-primary-600 border-primary-600' : '') +
      ' w-full'
    "
  >
    <RDropdown ref="dropdownRef" class="w-full" :margin="5">
      <template #activator>
        <div class="flex flex-wrap items-center p-[7px]">
          <div class="bg-gray-100 rounded font-semibold mr-1 flex items-center text-">
            <div class="pl-2 pr-1 py-1">Tag 1</div>
            <button type="button" class="pl-1 pr-2 py-1 hover:text-gray-800">
              <XMarkIcon class="w-3 h-3 stroke-[3]" />
            </button>
          </div>
          <RAutoWidthInput ref="searchRef" @blur="onBlur" />
        </div>
      </template>

      Something in content
    </RDropdown>
  </div>
</template>

<style>
.r-select .r-dropdown .content {
  width: 100%;
}
</style>
