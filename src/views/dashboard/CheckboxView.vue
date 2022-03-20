<script setup>
import { reactive, ref } from "vue";
import MCheckbox from "../../components/MCheckbox.vue";
import MPanel from "../../components/MPanel.vue";

const v = ref(true);

const checkList = ["This", "is", "a", "check", "list"];
const checkedList = reactive(new Set());

const toggleValue = (value, checked) => {
  if (checked) {
    checkedList.add(value);
  } else {
    checkedList.delete(value);
  }
};
</script>

<template>
  <h1 class="mt-4 text-3xl font-semibold">Checkbox</h1>

  <MPanel>
    <MCheckbox variant="primary" label="Click to toggle check" />
    <MCheckbox :modelValue="true" label="Click to toggle check" />
    <MCheckbox variant="success" label="Click to toggle check" />
    <MCheckbox
      :modelValue="true"
      variant="danger"
      label="Click to toggle check"
    />
    <MCheckbox
      variant="info"
      :indeterminate="true"
      label="Click to toggle check"
    />
    <MCheckbox
      :modelValue="true"
      variant="warn"
      label="Click to toggle check"
    />
  </MPanel>

  <MPanel>
    <p class="mb-2">
      Value: <code>{{ v }}</code>
    </p>
    <MCheckbox v-model="v" variant="primary" label="Click to toggle check" />
  </MPanel>
  <MPanel>
    <p class="mb-2">
      Value: <code>{{ checkedList }}</code>
    </p>

    <ul>
      <li v-for="item in checkList">
        <MCheckbox
          @update:modelValue="toggleValue(item, $event)"
          :label="item"
        />
      </li>
    </ul>
  </MPanel>
</template>
