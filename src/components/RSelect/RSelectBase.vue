<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { ChevronDownIcon, XMarkIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { equals, flatten, pipe, uniq } from 'ramda'

const props = defineProps({
  name: { type: String, required: true },
  labelRef: { type: String },
  isMultiple: { type: Boolean, default: false },
  value: { type: Array },
  options: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['input'])

const isFocus = ref(false)
const searchInput = ref(null)
const searchText = ref('')
const selectedList = reactive([])
const selectionCursor = ref(0)

const computedOptions = computed(() =>
  pipe(
    flatten,
    uniq
  )([props.options || [], props.value || []])
    .filter((i) => i)
    .map((item) =>
      typeof item === 'string'
        ? { value: item, text: item }
        : { value: item.value || item.text, text: item.text || item.value }
    )
)

const filteredOptions = computed(() =>
  computedOptions.value
    .map((item) => ({ ...item, __plainText: Object.values(item).join(' ') }))
    .filter(
      ({ __plainText }) => __plainText.toLowerCase().indexOf(searchText.value.toLowerCase()) !== -1
    )
    .map((item) => {
      delete item.__plainText
      return item
    })
)

const restoreSearchText = () => {
  if (props.isMultiple) return (searchText.value = '')

  searchText.value = selectedList[0]?.text || ''
}

const onFocus = () => {
  isFocus.value = true
}

const onBlur = () => {
  isFocus.value = false
  restoreSearchText()
}

const updateValue = () => {
  emit(
    'input',
    selectedList.map(({ value }) => value)
  )
}

const toggleFocus = (e) => {
  if (e.target === searchInput.value) return

  e.preventDefault()

  if (e.target.getAttribute('disable-toggle-focus') !== null) return

  if (isFocus.value) {
    searchInput.value.blur()
  } else {
    searchInput.value.focus()
  }
}

const removeAllSelected = () => {
  // without save
  while (selectedList.length) selectedList.shift()
}

const isSelected = (item) => selectedList.some((currentItem) => currentItem.value === item.value)

const selectItem = (item) => {
  if (!isSelected(item)) {
    if (!props.isMultiple) removeAllSelected()

    selectedList.push(item)
    updateValue()
  }

  if (!props.isMultiple) {
    searchInput.value.blur()
  }

  restoreSearchText()
}

const removeItem = (item) => {
  let i = 0
  while (i < selectedList.length) {
    if (selectedList[i].value !== item.value) {
      i++
      continue
    }

    selectedList.splice(i, 1)
  }

  updateValue()
  restoreSearchText()
}

const doEnter = (e) => {
  e.preventDefault()
  if (filteredOptions.value.length === 0) return

  const item = filteredOptions.value[selectionCursor.value]
  if (isSelected(item)) removeItem(item)
  else selectItem(item)
}

const preventDefault = (e) => e.preventDefault()

const initValue = () => {
  removeAllSelected()

  for (const item of computedOptions.value) {
    if ((props.value || []).indexOf(item.value) !== -1) selectedList.push(item)
  }

  restoreSearchText()
}

initValue()
watch(
  () => props.value,
  () => {
    if (
      !equals(
        props.value,
        selectedList.map(({ value }) => value)
      )
    )
      initValue()
  }
)
</script>

<template>
  <div class="r-select-base text-sm" @focusin="onFocus" @focusout="onBlur">
    <div
      class="flex items-center w-full p-1.5 border bg-white rounded-md border-gray-300 focus-within:border-primary-600 focus-within:outline focus-within:-outline-offset-2 focus-within:outline-2 focus-within:outline-primary-600"
      @mousedown="toggleFocus"
    >
      <div class="flex-1 flex flex-wrap items-center">
        <div
          v-for="item of isMultiple ? selectedList : []"
          :key="item.value"
          class="px-1.5 bg-gray-100 h-[1.875rem] inline-flex items-center rounded-md ml-1.5 first:ml-0"
        >
          <span>
            {{ item.text }}
          </span>
          <button
            type="button"
            class="ml-1.5 hover:text-gray-800"
            @click="removeItem(item)"
            tabindex="-1"
            disable-toggle-focus
          >
            <XMarkIcon class="w-3.5 h-3.5 stroke-[3] pointer-events-none" />
          </button>
        </div>

        <div class="flex-1 min-w-[10rem]">
          <input
            :id="labelRef || name"
            autocomplete="false"
            spellcheck="false"
            ref="searchInput"
            disable-toggle-focus
            class="outline-none bg-transparent w-full px-1.5 h-[1.875rem]"
            v-model="searchText"
            @keydown.enter="doEnter"
          />
        </div>
      </div>

      <button
        v-if="selectedList.length"
        type="button"
        class="px-1.5 hover:text-gray-800"
        @click="
          () => {
            removeAllSelected()
            updateValue()
          }
        "
        tabindex="-1"
        disable-toggle-focus
      >
        <XMarkIcon class="w-3.5 h-3.5 stroke-[3] pointer-events-none" />
      </button>

      <button type="button" class="px-1.5 hover:text-gray-800" tabindex="-1">
        <ChevronDownIcon class="w-3.5 h-3.5 stroke-[3]" />
      </button>
    </div>

    <div v-if="isFocus" class="relative" @mousedown="preventDefault">
      <div class="select-list-dropdown absolute top-2 left-0 w-full max-h-64 overflow-y-auto">
        <button
          :class="
            `hover:bg-gray-100 w-full text-left px-3 py-2 rounded-md flex items-center ` +
            (isSelected(item) ? 'bg-gray-100' : '')
          "
          v-for="item of filteredOptions"
          type="button"
          :key="item.value"
          @click="isSelected(item) ? removeItem(item) : selectItem(item)"
          tabindex="-1"
        >
          <span class="flex-1">
            {{ item.text }}
          </span>
          <CheckIcon v-if="isSelected(item)" class="w-3.5 h-3.5 stroke-[3]" />
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.r-select-base .select-list-dropdown {
  @apply bg-white rounded-md p-1.5;
  box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 0px 0px 1px rgba(0, 0, 0, 0.05);
}
</style>
