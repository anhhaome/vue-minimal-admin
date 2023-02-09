<script setup>
import { ref } from 'vue';
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
const opt = ref(null);
const chk = ref(false);

appStore.view = 'RCheckbox';
</script>

<template>
  <RPanel>
    <RHeading type="h2">Check List</RHeading>

    <div class="mb-4">
      <p class="mb-2">
        Checked Value: <b>{{ chk }}</b>
      </p>
      <RCheckbox label="Remember me" v-model="chk" />
    </div>

    <RHeading type="h2">Option List</RHeading>

    <div class="mb-4">
      <p class="mb-2">
        Selected Value: <b>{{ opt }}</b>
      </p>
      <RCheckbox
        type="radio"
        group="opt"
        value="opt-1"
        v-model="opt"
        label="Option 1"
      />
      <RCheckbox
        type="radio"
        group="opt"
        value="opt-2"
        v-model="opt"
        label="Option 2"
      />
      <RCheckbox
        type="radio"
        group="opt"
        value="opt-3"
        v-model="opt"
        label="Option 3"
      />
      <RCheckbox
        type="radio"
        group="opt"
        value="opt-4"
        v-model="opt"
        label="Option 4"
      />
    </div>

    <RHeading type="h2">Styling checkboxes</RHeading>

    <div class="mb-2">
      <RCheckbox variant="primary" :modelValue="true" />
      <RCheckbox variant="secondary" :modelValue="true" />
      <RCheckbox variant="success" :modelValue="true" />
      <RCheckbox variant="danger" :modelValue="true" :indeterminate="true" />
      <RCheckbox variant="warn" :modelValue="true" :indeterminate="true" />
      <RCheckbox variant="info" :modelValue="true" :indeterminate="true" />
    </div>
  </RPanel>
</template>
