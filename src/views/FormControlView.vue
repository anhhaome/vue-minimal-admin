<script setup>
const alert = (x) => window.alert(JSON.stringify(x, 0, 2))
const countries = [
  { text: 'Viet Nam', value: 'vn' },
  { text: 'United States of America', value: 'us' },
  { text: 'United Kingdom', value: 'uk' }
]
const colors = ['red', 'green', 'blue', 'cyan', 'emeral', 'pink', 'yellow']
</script>

<template>
  <RPanel>
    <RHeading class="mb-10" level="2">Form Control</RHeading>

    <RHeading class="mb-7" level="4">Empty Form</RHeading>

    <RForm class="mb-10" @submit="alert" v-slot="{ reset }">
      <RInput class="mb-7" name="email" label="Email" autofocus />

      <RSingleSelect class="mb-7" name="country" label="Country" :options="countries" />

      <RMultiSelect class="mb-7" name="colors" label="Colors" :options="colors" />

      <div>
        <RButton type="button" @click="reset" class="mr-2">Reset</RButton>
        <RButton variant="primary">Submit</RButton>
      </div>
    </RForm>

    <RHeading class="mb-7" level="4">Filled Form</RHeading>

    <RForm
      @submit="alert"
      v-slot="{ reset }"
      :value="{ email: 'vue@rugo.vn', country: 'vn', colors: ['green', 'purple'] }"
    >
      <RInput class="mb-7" name="email" label="Email" />

      <RSingleSelect class="mb-7" name="country" label="Country" :options="countries" />

      <RMultiSelect class="mb-7" name="colors" label="Colors" :options="colors" />

      <div>
        <RButton type="button" @click="reset" class="mr-2">Reset</RButton>
        <RButton variant="primary">Submit</RButton>
      </div>
    </RForm>
  </RPanel>
</template>
