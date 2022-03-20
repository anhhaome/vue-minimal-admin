<script setup>
import { computed, ref } from "vue";
import MButton from "./MButton.vue";

const SKIP_PADDING = 2;

const props = defineProps(["total", "modelValue", "limit"]);
const emit = defineEmits(["update:modelValue"]);

const maxPage = computed(() => {
  const total = props.total || 0;
  const limit = props.limit || 10;

  return Math.floor(total / limit) + (total % limit === 0 ? 0 : 1);
});

const currentPage = computed(() => {
  const limit = props.limit || 10;
  const skip = props.modelValue || 0;

  return Math.floor(skip / limit);
});

const pages = computed(() => {
  const result = [];

  const previous = currentPage.value;
  const latter = maxPage.value - currentPage.value - 1;

  const prePoint =
    currentPage.value - SKIP_PADDING - Math.max(SKIP_PADDING - latter, 0);
  const latPoint =
    currentPage.value + SKIP_PADDING + Math.max(SKIP_PADDING - previous, 0);

  for (let i = 0; i < maxPage.value; i++) {
    if (i === prePoint) {
      result.push({
        index: i,
        text: "...",
        to: Math.floor(currentPage.value / 2),
      });
      continue;
    }

    if (i === latPoint) {
      result.push({
        index: i,
        text: "...",
        to:
          currentPage.value +
          Math.floor((maxPage.value - currentPage.value - 1) / 2),
      });
      continue;
    }

    if (i < prePoint || i > latPoint) continue;

    result.push({ index: i, text: i + 1, to: i });
  }

  return result;
});

const navigateTo = (toPage) => {
  const limit = props.limit || 10;

  emit("update:modelValue", toPage * limit);
};
</script>

<template>
  <div class="flex space-x-1 items-center">
    <MButton
      class="px-0 py-0 w-7 h-7 text-center justify-center"
      :disabled="currentPage === 0"
      @click="navigateTo(0)"
    >
      <ion-icon class="text-base" name="chevron-back" />
    </MButton>

    <MButton
      class="px-2 py-0 min-w-[1.75rem] h-7 text-center justify-center items-center leading-4"
      v-for="page in pages"
      :key="page.index"
      :variant="page.index === currentPage ? 'primary' : 'secondary'"
      @click="navigateTo(page.to)"
    >
      {{ page.text }}
    </MButton>

    <MButton
      class="px-0 py-0 w-7 h-7 text-center justify-center"
      :disabled="currentPage === maxPage - 1"
      @click="navigateTo(maxPage - 1)"
    >
      <ion-icon class="text-base" name="chevron-forward" />
    </MButton>
  </div>
</template>
