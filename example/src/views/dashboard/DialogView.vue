<script setup>
import { ref } from 'vue';
import { LoremIpsum } from 'lorem-ipsum';
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
const refDialog = ref(null);
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

appStore.view = 'Dialog';
</script>

<template>
  <RHeading>Dialog</RHeading>

  <RPanel>
    <RHeading type="h3">Button</RHeading>
    <RDialog>Hello World</RDialog>

    <RHeading class="mt-4" type="h3">Trigger</RHeading>
    <RDialog ref="refDialog" :label="false">
      <RButton variant="primary" @click="refDialog.hide()">Hide</RButton>
    </RDialog>
    <RButton variant="primary" @click="refDialog.show()">Show</RButton>

    <RHeading class="mt-4" type="h3">Long page</RHeading>
    <RDialog>
      <div
        v-html="
          lorem
            .generateParagraphs(20)
            .split('\n')
            .map((p) => `<p class='mb-4 last:mb-0'>${p}</p>`)
            .join('')
        "
      ></div>
    </RDialog>
  </RPanel>
</template>
