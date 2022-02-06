<script setup>
import MPanel from "../../components/MPanel.vue";
import MList from "../../components/MList.vue";

const items = ["Profile", "Settings", "Messages", "Download"];
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">List</h1>

  <MPanel>
    <MList :items="items"></MList>
  </MPanel>
</template>
