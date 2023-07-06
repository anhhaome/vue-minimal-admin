<script setup>
import { RApp, RHeading, RListItem, RSidePanel, RTopPanel } from '../lib/index.js';
import { RouterView, useRoute } from 'vue-router';
import { MAIN_NAVS, ROUTE_PATHS, SIDE_NAVS } from './constants';
import { reactive, ref, watch } from 'vue';

const route = useRoute();
const mainNavs = reactive(MAIN_NAVS);
const sideNavs = reactive(SIDE_NAVS);
const isDashboard = ref(false);

const deactive = (data = []) => {
  for (const item of data) {
    item.active = false;
    deactive(item.children);
  }
};

const active = (data = []) => {
  for (const item of data) {
    if (route.path.indexOf(item.action) === 0) item.active = true;

    active(item.children);
  }
};

const updateActive = () => {
  deactive(mainNavs);
  active(mainNavs);

  deactive(sideNavs);
  active(sideNavs);

  isDashboard.value = mainNavs.some((nav) => nav.action === ROUTE_PATHS.HOME && nav.active);
};

watch(() => route.path, updateActive);
</script>

<template>
  <RApp>
    <template #top>
      <RTopPanel :navs="mainNavs"></RTopPanel>
    </template>

    <template v-if="isDashboard" #left>
      <RSidePanel :navs="sideNavs">
        <!-- <template #header>
          <RListItem>
            <template #start>
              <RugoLogo class="w-8 h-8" />
            </template>

            <RHeading level="3" class="ml-2">Rugo Vue</RHeading>
          </RListItem>
        </template>

        <template #footer>
          <div class="text-center w-full text-xs text-gray-500">
            Copyright &copy; 2023 - @rugo-vn/vue
          </div>
        </template> -->
      </RSidePanel>
    </template>

    <RouterView />

    <!-- <template #left>
      <RSidePanel :data="NAVS">
        <template #header>
          <RListItem>
            <template #start>
              <RugoLogo class="w-8 h-8" />
            </template>

            <RHeading level="3" class="ml-2">Rugo Vue</RHeading>
          </RListItem>
        </template>

        <template #footer>
          <div class="text-center w-full text-xs text-gray-500">
            Copyright &copy; 2023 - @rugo-vn/vue
          </div>
        </template>
      </RSidePanel>
    </template>

    <template #top>
      <RTopPanel></RTopPanel>
    </template>

    <div class="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
      <RouterView />
    </div> -->
  </RApp>
</template>
