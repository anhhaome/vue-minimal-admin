<script setup>
import MPanel from "../../components/MPanel.vue";
import MDropdown from "../../components/MDropdown.vue";
import MList from "../../components/MList.vue";

const items = ["Profile", "Settings", "Messages", "Download"];
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Dropdown</h1>

  <MPanel>
    <MDropdown :autohide="true">
      <MList :items="items"></MList>
    </MDropdown>
  </MPanel>
</template>
