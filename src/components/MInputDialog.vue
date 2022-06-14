<script setup>
import { ref, watch } from "vue";

import MDialog from "./MDialog.vue";
import MInput from "./MInput.vue";
import MButton from "./MButton.vue";

const dialog = ref(null);
const result = ref(undefined);
const inputValue = ref("");

defineExpose({
  show() {
    return new Promise((resolve) => {
      dialog.value.show();

      const unwatch = watch(result, (newValue) => {
        unwatch();
        dialog.value.hide();
        resolve(newValue ? inputValue.value : null);
        result.value = undefined;
        inputValue.value = '';
      });
    });
  },
});
</script>

<template>
  <div class="m-input-dialog">
    <MDialog ref="dialog" :label="false" @close="result = null">
      <div class="text-center">
        <MInput label="Enter your input" v-model="inputValue" :focus="true" @keyup.enter="result = true" />
        <MButton variant="primary" @click="result = true">OK</MButton>
      </div>
    </MDialog>
  </div>
</template>

<style lang="scss">
.m-input-dialog {
  .m-dialog .m-content-dialog {
    @apply mt-52 max-w-lg;
  }
}
</style>