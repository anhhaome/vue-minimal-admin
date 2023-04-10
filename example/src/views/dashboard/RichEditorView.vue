<script setup>
import { useAppStore } from '../../stores/app';
import { ref } from 'vue';

const appStore = useAppStore();
appStore.view = 'RRichEditor';

const content = ref(
  '<p>Go <strong>go</strong> live <span class="ql-formula" data-value="e=mc^2">e=mc^2</span> </p>'
);

const imageHandler = function (setImage) {
  setImage(
    'https://static.wikia.nocookie.net/gensin-impact/images/6/66/Item_Aranara_Flower.png'
  );
};
</script>

<template>
  <RPanel>
    <RHeading type="h3">Free Editor</RHeading>
    <RRichEditor />

    <RHeading type="h3" class="mt-4">Live Editor</RHeading>
    <RRichEditor v-model="content" @insertImage="imageHandler" />

    <label class="block my-2 text-xs uppercase tracking-wider font-light"
      >Preview:
    </label>
    <div v-html="content"></div>
  </RPanel>
</template>
