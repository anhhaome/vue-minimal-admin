<script setup>
import { ref } from 'vue';
import { lorem } from '../../utils';
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
const refDialog = ref(null);

appStore.view = 'RDialog';
</script>

<template>
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

    <RHeading class="mt-4" type="h3">Custom open slot</RHeading>
    <RDialog>
      <template #open="{ click }">
        <a @click="click()" class="text-primary-500 underline cursor-pointer"
          >Click me</a
        >
      </template>
      Content
    </RDialog>
  </RPanel>
</template>
