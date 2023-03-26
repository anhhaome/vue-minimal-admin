<script setup>
import IconLockup from '../../components/IconLockup.vue';
import { useAppStore } from '../../stores/app';
import RDropdown from '../../components/RDropdown.vue';

const appStore = useAppStore();
appStore.view = 'RDropdown';
</script>

<template>
  <RPanel>
    <RHeading type="h3">Button</RHeading>

    <RDropdown>
      <div class="p-4 w-80">Dropdown Content</div>
    </RDropdown>

    <RHeading class="mt-4" type="h3">Align</RHeading>

    <div class="flex justify-end">
      <RDropdown label="Left" boxAlign="left" margin="10" class="ml-2">
        <div class="p-4 w-80">Dropdown Content</div>
      </RDropdown>

      <RDropdown label="Auto" boxAlign="auto" margin="10" class="ml-2">
        <div class="p-4 w-80">Dropdown Content</div>
      </RDropdown>

      <RDropdown label="Right" boxAlign="right" margin="10" class="ml-2">
        <div class="p-4 w-80">Dropdown Content</div>
      </RDropdown>
    </div>

    <RHeading class="mt-4" type="h3">Custom open slot</RHeading>

    <RDropdown :margin="10" :disableAutoHide="true">
      <template #open="{ click, isOpened }">
        <a
          @click="click()"
          class="text-primary-500 underline cursor-pointer flex items-center select-none"
        >
          Click me
          <IconLockup
            :name="isOpened ? 'caret-up' : `caret-down`"
            class="ml-1 text-base mb-1"
          />
        </a>
      </template>

      <template v-slot="{ click }">
        <div class="w-24">
          <IconLockup
            class="w-12 h-12 text-lg inline-flex items-center justify-center hover:bg-gray-100 cursor-pointer"
            name="flower"
            @click="click()"
          />

          <IconLockup
            class="w-12 h-12 text-lg inline-flex items-center justify-center hover:bg-gray-100 cursor-pointer"
            name="beer"
            @click="click()"
          />
        </div>
      </template>
    </RDropdown>

    <RHeading class="mt-4" type="h3">Hover</RHeading>

    <RDropdown :enableHover="true" :margin="10">
      <template v-slot="{ click }">
        <div class="w-24">
          <IconLockup
            class="w-12 h-12 text-lg inline-flex items-center justify-center hover:bg-gray-100 cursor-pointer"
            name="flower"
            @click="click()"
          />

          <IconLockup
            class="w-12 h-12 text-lg inline-flex items-center justify-center hover:bg-gray-100 cursor-pointer"
            name="beer"
            @click="click()"
          />
        </div>
      </template>
    </RDropdown>
  </RPanel>
</template>
