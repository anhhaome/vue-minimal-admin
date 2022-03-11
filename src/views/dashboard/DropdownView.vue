<script setup>
import { inject } from "vue";

import MPanel from "../../components/MPanel.vue";
import MDropdown from "../../components/MDropdown.vue";
import MList from "../../components/MList.vue";
import MListItem from "../../components/MListItem.vue";

const mNoti = inject("mnoti");
const items = ["Profile", "Settings", "Messages", "Download"];

const sayHello = () => {
  mNoti.push('info', 'Hello from dropdown item')
}
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Dropdown</h1>

  <MPanel>
    <MDropdown label="Open dropdown" :autohide="true">
      <MList :items="items"></MList>
    </MDropdown>

    <MDropdown label="Open dropdown" :autohide="true" position="right" variant="none">
      <MList>
        <MListItem @click="sayHello">Do something</MListItem>
      </MList>
    </MDropdown>
  </MPanel>
</template>
