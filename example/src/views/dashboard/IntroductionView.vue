<script setup>
import { useAppStore } from '../../stores/app';
import { NAVS } from '../../constants';
import { reactive, markRaw } from 'vue';
import IconLockup from '../../components/IconLockup.vue';

const appStore = useAppStore();
appStore.view = 'Introduction';

const navigations = reactive(NAVS);
</script>

<template>
  <RPanel>
    <RHeading type="h2">@rugo-vn/vue</RHeading>
    <p class="mt-2">A Vue Component Library with TailwindCSS.</p>
  </RPanel>

  <div
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4 mt-4"
  >
    <RouterLink
      v-for="item of navigations.filter((i) => i.type === 'link')"
      :to="item.href"
      :key="item.name"
    >
      <div
        class="p-4 rounded border border-gray-100 mt-4 dark:bg-gray-900 dark:border-gray-800 mt-[0!important] bg-primary-500 text-white"
      >
        <IconLockup :name="item.icon" class="text-3xl flex justify-center" />
        <div class="text-center mt-4">{{ item.name }}</div>
      </div>
    </RouterLink>
  </div>
</template>
