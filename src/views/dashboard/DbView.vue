<script setup>
import { inject, ref } from "vue";
import MAlert from "../../components/MAlert.vue";
import MButton from "../../components/MButton.vue";
import MPanel from "../../components/MPanel.vue";

const db = inject("mdb");
const step = ref(1);

const initDb = async () => {
  console.log("Start init...");
  await db.init("demo", 2, {
    messages: "++id,name,content",
  });
  console.log("...init done!");
  step.value = 2;
};

const cleanDb = async () => {
  console.log("Start clean...");
  await db.clearDB();
  console.log("...clean done!");
  step.value = 3;
};

const importDb = async () => {
  console.log("Start import...");
  await db.importDB(
    '{"messages":[{"name":"mintailor","content":"Hello from import.","id":1}]}'
  );
  console.log("...import done!");
  step.value = 4;
};

const writeDb = async () => {
  console.log("Start write...");
  await db.create("messages", { name: "mintailor", content: "A new content" });
  console.log("...write done!");
  step.value = 5;
};

const exportDb = async () => {
  console.log("Start export...");
  const json = await db.exportDB();
  console.log("...export done!");
  console.log(`Result: ${json}`);
  step.value = 6;
};

const deleteDb = async () => {
  console.log("Start delete...");
  await db.deleteDB();
  console.log("...delete done!");
  step.value = 1;
};
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Database</h1>

  <MPanel>
    <MAlert variant="warn" class="italic" icon="alert-circle">
      Open console to see the result!
    </MAlert>

    <div class="mb-4">
      <span class="inline-block w-12">Step 1:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="initDb"
        :disabled="step !== 1"
        >Init Database</MButton
      >
    </div>

    <div class="mb-4">
      <span class="inline-block w-12">Step 2:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="cleanDb"
        :disabled="step !== 2"
        >Clean Db</MButton
      >
    </div>

    <div class="mb-4">
      <span class="inline-block w-12">Step 3:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="importDb"
        :disabled="step !== 3"
        >Import from text</MButton
      >
    </div>

    <div class="mb-4">
      <span class="inline-block w-12">Step 4:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="writeDb"
        :disabled="step !== 4"
        >Write to Db</MButton
      >
    </div>

    <div class="mb-4">
      <span class="inline-block w-12">Step 5:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="exportDb"
        :disabled="step !== 5"
        >Export Db</MButton
      >
    </div>

    <div class="mb-4">
      <span class="inline-block w-12">Step 6:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="deleteDb"
        :disabled="step !== 6"
        >Delete Db</MButton
      >
    </div>
  </MPanel>
</template>
