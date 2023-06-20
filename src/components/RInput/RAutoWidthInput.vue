<script setup>
import { ref } from 'vue'

const props = defineProps({
  value: String
})
defineEmits(['input', 'blur'])

const inputValue = ref(props.value)
const inputRef = ref(null)

defineExpose({
  focus: () => inputRef.value.focus()
})
</script>

<template>
  <div
    class="relative inline-block after:content-[attr(data-value)] after:h-full after:inline-block after:opacity-0 after:pointer-events-none after:min-w-[2px] after:whitespace-pre"
    :data-value="inputValue"
  >
    <input
      class="border absolute w-full top-0 left-0 outline-none bg-transparent"
      ref="inputRef"
      autocomplete="false"
      spellcheck="false"
      @input="
        (e) => {
          inputValue = e.target.value
          $emit('input', e.target.value)
        }
      "
      @blur="$emit('blur')"
    />
  </div>
</template>
