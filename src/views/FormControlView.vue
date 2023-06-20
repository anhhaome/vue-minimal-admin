<script setup>
const alert = (x) => window.alert(JSON.stringify(x, 0, 2))
</script>

<template>
  <RPanel>
    <RForm @submit="alert" v-slot="{ reset }">
      <div class="mb-7">
        <RInput name="email" label="Email" />
      </div>

      <div class="mb-7">
        <RButton type="button" @click="reset" class="mr-2">Reset</RButton>
        <RButton variant="primary">Submit</RButton>
      </div>
    </RForm>
  </RPanel>
</template>
