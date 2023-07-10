<script setup>
import {
  RHeading,
  RButton,
  RInput,
  RForm,
  RSingleSelect,
  RMultiSelect,
  useDialog
} from '@rugo-vn/vue';
import ComponentViewTemplate from '../../components/ComponentViewTemplate.vue';

const { alert: showAlert } = useDialog();

const alert = (x) => showAlert(x);
const countries = [
  { text: 'Viet Nam', value: 'vn' },
  { text: 'United States of America', value: 'us' },
  { text: 'United Kingdom', value: 'uk' }
];
const colors = ['red', 'green', 'blue', 'cyan', 'emeral', 'pink', 'yellow'];
</script>

<template>
  <ComponentViewTemplate title="Form" :components="['RForm']">
    <template #row-1>
      <RHeading level="4" class="mb-4">Empty Button</RHeading>

      <RForm @submit="alert" v-slot="{ reset }">
        <RInput class="mb-4" name="email" label="Email" autofocus />

        <RInput class="mb-4" name="dob" label="Date of Birth" type="date" />

        <RSingleSelect class="mb-4" name="country" label="Country" :options="countries" />

        <RMultiSelect class="mb-4" name="colors" label="Colors" :options="colors" />

        <div>
          <RButton type="button" @click="reset" class="mr-2">Reset</RButton>
          <RButton variant="primary">Submit</RButton>
        </div>
      </RForm>
    </template>

    <template #row-2>
      <RHeading level="4" class="mb-4">Filled Button</RHeading>

      <RForm
        @submit="alert"
        v-slot="{ reset }"
        :value="{
          email: 'vue@rugo.vn',
          dob: '2000-01-01',
          country: 'vn',
          colors: ['green', 'purple']
        }"
      >
        <RInput class="mb-4" name="email" label="Email" />

        <RInput class="mb-4" name="dob" label="Date of Birth" type="date" />

        <RSingleSelect class="mb-4" name="country" label="Country" :options="countries" />

        <RMultiSelect class="mb-4" name="colors" label="Colors" :options="colors" />

        <div>
          <RButton type="button" @click="reset" class="mr-2">Reset</RButton>
          <RButton variant="primary">Submit</RButton>
        </div>
      </RForm>
    </template>
  </ComponentViewTemplate>
</template>
