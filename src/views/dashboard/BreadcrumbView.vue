<script setup>
import MBreadcrumb from "../../components/MBreadcrumb.vue";
import MPanel from "../../components/MPanel.vue";

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
