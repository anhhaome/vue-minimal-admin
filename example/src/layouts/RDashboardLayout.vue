<script setup>
import { reactive, ref, watch, markRaw } from 'vue';
import { RouterView } from 'vue-router';
import { clone } from 'ramda';

import MenuIcon from '@rugo-vn/vue/dist/ionicons/MenuIcon.vue';
import SettingsIcon from '@rugo-vn/vue/dist/ionicons/SettingsIcon.vue';
import Docs from '../components/docs';

import { useAppStore } from '../stores/app';
import IconLockup from '../components/IconLockup.vue';
import { NAVS } from '../constants';

const appStore = useAppStore();
const navControl = ref(false);
const navigations = reactive(clone(NAVS));

for (const item of navigations) {
  item.icon = [markRaw(IconLockup), item.icon];
}

// navigation
const changeView = () => {
  for (let item of navigations) {
    if (item.name === appStore.view) item.active = true;
    else item.active = false;
  }
};

watch(() => appStore.view, changeView);
changeView();

// action
const handleAction = (type) => {
  if (type === 'left') {
    navControl.value = !navControl.value;
  }
};
</script>

<template>
  <div class="flex">
    <RSideNav :items="navigations" v-model="navControl" />

    <div class="flex-1">
      <RTopBar
        @action="handleAction"
        :leftIcon="MenuIcon"
        :rightIcon="SettingsIcon"
      >
        <template #logo>Logo</template>
      </RTopBar>
      <div class="p-4">
        <RHeading type="h1">{{ appStore.view }}</RHeading>

        <div class="flex mt-[-1rem]">
          <div class="flex-1">
            <RouterView />
          </div>

          <RPanel
            class="doc-preview w-[50%] max-w-[520px] ml-4"
            v-if="Docs[appStore.view]"
          >
            <component :is="Docs[appStore.view]" />
          </RPanel>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.doc-preview h2 {
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.doc-preview h2:first-child {
  margin-top: 0;
}

.doc-preview table {
  width: 100%;
}
.doc-preview table td,
.doc-preview table th {
  border: 1px solid #f0f0f0;
  padding: 0.25rem 0.5rem;
}
.doc-preview li:before {
  content: ' - ';
}
code {
  color: rgb(219, 39, 132);
}
</style>
