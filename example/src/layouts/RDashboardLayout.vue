<script setup>
import { markRaw, reactive, ref, watch } from "vue";
import { RouterView } from "vue-router";

import LogOutIcon from "@rugo-vn/vue/dist/ionicons/LogOutIcon.vue";
import HomeIcon from "@rugo-vn/vue/dist/ionicons/HomeIcon.vue";
import PlayCircleIcon from "@rugo-vn/vue/dist/ionicons/PlayCircleIcon.vue";
import BrushIcon from "@rugo-vn/vue/dist/ionicons/BrushIcon.vue";
import MenuIcon from "@rugo-vn/vue/dist/ionicons/MenuIcon.vue";
import SettingsIcon from "@rugo-vn/vue/dist/ionicons/SettingsIcon.vue";

import { useAppStore } from  '../stores/app';

const appStore = useAppStore();
const navControl = ref(false);
const navigations = reactive([
  { type: 'label', name: 'Overview' },
  { type: 'link', name: 'Introduction', href: '/dashboard', icon: markRaw(HomeIcon) },
  { type: 'label', name: 'Components' },
  { type: "link", name: "Button", href: "/dashboard/button", icon: markRaw(PlayCircleIcon), },
  { type: "link", name: "Input", href: "/dashboard/input", icon: markRaw(BrushIcon), },
  { type: 'label', name: 'Features' },
  { type: 'link', name: 'Sign out', href: '/auth/signout', icon: markRaw(LogOutIcon) },
]);

// navigation
const changeView = () => {
  for (let item of navigations){
    if (item.name === appStore.view)
      item.active = true;
    else
      item.active = false;
  }
}

watch(() => appStore.view, changeView);
changeView();


// action
const handleAction = (type) => {
  if (type === 'left'){
    navControl.value = !navControl.value;
  }
}
</script>

<template>
  <div class="flex">
    <RSideNav :items="navigations" v-model="navControl" />

    <div class="flex-1">
      <RTopBar @action="handleAction" :leftIcon="MenuIcon" :rightIcon="SettingsIcon" />
      <div class="p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>
