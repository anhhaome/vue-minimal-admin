<script setup>
import { MPanel, MList, MListItem } from '@rugo-vn/vue';
</script>

<template>
  <h1 class="mt-4 text-3xl flex items-center">
    <AppLogo size="lg" />
  </h1>
  <p class="mt-2">A Minimal Tailwind CSS Components</p>
  
  <MPanel>
    <h2 class="text-xl mb-4">New features</h2>
    
    <MList>
      <MListItem>
        <RouterLink to="/dashboard/icon">Icons</RouterLink>
      </MListItem>
    </MList>
  </MPanel>
</template>
