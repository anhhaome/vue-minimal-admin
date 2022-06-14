<script setup>
import { ref, watch } from "vue";

import MDialog from "./MDialog.vue";
import MButton from "./MButton.vue";

const dialog = ref(null);
const result = ref(undefined);

defineExpose({
  show() {
    return new Promise((resolve) => {
      dialog.value.show();

      const unwatch = watch(result, (newValue) => {
        unwatch();
        dialog.value.hide();
        resolve(newValue);
        result.value = undefined;
      });
    });
  },
});
</script>

<template>
  <div class="m-confirm-dialog">
    <MDialog ref="dialog" :label="false" @close="result = null">
      <div class="text-center">
        <h3 class="mb-4 text-lg">Are you confirm?</h3>
        <MButton class="mx-2" @click="result = true" variant="primary"
          >Yes</MButton
        >
        <MButton class="mx-2" @click="result = false">No</MButton>
      </div>
    </MDialog>
  </div>
</template>

<style lang="scss">
.m-confirm-dialog {
  .m-dialog .m-content-dialog {
    @apply mt-52 max-w-lg;
  }
}
</style>