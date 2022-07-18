<script setup>
import { MPanel } from '@rugo-vn/vue';
import * as Icons from '@rugo-vn/vue/dist/ionicons';
</script>

<template>
  <h1 class="mt-4 text-3xl font-semibold">Icon</h1>

  <MPanel>
    <p class="mb-4">View more in: <a href="https://ionic.io/ionicons" target="blank" class="text-primary-500 underline">Ionicons</a></p>

    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-wrap p-4 gap-4">
        <div class="relative" v-for="icon in Object.keys(Icons)" :key="icon">
          <component class="text-2xl" :is="Icons[icon]" />
        </div>
      </div>

      <div class="flex flex-wrap p-4 gap-4 bg-black text-white">
        <div class="relative" v-for="icon in Object.keys(Icons)" :key="icon">
          <component class="text-2xl" :is="Icons[icon]" />
        </div>
      </div>

      <div class="flex flex-wrap p-4 gap-4">
        <div class="relative" v-for="icon in Object.keys(Icons)" :key="icon">
          <component class="text-2xl" type="outline" :is="Icons[icon]" />
        </div>
      </div>

      <div class="flex flex-wrap p-4 gap-4 bg-black text-white">
        <div class="relative" v-for="icon in Object.keys(Icons)" :key="icon">
          <component class="text-2xl" type="outline" :is="Icons[icon]" />
        </div>
      </div>

      <div class="flex flex-wrap p-4 gap-4">
        <div class="relative" v-for="icon in Object.keys(Icons)" :key="icon">
          <component class="text-2xl" type="sharp" :is="Icons[icon]" />
        </div>
      </div>

      <div class="flex flex-wrap p-4 gap-4 bg-black text-white">
        <div class="relative" v-for="icon in Object.keys(Icons)" :key="icon">
          <component class="text-2xl" type="sharp" :is="Icons[icon]" />
        </div>
      </div>
    </div>
  </MPanel>
</template>
