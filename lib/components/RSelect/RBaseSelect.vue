<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { ChevronDownIcon, XMarkIcon, CheckIcon } from '@heroicons/vue/24/outline';
import { equals, flatten, pipe, prop, uniq, uniqBy, uniqWith } from 'ramda';
import RBaseInput from '../RInput/RBaseInput.vue';
import RBaseDropdown from '../RDropdown/RBaseDropdown.vue';
import { INPUT_SIZES } from '../../constants';
import RButton from '../RButton/RButton.vue';

const props = defineProps({
  name: { type: String },
  labelRef: { type: String },
  size: { type: String, default: 'md' },
  placeholder: { type: String },
  value: { type: Array },
  onInput: { type: Function },
  onBlur: { type: Function },
  isMultiple: { type: Boolean, default: false },
  options: {
    type: Array,
    required: true
  }
});

const SELECTION_STYLES = {
  md: 'h-6 p-1.5',
  lg: 'h-8 p-2'
};

const MARGIN_STYLES = {
  md: 'ml-1.5',
  lg: 'ml-2',
  'md-r': 'mr-1.5',
  'lg-r': 'mr-1.5'
};

const bindProps = computed(() => ({
  name: props.name,
  labelRef: props.labelRef,
  size: props.size
}));

const isFocus = ref(false);
const searchInput = ref(null);
const searchText = ref('');
const selectedList = reactive([]);
const selectionCursor = ref(0);

const computedOptions = computed(() => {
  const data = flatten([props.options || [], props.value || []])
    .filter((i) => i)
    .map((item) =>
      typeof item === 'string'
        ? { value: item, text: item }
        : { value: item.value || item.text, text: item.text || item.value }
    );

  return uniqBy(prop('value'))(data);
});

const filteredOptions = computed(() =>
  computedOptions.value
    .map((item) => ({ ...item, __plainText: Object.values(item).join(' ') }))
    .filter(
      ({ __plainText }) => __plainText.toLowerCase().indexOf(searchText.value.toLowerCase()) !== -1
    )
    .map((item) => {
      delete item.__plainText;
      return item;
    })
);

const restoreSearchText = () => {
  if (props.isMultiple) {
    searchText.value = '';
  } else {
    searchText.value = selectedList[0]?.text;
  }
};

const onFocus = () => {
  isFocus.value = true;
  searchText.value = '';
};

const onBlur = () => {
  isFocus.value = false;
  restoreSearchText();
  props.onBlur();
};

const updateValue = () => {
  props.onInput(selectedList.map(({ value }) => value));
};

const removeAllSelected = () => {
  while (selectedList.length) selectedList.shift();
};

const isSelected = (item) => selectedList.some((currentItem) => currentItem.value === item.value);

const selectItem = (item) => {
  if (!isSelected(item)) {
    if (!props.isMultiple) removeAllSelected();

    selectedList.push(item);
    updateValue();
  }

  if (!props.isMultiple) {
    searchInput.value.blur();
  }

  restoreSearchText();
};

const removeItem = (item) => {
  let i = 0;
  while (i < selectedList.length) {
    if (selectedList[i].value !== item.value) {
      i++;
      continue;
    }

    selectedList.splice(i, 1);
  }

  updateValue();
  restoreSearchText();
};

const doEnter = (e) => {
  e.preventDefault();
  if (filteredOptions.value.length === 0) return;

  const item = filteredOptions.value[selectionCursor.value];
  if (isSelected(item)) removeItem(item);
  else selectItem(item);
};

const initValue = () => {
  removeAllSelected();

  for (const item of computedOptions.value) {
    if ((props.value || []).indexOf(item.value) !== -1) selectedList.push(item);
  }

  restoreSearchText();
};

initValue();
watch(
  () => props.value,
  () => {
    if (
      !equals(
        props.value,
        selectedList.map(({ value }) => value)
      )
    )
      initValue();
  }
);
</script>

<template>
  <div class="r-select" @focusin="onFocus" @focusout="onBlur">
    <RBaseInput
      ref="searchInput"
      v-bind="bindProps"
      :placeholder="isMultiple ? 'Select...' : selectedList[0]?.text || 'Select...'"
      :value="searchText"
      :onInput="(value) => (searchText = value)"
      @keydown.enter="doEnter"
    >
      <template #start>
        <div
          v-for="item of isMultiple ? selectedList : []"
          :key="item.value"
          :class="`bg-gray-200 flex items-center rounded first:ml-0 ${
            SELECTION_STYLES[bindProps.size]
          } ${MARGIN_STYLES[bindProps.size]}`"
        >
          <span>
            {{ item.text }}
          </span>
          <button
            type="button"
            tabindex="-1"
            disable-toggle-focus
            :class="`${MARGIN_STYLES[bindProps.size]}`"
            @click="removeItem(item)"
          >
            <XMarkIcon class="w-3.5 h-3.5 stroke-2 pointer-events-none" />
          </button>
        </div>
      </template>

      <template #end>
        <button
          v-if="selectedList.length > 0"
          type="button"
          tabindex="-1"
          disable-toggle-focus
          :class="`${MARGIN_STYLES[bindProps.size + '-r']}`"
          @mousedown="
            () => {
              removeAllSelected();
              updateValue();
            }
          "
        >
          <XMarkIcon class="w-4 h-4 stroke-2 pointer-events-none" />
        </button>

        <ChevronDownIcon
          :class="`w-4 h-4 stroke-2 shrink-0 ${
            selectedList.length > 0 ? MARGIN_STYLES[bindProps.size] : ''
          } ${MARGIN_STYLES[bindProps.size + '-r']}`"
        />
      </template>
    </RBaseInput>

    <RBaseDropdown v-if="isFocus" :size="bindProps.size">
      <RButton
        class="r-select__option"
        v-for="item of filteredOptions"
        type="button"
        variant="none"
        tabindex="-1"
        :key="item.value"
        :size="bindProps.size"
        @click="isSelected(item) ? removeItem(item) : selectItem(item)"
      >
        <span class="flex-1">
          {{ item.text }}
        </span>
        <CheckIcon v-if="isSelected(item)" class="w-3.5 h-3.5 stroke-2" />
      </RButton>
    </RBaseDropdown>
  </div>
</template>

<style>
.r-select__option {
  @apply font-normal border text-left w-full rounded-none;
}

.r-select__option:first-child {
  @apply rounded-t;
}

.r-select__option:last-child {
  @apply rounded-b;
}
</style>
