<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps(['data', 'labels']);
const emit = defineEmits(['select']);

const maxColValue = computed(() => {
  return Math.max(...props.data.map((row) => row.length));
});

const maxCols = computed(() => {
  const value = maxColValue.value;
  const res = [];
  for (let i = 0; i < value; i++) res.push(i);
  return res;
});

const startSelected = ref();
const endSelected = ref();
const isDraging = ref(false);

const isInRange = (r, c) => {
  if (!startSelected.value || !endSelected.value) return false;

  const startRange =
    toIndex(...endSelected.value) < toIndex(...startSelected.value)
      ? endSelected.value
      : startSelected.value;

  const endRange =
    toIndex(...endSelected.value) < toIndex(...startSelected.value)
      ? startSelected.value
      : endSelected.value;

  if (r < startRange[0]) return false;

  if (r > endRange[0]) return false;

  if (r === startRange[0] && c < startRange[1]) return false;

  if (r === endRange[0] && c > endRange[1]) return false;

  return true;
};

const toIndex = (r, c) => {
  return r * maxColValue.value + c;
};

const mousedown = (r, c) => {
  startSelected.value = [r, c];
  endSelected.value = [r, c];

  isDraging.value = true;
};

const mousemove = (r, c) => {
  if (!isDraging.value) return;

  if (toIndex(r, c) === toIndex(...endSelected.value)) return;

  endSelected.value = [r, c];
};

const windowEndDrag = () => {
  if (!isDraging.value) return;

  isDraging.value = false;
  const selections = [];
  for (let r = 0; r < props.data.length; r++) {
    for (let c = 0; c < props.data[r].length; c++) {
      if (isInRange(r, c)) selections.push(props.data[r][c]);
    }
  }
  emit('select', selections);
};

onMounted(() => {
  window.addEventListener('mouseup', windowEndDrag);
});

onUnmounted(() => {
  window.removeEventListener('mouseup', windowEndDrag);
});
</script>

<template>
  <div
    v-if="data"
    class="r-grid-map flex select-none"
  >
    <div
      v-if="labels?.left"
      :class="`${labels?.top ? 'mt-[2em]' : ''} flex flex-col`"
    >
      <div
        v-for="(_, index) of data"
        :key="`left-${index}`"
        class="h-[1em] mx-[1em] flex items-center"
      >
        <span class="text-[.8em]">
          {{ labels.left(index) }}
        </span>
      </div>
    </div>

    <div>
      <div
        v-if="labels?.top"
        class="flex h-[2em]"
      >
        <div
          v-for="index of maxCols"
          :key="`top-${index}`"
          class="w-[1em]"
        >
          <span class="text-[.8em]">
            {{ labels.top(index) }}
          </span>
        </div>
      </div>

      <div
        v-for="(row, rindex) of data"
        :key="`row-${rindex}`"
        class="flex"
      >
        <div
          v-for="(cell, cindex) of row"
          :key="`cell-${cindex}`"
          :class="`cell ${isInRange(rindex, cindex) ? 'selected' : ''}`"
          @mousedown="() => mousedown(rindex, cindex)"
          @mousemove="() => mousemove(rindex, cindex)"
        >
          <div
            class="inner"
            :style="{
              backgroundColor: cell?.color || '',
            }"
          ></div>
        </div>
      </div>

      <div
        v-if="labels?.bottom"
        class="flex items-end h-[2em]"
      >
        <div
          v-for="index of maxCols"
          :key="`bottom-${index}`"
          class="w-[1em]"
        >
          <span class="text-[.8em]">
            {{ labels.bottom(index) }}
          </span>
        </div>
      </div>
    </div>

    <div
      v-if="labels?.right"
      :class="`${labels?.top ? 'mt-[2em]' : ''} flex flex-col`"
    >
      <div
        v-for="(_, index) of data"
        :key="`right-${index}`"
        class="h-[1em] mx-[1em] flex items-center"
      >
        <span class="text-[.8em]">
          {{ labels.right(index) }}
        </span>
      </div>
    </div>
  </div>
</template>
