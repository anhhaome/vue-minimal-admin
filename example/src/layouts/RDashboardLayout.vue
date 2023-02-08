<script setup>
import { reactive, ref, watch } from 'vue';
import { RouterView } from 'vue-router';

import MenuIcon from '@rugo-vn/vue/dist/ionicons/MenuIcon.vue';
import SettingsIcon from '@rugo-vn/vue/dist/ionicons/SettingsIcon.vue';
import RButtonDoc from '../components/docs/RButtonDoc.vue';

import { useAppStore } from '../stores/app';

const appStore = useAppStore();
const navControl = ref(false);
const navigations = reactive([
  { type: 'label', name: 'Overview' },
  {
    type: 'link',
    name: 'Introduction',
    href: '/dashboard',
    icon: 'home',
  },
  { type: 'label', name: 'Components' },
  {
    type: 'link',
    name: 'Button',
    href: '/dashboard/button',
    icon: 'play-circle',
  },
  {
    type: 'link',
    name: 'Input',
    href: '/dashboard/input',
    icon: 'terminal',
  },
  {
    type: 'link',
    name: 'Dialog',
    href: '/dashboard/dialog',
    icon: 'layers',
  },
  {
    type: 'link',
    name: 'Notification',
    href: '/dashboard/notification',
    icon: 'notifications',
  },
  {
    type: 'link',
    name: 'Icon',
    href: '/dashboard/icon',
    icon: 'flower',
  },
  { type: 'label', name: 'Features' },
  {
    type: 'link',
    name: 'Sign out',
    href: '/auth/signout',
    icon: 'log-out',
  },
]);

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
      />
      <div class="p-4">
        <RHeading type="h1">{{ appStore.view }}</RHeading>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <RouterView />
          </div>

          <RPanel>
            <RButtonDoc />
          </RPanel>
        </div>
      </div>
    </div>
  </div>
</template>
