<script setup>
import { inject, ref } from "vue";
import { MButton, MPanel } from "@rugo-vn/vue";

const data = ref("");

const mHttp = inject("mhttp");
const createRequest = async () => {
  const client = mHttp.createHttpClient("http://ip-api.com");

  const res = await client.get("/json");

  data.value =
    res.config.method.toUpperCase() +
    " " +
    res.request.responseURL +
    " " +
    res.status +
    "\n" +
    JSON.stringify(res.data, 0, 2);
};
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Http</h1>

  <MPanel>
    <MButton variant="primary" @click="createRequest()"
      >Create a request</MButton
    >

    <pre v-if="data" class="mt-4">{{ data }}</pre>
  </MPanel>
</template>
