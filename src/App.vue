<script setup>
import { RApp, RHeading, RListItem, RSideNavPanel, RTopPanel } from '../lib/index.js';
import { RouterView } from 'vue-router';
import { NAVS } from './constants';
import RugoLogo from './components/RugoLogo.vue';
</script>

<template>
  <RApp>
    <template #left>
      <RSideNavPanel :data="NAVS">
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
      </RSideNavPanel>
    </template>

    <template #top>
      <RTopPanel></RTopPanel>
    </template>

    <div class="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
      <RouterView />
    </div>
  </RApp>
</template>
