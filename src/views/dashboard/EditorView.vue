<script setup>
import MRichEditor from "../../components/MRichEditor.vue";
import MPanel from "../../components/MPanel.vue";
import { ref } from "vue";
import { inject } from "vue";

const mNoti = inject('mnoti');

const richValue = ref('Hello Rich Text Editor by QuillJS');

</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Editor</h1>

  <MPanel>
    <h2 class="text-xl mb-2">Rich Text</h2>

    <p class="mb-2">
      Value: <code>{{ richValue }}</code>
    </p>

    <MRichEditor
      v-model="richValue"
      @insertImage="mNoti.push('info', 'Do custom insert image')"
    />
  </MPanel>
</template>
