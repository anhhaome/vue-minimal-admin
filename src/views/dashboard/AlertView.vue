<script setup>
import MAlert from "../../components/MAlert.vue";
import MPanel from "../../components/MPanel.vue";

const onClose = () => {
  console.log("Closed!");
};
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Alert</h1>

  <MPanel>
    <MAlert icon="alert-circle" variant="primary" @close="onClose">
      Primary Alert! This is a
      <a class="font-semibold underline" href="#">example link</a> to preview.
    </MAlert>

    <MAlert icon="alert-circle" variant="secondary" @close="onClose">
      Secondary Alert! This is a
      <a class="font-semibold underline" href="#">example link</a> to preview.
    </MAlert>

    <MAlert icon="alert-circle" variant="success" @close="onClose">
      Success Alert! This is a
      <a class="font-semibold underline" href="#">example link</a> to preview.
    </MAlert>

    <MAlert icon="alert-circle" variant="danger" @close="onClose">
      Danger Alert! This is a
      <a class="font-semibold underline" href="#">example link</a> to preview.
    </MAlert>

    <MAlert icon="alert-circle" variant="info" @close="onClose">
      Info Alert! This is a
      <a class="font-semibold underline" href="#">example link</a> to preview.
    </MAlert>

    <MAlert icon="alert-circle" variant="warn" @close="onClose">
      Warn Alert! This is a
      <a class="font-semibold underline" href="#">example link</a> to preview.
    </MAlert>
  </MPanel>
</template>
