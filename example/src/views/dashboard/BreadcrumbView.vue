<script setup>
import { MBreadcrumb, MPanel } from '@rugo-vn/vue';

const items = [
  { text: "Home", href: "/" },
  { text: "Mintailor", href: "/dashboard" },
  { text: "Breadcrumb", href: "/dashboard/breadcrumb", active: true },
];
</script>

<template>
  <h1 class="mt-4 text-3xl font-semibold">Breadcrumb</h1>

  <MPanel>
    <MBreadcrumb :items="items" />
  </MPanel>
</template>
