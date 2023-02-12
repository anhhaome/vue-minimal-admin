<script setup>
import { ref, computed, nextTick } from 'vue';
import { useAppStore } from '../../stores/app';
import { icons } from '@rugo-vn/vue/dist/icon-names';
import IconLockup from '../../components/IconLockup.vue';

const appStore = useAppStore();
appStore.view = 'Icon';

const iconSearchName = ref('');
const selectedName = ref('');

const filteredIcons = computed(() =>
  icons.filter((name) =>
    new RegExp(iconSearchName.value.toLowerCase().trim(), 'g').test(name)
  )
);

const doSelect = (name) => {
  selectedName.value = '';
  nextTick(() => {
    selectedName.value = name;
  });
};
</script>

<template>
  <RPanel class="mb-20">
    <RInput class="mt-0 mb-4" label="Search" v-model="iconSearchName" />

    <div
      class="fixed bottom-0 left-0 w-screen h-20 bg-white border-t flex items-center p-4"
      v-if="selectedName"
    >
      <IconLockup class="text-3xl mr-4" :name="selectedName" />
      <RInput
        class="my-0"
        :modelValue="selectedName"
        :focus="true"
        :readonly="true"
      />
    </div>

    <div class="flex flex-wrap">
      <RButton
        variant="none"
        class="w-16 h-16 inline-flex items-center justify-center border rounded m-2"
        v-for="name in filteredIcons"
        :key="name"
        title="name"
        @click="doSelect(name)"
      >
        <IconLockup class="text-3xl" :name="name" />
      </RButton>
    </div>
  </RPanel>
</template>
